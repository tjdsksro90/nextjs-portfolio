export const DEFAULT_PORT = process.env.PORT || 3000;
export const LOCAL_BASE_URL = `http://localhost:${DEFAULT_PORT}`;

export const SITE_CONFIG = {
  title: 'Portfolio',
  year: 2026,
  themeUrl: 'https://tailwindcss.com/',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || LOCAL_BASE_URL,
} as const;

export const SOCIAL_LINKS = {
  email: 'mailto:tjdsksro90@gmail.com',
  github: 'https://github.com/tjdsksro90',
  blog: 'https://gmrdlsrkswnl.tistory.com/',
  instagram: 'https://www.instagram.com/hojun456',
  openKakao: 'https://open.kakao.com/o/sKGqxszg',
} as const;

export type MenuItemType = [string, string, boolean];

export const MENU_ITEMS: Record<string, MenuItemType> = {
  home: ['홈', '/', false],
  about: ['소개', '/about', false],
  projects: ['프로젝트', '/projects', false],
  blog: ['블로그', '/blog', false],
  contact: ['연락하기', SOCIAL_LINKS.openKakao, true],
};
