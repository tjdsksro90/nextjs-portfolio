import { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

type FeedItem = {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
};

type Data =
  | {
      items: FeedItem[];
    }
  | {
      error: string;
    };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log('API route called');
  const parser = new Parser({
    customFields: {
      feed: [],
      item: [],
    },
    requestOptions: {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'application/rss+xml, application/xml',
      },
    },
  });

  const BLOG_RSS_URL = process.env.BLOG_RSS_URL;

  if (!BLOG_RSS_URL) {
    console.error('BLOG_RSS_URL is not defined in environment variables');
    res.status(400).json({ error: 'BLOG_RSS_URL is not defined in environment variables' });
    return;
  }

  try {
    console.log(`Fetching RSS feed from ${BLOG_RSS_URL}`);
    const feed = await parser.parseURL(BLOG_RSS_URL);
    const items: FeedItem[] = feed.items.map(item => ({
      title: item.title ?? '',
      link: item.link ?? '',
      contentSnippet: item.contentSnippet ?? '',
      isoDate: item.isoDate ?? '',
    }));
    console.log(`Fetched ${items.length} items from RSS feed`);
    res.status(200).json({ items });
  } catch (error) {
    console.error('Failed to fetch RSS feed:', error);
    res.status(500).json({ error: 'Failed to fetch RSS feed' });
  }
};

export default handler;
