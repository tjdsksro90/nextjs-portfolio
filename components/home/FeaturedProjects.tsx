import Link from 'next/link';
import { useAllProjects } from '@/hooks/useAllProjects';
import { MENU_ITEMS } from '@/config/site';
import ProjectItem from '../projects/project-item';

const FEATURED_COUNT = 3;

// 홈 히어로 아래: 가장 최근 프로젝트 3개 (방문하자마자 작업이 보이도록)
const FeaturedProjects = () => {
  const { projects, isLoading } = useAllProjects();

  return (
    <section aria-labelledby="featured-heading" className="max-w-6xl px-5 pb-24 mx-auto md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <h2 id="featured-heading" className="text-2xl font-bold md:text-3xl">
          최근 프로젝트
        </h2>
        <Link
          href={MENU_ITEMS.projects.path}
          className="inline-flex items-center min-h-[44px] text-sm font-semibold text-main hover:underline underline-offset-4"
        >
          전체 프로젝트 보기
        </Link>
      </div>
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? // 불러오는 동안 카드 자리를 미리 잡아 화면이 비어 보이지 않게
            Array.from({ length: FEATURED_COUNT }, (_, index) => (
              <div key={index} className="rounded-2xl bg-zinc-100 dark:bg-zinc-900 aspect-[4/5] motion-safe:animate-pulse" />
            ))
          : projects
              .slice(0, FEATURED_COUNT)
              .map(project => <ProjectItem key={project.id} data={project} headingLevel="h3" />)}
      </div>
    </section>
  );
};

export default FeaturedProjects;
