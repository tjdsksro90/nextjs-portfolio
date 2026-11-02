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

// 라이트박스 버튼: 글자 기호(✕ ‹ ›) 대신 이름이 있는 버튼, 누르기 쉬운 44px 높이
const lightboxButton = (position: string) =>
  `absolute z-10 ${position} min-h-[44px] px-4 text-sm font-medium text-white rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`;

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
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게 보기"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95"
          onClick={() => setSelectedIndex(null)}
        >
          <button type="button" className={lightboxButton('top-4 right-4')} onClick={() => setSelectedIndex(null)}>
            닫기
          </button>

          {selectedIndex > 0 && (
            <button type="button" className={lightboxButton('left-4 top-1/2 -translate-y-1/2')} onClick={handlePrevious}>
              이전
            </button>
          )}

          {selectedIndex < files.length - 1 && (
            <button type="button" className={lightboxButton('right-4 top-1/2 -translate-y-1/2')} onClick={handleNext}>
              다음
            </button>
          )}

          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={files[selectedIndex].file.url}
              alt={`이미지 ${selectedIndex + 1} / ${files.length}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute text-sm -translate-x-1/2 bottom-4 left-1/2 text-zinc-300 tabular-nums">
            {selectedIndex + 1} / {files.length}
          </div>
        </div>
      )}
    </>
  );
};

export default CommonFilesSlide;
