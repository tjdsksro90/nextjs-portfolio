import { LOCAL_BASE_URL } from '@/config/site';
import fetch from 'node-fetch';
import { getPlaiceholder } from 'plaiceholder';

const getBase64 = async (src: string, requestHeaders?: any) => {
  // Notion S3 이미지는 서버 사이드에서 fetch 불가 (서명된 URL)
  // 클라이언트에서 직접 처리하도록 빈 데이터 반환
  if (src.includes('prod-files-secure.s3.us-west-2.amazonaws.com') || src.includes('s3.us-west-2.amazonaws.com')) {
    console.log('Notion image detected, skipping server-side processing:', src);
    return {
      base64: '',
      img: { src, height: 0, width: 0 },
    };
  }

  let buffer;

  try {
    let imageUrl: string;

    if (src.startsWith('http')) {
      // 외부 URL 처리
      imageUrl = src;
    } else {
      // 로컬 파일 처리 - 배포 환경 호환성을 위해 절대 URL로 변환
      // 요청 헤더에서 호스트 정보 가져오기 (배포 환경에서 더 안정적)
      const host = requestHeaders?.host || requestHeaders?.['x-forwarded-host'];
      const protocol = requestHeaders?.['x-forwarded-proto'] || 'https';

      let baseUrl: string;
      if (process.env.NEXT_PUBLIC_BASE_URL) {
        baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      } else if (host) {
        baseUrl = `${protocol}://${host}`;
      } else if (process.env.VERCEL_URL) {
        baseUrl = `https://${process.env.VERCEL_URL}`;
      } else {
        baseUrl = LOCAL_BASE_URL;
      }

      imageUrl = src.startsWith('/') ? `${baseUrl}${src}` : `${baseUrl}/${src}`;
    }

    console.log('Fetching image from:', imageUrl);

    // 모든 이미지를 fetch로 가져오기 (배포 환경 호환성)
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText} from ${imageUrl}`);
    }
    buffer = await response.buffer();

    try {
      const {
        metadata: { height, width },
        ...plaiceholder
      } = await getPlaiceholder(buffer, { size: 10 });

      return {
        ...plaiceholder,
        img: { src, height, width },
      };
    } catch (plaiceholderError) {
      console.error('Plaiceholder error:', plaiceholderError);
      // plaiceholder 실패 시 기본 이미지 정보만 반환
      return {
        base64: '',
        img: { src, height: 0, width: 0 },
      };
    }
  } catch (error) {
    console.error('Error fetching or converting image:', error);
    console.error('Image URL attempted:', src);
    throw error;
  }
};

export default getBase64;
