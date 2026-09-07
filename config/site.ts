import { LOCAL_BASE_URL, NEXT_PUBLIC_BASE_URL } from '@/config';

export const SITE_CONFIG = {
  title: 'Portfolio',
  year: 2026,
  themeUrl: 'https://tailwindcss.com/',
  baseUrl: NEXT_PUBLIC_BASE_URL || LOCAL_BASE_URL,
} as const;

export const SOCIAL_LINKS = {
  email: 'mailto:tjdsksro90@gmail.com',
  github: 'https://github.com/tjdsksro90',
  blog: 'https://gmrdlsrkswnl.tistory.com/',
  instagram: 'https://www.instagram.com/hojun456',
  openKakao: 'https://open.kakao.com/o/sKGqxszg',
} as const;

interface MenuItemType {
  label: string;
  path: string;
  isExternal: boolean;
}

export const MENU_ITEMS: Record<string, MenuItemType> = {
  home: {
    label: '홈',
    path: '/',
    isExternal: false,
  },
  about: {
    label: '소개',
    path: '/about',
    isExternal: false,
  },
  projects: {
    label: '프로젝트',
    path: '/projects',
    isExternal: false,
  },
  blog: {
    label: '블로그',
    path: '/blog',
    isExternal: false,
  },
  contact: {
    label: '연락하기',
    path: SOCIAL_LINKS.openKakao,
    isExternal: true,
  },
};
