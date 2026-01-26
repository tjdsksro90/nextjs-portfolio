import fetch from 'node-fetch';
import { getPlaiceholder } from 'plaiceholder';

const getBase64 = async (src: string) => {
  let buffer;

  try {
    let imageUrl: string;
    
    if (src.startsWith('http')) {
      // 외부 URL 처리
      imageUrl = src;
    } else {
      // 로컬 파일 처리 - 배포 환경 호환성을 위해 절대 URL로 변환
      // 서버 사이드에서는 환경 변수나 요청 헤더를 통해 base URL을 결정
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                     (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                     'http://localhost:3000');
      imageUrl = src.startsWith('/') ? `${baseUrl}${src}` : `${baseUrl}/${src}`;
    }

    // 모든 이미지를 fetch로 가져오기 (배포 환경 호환성)
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }
    buffer = await response.buffer();

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
