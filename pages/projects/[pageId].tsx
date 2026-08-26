import Seo from '@/components/Seo';
import MainTitle from '@/components/common/main-title';
import ProjectDetailComponent from '@/components/projects/detail/project-detail';
import { ProjectDetailProps } from '@/types/project-detail';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import ArrowIcon from '/public/icons/arrow.svg';
import { fetchListItemData } from '../api/lists-item';

const ProjectDetail = ({ blocksData, pagesData }: ProjectDetailProps) => {
  return (
    <div className="container min-h-screen px-5 mx-auto mb-10 md:px-14">
      <Seo title="Project Detail" />
      <MainTitle
        main="Project Detail"
        sub={
          <span>
            프로젝트 상세내용 화면입니다.
            <Link className="flex items-center gap-1 mt-1 font-semibold" href={`/projects`}>
              <span className="w-5 rotate-180">
                <ArrowIcon
                  width="auto"
                  height="auto"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </span>
              <span>뒤로가기</span>
            </Link>
          </span>
        }
      />
      <ProjectDetailComponent blocksData={blocksData} pagesData={pagesData} />
    </div>
  );
};

export default ProjectDetail;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const pageId = ctx.query.pageId;
  const rawTitle = Array.isArray(pageId) ? pageId[0] : (pageId as string);
  const title = rawTitle ? decodeURIComponent(rawTitle) : '';

  if (!title) {
    return { props: { blocksData: [], pagesData: null } };
  }

  try {
    // HTTP 통신 없이 직접 호출하여 데이터 취득
    const { blocksData, pagesData } = await fetchListItemData(title);

    return {
      props: {
        blocksData,
        pagesData,
      },
    };
  } catch (error) {
    console.error('Error fetching project data:', error);
    return {
      props: {
        blocksData: [],
        pagesData: null,
      },
    };
  }
};
