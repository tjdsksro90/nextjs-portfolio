import Seo from '@/components/Seo';
import ProjectItemList from '@/components/projects/project-item-list';
import MainTitle from '@/components/common/main-title';
import { useProjectTotalCount } from '@/hooks/useProjectsTotalCount';

const Projects = () => {
  const { totalCount, isLoading } = useProjectTotalCount();

  return (
    <div className="flex flex-col max-w-6xl min-h-screen px-5 pb-24 mx-auto md:px-8">
      <Seo title="Projects" />
      <MainTitle
        main="Projects"
        sub={
          <span aria-live="polite">
            직접 기획하고 개발한 프로젝트
            {!isLoading && totalCount > 0 && (
              <>
                {' '}
                <span className="font-semibold text-main tabular-nums">{totalCount}</span>개
              </>
            )}
          </span>
        }
      />
      <ProjectItemList />
    </div>
  );
};

export default Projects;
