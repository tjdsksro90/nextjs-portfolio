import fs from 'node:fs/promises';
import path from 'node:path';
import fetch from 'node-fetch';
import { getPlaiceholder } from 'plaiceholder';

const getBase64 = async (src: string) => {
  let buffer;

  try {
    if (src.startsWith('http')) {
      // 외부 URL 처리
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      buffer = await response.buffer();
    } else {
      // 로컬 파일 처리
      buffer = await fs.readFile(path.join('./public', src));
    }

    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      ...plaiceholder,
      img: { src, height, width },
    };
  } catch (error) {
    console.error('Error fetching or converting image:', error);
    throw error;
  }
};

export default getBase64;
