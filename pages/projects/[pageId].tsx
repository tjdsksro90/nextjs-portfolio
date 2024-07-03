import Seo from '@/components/Seo';
import MainTitle from '@/components/common/main-title';
import BlockRender from '@/components/projects/detail/blocks/detail-block-render';
import FileRender from '@/components/projects/detail/files/detail-file-render';
import PageRender from '@/components/projects/detail/pages/detail-page-render';
import { TOKEN } from '@/config';
import { ProjectDetailType } from '@/types/project-detail';
import { ProjectResultType } from '@/types/projects';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';

interface ProjectDetailProps {
  blocksData: ProjectDetailType[];
  pagesData: ProjectResultType;
}

const ProjectDetail = ({ blocksData, pagesData }: ProjectDetailProps) => {
  return (
    <div className="container min-h-screen mx-auto mb-10 px-5 md:px-14">
      <Seo title="Project Detail" />
      <MainTitle
        main="Project Detail"
        sub={
          <span>
            프로젝트 상세내용 화면입니다.
            <Link className="flex items-center gap-1 mt-1 font-semibold" href={`/projects`}>
              <span className="w-5 rotate-180">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
              <span>뒤로가기</span>
            </Link>
          </span>
        }
      />
      <ul>
        <PageRender key={pagesData.id} data={pagesData} />
        <div className="w-full h-px my-16 bg-slate-500 dark:bg-slate-50"></div>
        {blocksData.map(block => (
          <BlockRender key={block.id} block={block} />
        ))}
        <FileRender key={pagesData.id} data={pagesData} />
      </ul>
    </div>
  );
};

export default ProjectDetail;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id: pageId } = ctx.query;

  const resBlocks = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Notion-Version': '2022-06-28',
    },
  });

  const resPages = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Notion-Version': '2022-06-28',
    },
  });

  const blocksData = await resBlocks.json();
  const pagesData = await resPages.json();

  return {
    props: {
      blocksData: blocksData.results,
      pagesData,
    },
  };
};
