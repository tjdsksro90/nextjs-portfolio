import Seo from '@/components/Seo';
import ProjectItemList from '@/components/projects/project-item-list';
import MainTitle from '@/components/common/main-title';
import { useProjectTotalCount } from '@/hooks/useProjectsTotalCount';

const Projects = () => {
  const { totalCount, isLoading } = useProjectTotalCount();

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen mx-auto mb-10 px-5 md:px-14">
      <Seo title="Projects" />
      <MainTitle
        main="Projects"
        sub={
          <span>
            총 프로젝트 : <span className="text-blue-500 font-semibold">{isLoading ? '-' : totalCount}</span>
          </span>
        }
      />
      <div className="w-full mt-8">
        <ProjectItemList />
      </div>
    </div>
  );
};

export default Projects;
