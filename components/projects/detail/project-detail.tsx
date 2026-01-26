import { ProjectDetailProps } from '@/types/project-detail';
import PageRender from './pages/detail-page-render';
import BlockRender from './blocks/detail-block-render';
import FileRender from './files/detail-file-render';
import CommonText from '@/components/common/text';

const ProjectDetailComponent = ({ blocksData, pagesData }: ProjectDetailProps) => {
  if (!pagesData) {
    return <div>프로젝트 데이터를 불러올 수 없습니다.</div>;
  }

  console.log('blocksData', blocksData,'bbb');

  return (
    <ul>
      <PageRender key={`page-${pagesData.id}`} data={pagesData} />
      <div className="w-full h-px my-16 bg-slate-500 dark:bg-slate-50"></div>
      {pagesData.properties?.FilesFirst?.files?.length > 0 && (
        <div className="pb-10"></div>
      )}
      <FileRender key={`filesFirst-top-${pagesData.id}`} data={pagesData} fileType="FilesFirst" />
      {pagesData.properties?.FilesFirstText?.rich_text?.[0]?.plain_text && (
        <li key={`filesFirstText-${pagesData.id}`}>
          <CommonText 
            text={pagesData.properties.FilesFirstText.rich_text[0].plain_text}
            className="my-4 text-base"
          />
        </li>
      )}
      <FileRender key={`filesSlide-${pagesData.id}`} data={pagesData} fileType="FilesSlide" />
      {pagesData.properties?.FilesSlideText?.rich_text?.[0]?.plain_text && (
        <li key={`filesSlideText-${pagesData.id}`}>
          <CommonText 
            text={pagesData.properties.FilesSlideText.rich_text[0].plain_text}
            className="my-4 text-base"
          />
        </li>
      )}
      <FileRender key={`filesSlide2-${pagesData.id}`} data={pagesData} fileType="FilesSlide2" />
      {pagesData.properties?.FilesSlideText2?.rich_text?.[0]?.plain_text && (
        <li key={`filesSlide2Text-${pagesData.id}`}>
          <CommonText 
            text={pagesData.properties.FilesSlideText2.rich_text[0].plain_text}
            className="my-4 text-base"
          />
        </li>
      )}
      <FileRender key={`filesSlide3-${pagesData.id}`} data={pagesData} fileType="FilesSlide3" />
      {pagesData.properties?.FilesSlideText3?.rich_text?.[0]?.plain_text && (
        <li key={`filesSlide3Text-${pagesData.id}`}>
          <CommonText 
            text={pagesData.properties.FilesSlideText3.rich_text[0].plain_text}
            className="my-4 text-base"
          />
        </li>
      )}
      {blocksData && blocksData.map(block => (
        <BlockRender key={block.id} block={block} />
      ))}
      {pagesData.properties?.Files?.files?.length > 0 && (
        <div className="mt-10"></div>
      )}
      <FileRender key={`files-bottom-${pagesData.id}`} data={pagesData} />
      {pagesData.properties?.FilesText?.rich_text?.[0]?.plain_text && (
        <li key={`filesText-${pagesData.id}`}>
          <CommonText 
            text={pagesData.properties.FilesText.rich_text[0].plain_text}
            className="my-4 text-base"
          />
        </li>
      )}
    </ul>
  );
};

export default ProjectDetailComponent;
