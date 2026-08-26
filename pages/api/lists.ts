import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { TOKEN, DATABASE_ID } from '@/config/index';
import { NOTION_ENDPOINTS, NOTION_HEADERS } from '@/constants/api';

// 테스트용 강제 지연 함수
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('TOKEN Check:', process.env.NOTION_TOKEN ? 'EXISTS' : 'UNDEFINED');
  console.log('DATABASE_ID Check:', DATABASE_ID);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  //   await delay(2000); // 테스트용: 2초(2000ms) 동안 강제로 딜레이 발생

  try {
    const { cursor, isTotalCount } = req.body;

    const options = {
      method: 'POST',
      url: NOTION_ENDPOINTS.databaseQuery(DATABASE_ID as string),
      headers: NOTION_HEADERS,
      data: isTotalCount
        ? {
            page_size: 100,
          }
        : {
            page_size: 5, // 리스트 불러오기 5개씩
            sorts: [
              {
                property: 'WorkPeriod',
                direction: 'descending',
              },
            ],
            ...(cursor && { start_cursor: cursor }),
          },
    };

    const response = await axios.request(options);
    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Notion API Detailed Error:', error.response?.data || error.message);
    return res.status(500).json({
      error: 'Notion API 호출 실패',
      details: error.response?.data || error.message,
    });
  }
}
