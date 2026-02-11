'use client'; // 모달 기능을 위해 'use client'가 필요. 클릭 이벤트와 상태 관리를 위해 필수

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PropertiesFilesType } from '@/types/projects';
import CommonImage from './image';

interface Props {
  files: PropertiesFilesType[] | [];
  size?: string;
}

const CommonFilesSlide = ({ files, size }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const parseSize = (sizeStr?: string) => {
    if (!sizeStr) return { width: '80%', height: 'auto', maxWidth: 320 };
    const [width, height] = sizeStr.split(',').map(s => s.trim());
    return {
      width: width ? `${width}px` : '80%',
      height: height ? `${height}px` : 'auto',
      maxWidth: width ? parseInt(width, 10) : 320,
    };
  };

  const { width, height, maxWidth } = parseSize(size);
  const slideStyle = {
    width: width,
    maxWidth: `${maxWidth}px`,
    height: height,
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedIndex !== null) {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < files.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  if (files.length === 0) {
    return null;
  }

  return (
    <>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={30}
        mousewheel={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="files-slide-swiper mySwiper mb-8"
      >
        {files.map((aFile, index) => (
          <SwiperSlide
            key={aFile.file?.url || `file-${index}`}
            style={slideStyle}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <CommonImage src={aFile.file.url} wrap="w-full h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
              onClick={handlePrevious}
            >
              ‹
            </button>
          )}

          {selectedIndex < files.length - 1 && (
            <button
              className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
              onClick={handleNext}
            >
              ›
            </button>
          )}

          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={files[selectedIndex].file.url}
              alt={`Image ${selectedIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {files.length}
          </div>
        </div>
      )}
    </>
  );
};

export default CommonFilesSlide;
