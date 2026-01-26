'use client'; // 모달 기능을 위해 'use client'가 필요. 클릭 이벤트와 상태 관리를 위해 필수

import { useState, useEffect } from 'react';
import { PropertiesFilesType } from '@/types/projects';
import CommonImage from './image';

interface Props {
  files: PropertiesFilesType[] | [];
  size?: string; 
}

const CommonFilesSlide = ({ files, size }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // FilesSize 파싱
  const parseSize = (sizeStr?: string) => {
    if (!sizeStr) return { width: 'auto', height: 'auto' };
    
    const [width, height] = sizeStr.split(',').map(s => s.trim());
    return {
      width: width || 'auto',
      height: height || 'auto',
    };
  };

  const { width, height } = parseSize(size);
  const widthStyle = width === 'auto' ? 'auto' : `${width}px`;
  const heightStyle = height === 'auto' ? 'auto' : `${height}px`;

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedIndex !== null) {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  // 이전/다음 이미지
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
      <div className="mb-4 overflow-x-auto">
        <div className="flex gap-2" style={{ width: 'max-content' }}>
          {files.map((aFile, index) => (
            <div
              key={aFile.file?.url || `file-${index}`}
              className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ width: widthStyle, height: heightStyle }}
              onClick={() => setSelectedIndex(index)}
            >
              <CommonImage 
                src={aFile.file.url} 
                wrap="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 확대 모달 */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedIndex(null)}
        >
          {/* 닫기 버튼 */}
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {/* 이전 버튼 */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
              onClick={handlePrevious}
            >
              ‹
            </button>
          )}

          {/* 다음 버튼 */}
          {selectedIndex < files.length - 1 && (
            <button
              className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
              onClick={handleNext}
            >
              ›
            </button>
          )}

          {/* 확대된 이미지 */}
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

          {/* 이미지 인덱스 표시 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {files.length}
          </div>
        </div>
      )}
    </>
  );
};

export default CommonFilesSlide;

