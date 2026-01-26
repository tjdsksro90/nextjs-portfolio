import CommonFiles from "@/components/common/files";
import CommonFilesSlide from "@/components/common/files-slide";
import { ProjectResultType } from "@/types/projects";

interface Props {
  data: ProjectResultType | null;
  fileType?: 'Files' | 'FilesFirst' | 'FilesSlide' | 'FilesSlide2' | 'FilesSlide3';
}

const FileRender = ({ data, fileType = 'Files' }: Props) => {
  if (!data || !data.properties) {
    return null;
  }

  let files: any[] = [];
  let size: string | undefined;

  switch (fileType) {
    case 'FilesFirst':
      files = data.properties.FilesFirst?.files || [];
      size = data.properties.FilesFirstSize?.rich_text?.[0]?.plain_text;
      break;
    case 'FilesSlide':
      files = data.properties.FilesSlide?.files || [];
      size = data.properties.FilesSlideSize?.rich_text?.[0]?.plain_text;
      break;
    case 'FilesSlide2':
      files = data.properties.FilesSlide2?.files || [];
      size = data.properties.FilesSlideSize2?.rich_text?.[0]?.plain_text;
      break;
    case 'FilesSlide3':
      files = data.properties.FilesSlide3?.files || [];
      size = data.properties.FilesSlideSize3?.rich_text?.[0]?.plain_text;
      break;
    default:
      files = data.properties.Files?.files || [];
      size = data.properties.FilesSize?.rich_text?.[0]?.plain_text;
  }

  if (files.length === 0) {
    return null;
  }

  // Slide 타입인 경우 (가로 스크롤)
  if (fileType === 'FilesSlide' || fileType === 'FilesSlide2' || fileType === 'FilesSlide3') {
    return <CommonFilesSlide files={files} size={size} />;
  }

  // 일반 파일 타입
  return <CommonFiles files={files} size={size} />;
};

export default FileRender;
