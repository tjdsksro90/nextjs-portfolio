import { ProjectDetailProps } from '@/types/project-detail';
import PageRender from './pages/detail-page-render';
import BlockRender from './blocks/detail-block-render';
import FileRender from './files/detail-file-render';

const ProjectDetailComponent = ({ blocksData, pagesData }: ProjectDetailProps) => {
  return (
    <ul>
      <PageRender key={pagesData.id} data={pagesData} />
      <div className="w-full h-px my-16 bg-slate-500 dark:bg-slate-50"></div>
      {blocksData.map(block => (
        <BlockRender key={block.id} block={block} />
      ))}
      <FileRender key={pagesData.id} data={pagesData} />
    </ul>
  );
};

export default ProjectDetailComponent;
