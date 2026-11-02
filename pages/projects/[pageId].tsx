import Seo from '@/components/Seo';
import ProjectDetailComponent from '@/components/projects/detail/project-detail';
import { ProjectDetailProps } from '@/types/project-detail';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ArrowIcon from '/public/icons/arrow.svg';
import { fetchListItemData } from '../api/lists-item';
import { useRouter } from 'next/navigation';
import { MENU_ITEMS } from '@/config/site';

const ProjectDetail = ({ blocksData, pagesData }: ProjectDetailProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (document.referrer.includes(MENU_ITEMS.projects.path)) {
      router.back();
    } else {
      router.push(MENU_ITEMS.projects.path);
    }
  };

  return (
    <div className="max-w-6xl min-h-screen px-5 pb-24 mx-auto md:px-8">
      <Seo title={pagesData?.properties?.Name?.title[0]?.plain_text || 'Project Detail'} />
      <div className="pt-10 pb-8 md:pt-14">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors text-zinc-500 hover:text-zinc-900 group dark:text-zinc-400 dark:hover:text-zinc-50"
          onClick={handleBack}
        >
          <ArrowIcon
            className="w-4 h-4 transition-transform rotate-180 motion-safe:group-hover:-translate-x-1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            aria-hidden
          />
          <span>프로젝트 목록</span>
        </button>
      </div>
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
