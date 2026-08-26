import { DATABASE_ID } from '@/config';
import { NOTION_ENDPOINTS, NOTION_HEADERS } from '@/config/api';
import type { NextApiRequest, NextApiResponse } from 'next';

const removeUndefined = (obj: any): any => {
  if (obj === undefined || obj === null) return null;
  if (Array.isArray(obj)) return obj.map(item => removeUndefined(item));
  if (typeof obj === 'object') {
    const cleaned: any = {};
    for (const key in obj) {
      if (obj[key] !== undefined) {
        cleaned[key] = removeUndefined(obj[key]);
      }
    }
    return cleaned;
  }
  return obj;
};

// 핵심 로직을 독립된 함수로 분리 (SSR에서도 직접 호출할 수 있게 export)
export async function fetchListItemData(title: string) {
  if (!title) return { blocksData: [], pagesData: null };

  const searchRes = await fetch(NOTION_ENDPOINTS.databaseQuery(DATABASE_ID as string), {
    method: 'POST',
    headers: NOTION_HEADERS,
    body: JSON.stringify({
      filter: {
        property: 'Name',
        title: { equals: title },
      },
      page_size: 1,
    }),
  });

  if (!searchRes.ok) {
    throw new Error(`Database query failed: ${searchRes.status}`);
  }

  const searchData = await searchRes.json();
  if (!searchData.results || searchData.results.length === 0) {
    return { blocksData: [], pagesData: null };
  }

  const projectId = searchData.results[0].id;

  const [resBlocks, resPages] = await Promise.all([
    fetch(NOTION_ENDPOINTS.blockChildren(projectId), {
      method: 'GET',
      headers: NOTION_HEADERS,
    }),
    fetch(NOTION_ENDPOINTS.pageDetail(projectId), {
      method: 'GET',
      headers: NOTION_HEADERS,
    }),
  ]);

  const blocksData = await resBlocks.json();
  const pagesData = await resPages.json();

  return {
    blocksData: blocksData.results ? removeUndefined(blocksData.results) : [],
    pagesData: removeUndefined(pagesData),
  };
}

// Next.js API 라우트 핸들러
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const title = (req.query.title || req.query.id) as string;

  try {
    const data = await fetchListItemData(title);
    return res.status(200).json(data);
  } catch (error) {
    console.error('API Handler Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
