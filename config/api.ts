import { TOKEN } from '@/config';

export const API_ENDPOINTS = {
  PROJECTS: {
    LIST: '/api/lists',
    ITEM: '/api/list-item',
  },
} as const;

export const NOTION_BASE_URL = 'https://api.notion.com/v1';
export const NOTION_VERSION = '2022-06-28';
export const NOTION_HEADERS = {
  Accept: 'application/json',
  'Notion-Version': NOTION_VERSION,
  'Content-Type': 'application/json',
  Authorization: `Bearer ${TOKEN}`,
} as const;

export const NOTION_ENDPOINTS = {
  databaseQuery: (databaseId: string) => `${NOTION_BASE_URL}/databases/${databaseId}/query`,
  blockChildren: (blockId: string) => `${NOTION_BASE_URL}/blocks/${blockId}/children`,
  pageDetail: (pageId: string) => `${NOTION_BASE_URL}/pages/${pageId}`,
} as const;
