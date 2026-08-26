import axios from 'axios';

// 서버 환경과 클라이언트(브라우저) 환경에 맞는 Base URL 반환
const getBaseUrl = () => {
  // 1. 브라우저 환경 (클라이언트 사이드)
  if (typeof window !== 'undefined') return '';

  // 2. Vercel 등 배포 환경
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // 3. 로컬 개발 서버 (기본 3000 포트)
  return `http://localhost:${process.env.PORT || 3000}`;
};

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});
