import { PropertiesFilesType } from '@/types/projects';
import CommonImage from './image';

interface Props {
  files: PropertiesFilesType[] | [];
  size?: string; 
}

const CommonFiles = ({ files, size }: Props) => {
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
  const hasCustomSize = size && (width !== 'auto' || height !== 'auto');
  const wrapStyle = hasCustomSize 
    ? `mb-2 ${width === 'auto' ? 'w-[710px] max-w-full' : ''}`
    : 'w-[710px] max-w-full mb-2';
  const containerStyle = hasCustomSize ? {
    width: width === 'auto' ? undefined : `${width}px`,
    height: height === 'auto' ? undefined : `${height}px`,
    maxWidth: '100%',
  } : undefined;

  return (
    <div className="">
      {files.map((aFile, index) => (
        <div
          key={aFile.file?.url || `file-${index}`}
          style={containerStyle}
        >
          <CommonImage 
            src={aFile.file.url} 
            wrap={wrapStyle}
          />
        </div>
      ))}
    </div>
  );
};

export default CommonFiles;
