import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Loading } from './loading';
import { API_ENDPOINTS } from '@/config/api';

interface Props {
  wrap?: string;
  src: string;
  className?: string;
  loadingSize?: number;
}

const CommonImage = ({ src, className, wrap, loadingSize = 50 }: Props) => {
  const [imageData, setImageData] = useState({
    src: '',
    blurDataURL: '',
    width: 0,
    height: 0,
    isLoaded: false,
    hasError: false,
  });

  // Notion S3 이미지인지 확인 (서명된 URL은 서버 사이드에서 fetch 불가)
  const isNotionImage =
    src.includes('prod-files-secure.s3.us-west-2.amazonaws.com') || src.includes('s3.us-west-2.amazonaws.com');

  useEffect(() => {
    const fetchImageData = async () => {
      // 이미지 빈값으로 넘어올 시 예외처리
      if (!src) {
        setImageData({
          src: '',
          blurDataURL: '',
          width: 0,
          height: 0,
          isLoaded: true,
          hasError: true,
        });
        return;
      }
      // Notion 이미지는 서버 사이드 처리를 건너뛰고 직접 사용
      if (isNotionImage) {
        // 클라이언트에서 이미지 크기만 가져오기
        const img = new window.Image();
        img.onload = () => {
          setImageData({
            src: src,
            blurDataURL: '',
            width: img.width,
            height: img.height,
            isLoaded: true,
            hasError: false,
          });
        };
        img.onerror = () => {
          console.error('Failed to load Notion image:', src);
          setImageData({
            src: src,
            blurDataURL: '',
            width: 0,
            height: 0,
            isLoaded: true, // 에러여도 표시는 시도
            hasError: true,
          });
        };
        img.src = src;
        return;
      }

      // 일반 이미지는 기존 방식대로 처리
      try {
        const response = await fetch(API_ENDPOINTS.IMAGES, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ src }),
        });
        const data = await response.json();
        if (data.error) {
          console.error('Image API error:', data.error, data.details);
          // API 에러 시에도 이미지는 표시 시도
          setImageData({
            src: src,
            blurDataURL: '',
            width: 0,
            height: 0,
            isLoaded: true,
            hasError: false,
          });
        } else if (data.img && data.base64) {
          setImageData({
            src: data.img.src,
            blurDataURL: data.base64,
            width: data.img.width,
            height: data.img.height,
            isLoaded: true,
            hasError: false,
          });
        } else {
          console.error('Invalid data structure:', data);
          setImageData({
            src: src,
            blurDataURL: '',
            width: 0,
            height: 0,
            isLoaded: true,
            hasError: true,
          });
        }
      } catch (error) {
        console.error('Failed to fetch image data:', error);
        // 에러 시에도 이미지는 표시 시도
        setImageData({
          src: src,
          blurDataURL: '',
          width: 0,
          height: 0,
          isLoaded: true,
          hasError: true,
        });
      }
    };

    fetchImageData();
  }, [src, isNotionImage]);

  if (!imageData.isLoaded) return <Loading size={loadingSize} wrap="my-5" />;

  if (!imageData.isLoaded || imageData.hasError) {
    return (
      <div className={wrap}>
        <div className="w-full h-52 flex justify-center items-center bg-indigo-500 text-white">이미지가 없습니다.</div>
      </div>
    );
  }

  return (
    <div className={wrap}>
      <Image
        className={className}
        src={imageData.src}
        alt="cover image1"
        width={imageData.width || 800}
        height={imageData.height || 600}
        layout="responsive"
        objectFit="cover"
        quality={100}
        placeholder={imageData.blurDataURL ? 'blur' : 'empty'}
        blurDataURL={imageData.blurDataURL || undefined}
        unoptimized={isNotionImage}
        onError={() => {
          setImageData(prev => ({
            ...prev,
            hasError: true,
          }));
        }}
      />
    </div>
  );
};

export default CommonImage;
