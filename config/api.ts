import { TOKEN } from '@/config';

export const API_ENDPOINTS = {
  PROJECTS: {
    LIST: '/api/lists',
    ITEM: '/api/list-item',
  },
  IMAGES: '/api/image',
  BLOG: '/api/blog',
} as const;

export const NOTION_BASE_URL = 'https://api.notion.com/v1';
export const NOTION_VERSION = '2022-06-28';
export const NOTION_HEADERS = {
  Accept: 'application/json',
  'Notion-Version': NOTION_VERSION,
  'Content-Type': 'application/json',
  Authorization: `Bearer ${TOKEN}`,
} as const;

// 노션 DB의 hide 체크박스가 켜진 프로젝트(작업 중 등)는 사이트 어디에도 보이지 않게
export const VISIBLE_PROJECT_FILTER = {
  property: 'hide',
  checkbox: { equals: false },
} as const;

export const NOTION_ENDPOINTS = {
  databaseQuery: (databaseId: string) => `${NOTION_BASE_URL}/databases/${databaseId}/query`,
  blockChildren: (blockId: string) => `${NOTION_BASE_URL}/blocks/${blockId}/children`,
  pageDetail: (pageId: string) => `${NOTION_BASE_URL}/pages/${pageId}`,
} as const;
