import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Parser from 'rss-parser';
import { BLOG_RSS_URL } from '@/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const parser = new Parser();
    const response = await axios.get(BLOG_RSS_URL as string, { timeout: 5000 });
    const feed = await parser.parseString(response.data);
    const posts: Post[] = feed.items.map((item: { [key: string]: string }) => ({
      title: item.title,
      link: item.link,
      content: item.content || item['content:encodedSnippet'],
      isoDate: item.isoDate,
    }));

    // 배포 환경(CDN)에서 5분 캐싱, 이후 10분간은 캐시를 보여주면서 백그라운드 갱신
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ posts });
  } catch (error: any) {
    console.error('Failed to fetch posts:', error.message);
    return res.status(500).json({
      error: '블로그 RSS 호출 실패',
      details: error.message,
    });
  }
}
