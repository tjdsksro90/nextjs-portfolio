import getBase64 from '@/utils/getBase64';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { Loading } from './loading';

interface Props {
  wrap?: string;
  src: string;
  className?: string;
  width: number;
  height: number;
  loadingSize?: number;
}

const CommonImage = ({ src, className, wrap, width, height, loadingSize = 50 }: Props) => {
  const [imageData, setImageData] = useState({
    src: '',
    blurDataURL: '',
    width: 0,
    height: 0,
    isLoaded: false,
  });

  useEffect(() => {
    async function fetchImageData() {
      try {
        const response = await fetch('/api/image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ src }),
        });
        const data = await response.json();
        if (data.img && data.base64) {
          setImageData({
            src: data.img.src,
            blurDataURL: data.base64,
            width: data.img.width,
            height: data.img.height,
            isLoaded: true,
          });
        } else {
          console.error('Invalid data structure:', data);
          // Handle the error appropriately
        }
      } catch (error) {
        console.error('Failed to fetch image data:', error);
        // Handle the error appropriately
      }
    }

    fetchImageData();
  }, [src]);

  // if (!imageData.isLoaded) return <p>Loading...</p>;
  if (!imageData.isLoaded) return <Loading size={loadingSize} wrap="my-5" />;

  return (
    <div className={wrap}>
      <Image
        className={className}
        src={imageData.src}
        alt="cover image"
        width={imageData.width}
        height={imageData.height}
        layout="responsive"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        blurDataURL={imageData.blurDataURL}
      />
    </div>
  );
};

export default CommonImage;
