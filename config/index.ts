export const DATABASE_ID = process.env.NOTION_DATABASE as string;
export const TOKEN = process.env.NOTION_TOKEN as string;
export const BLOG_RSS_URL = process.env.BLOG_RSS_URL as string;
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const DEFAULT_PORT = process.env.PORT || 3000;
export const LOCAL_BASE_URL = `http://localhost:${DEFAULT_PORT}`;
