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
        eyebrow="Work"
        main="Projects"
        sub={
          <span className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 font-mono text-xs border rounded-full border-zinc-200 dark:border-zinc-800">
              TOTAL
              <span className="font-semibold text-main">{isLoading ? '-' : totalCount}</span>
            </span>
          </span>
        }
      />
      <ProjectItemList />
    </div>
  );
};

export default Projects;
