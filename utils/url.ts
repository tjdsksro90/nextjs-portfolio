// url.ts

import { LOCAL_BASE_URL } from '@/constants/site';

export const getBaseUrl = (req?: { headers: { [key: string]: string | undefined } }) => {
  if (req) {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    if (host) return `${protocol}://${host}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return LOCAL_BASE_URL;
};
