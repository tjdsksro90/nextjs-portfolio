import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useProjectsInfinite } from '@/hooks/useProjectsInfinite';
import { useAllProjects } from '@/hooks/useAllProjects';
import ProjectItem from './project-item';
import SkillFilter from './skill-filter';
import { Loading } from '../common/loading';
import { useDeferredLoading } from '@/hooks/useDeferredLoading';

const SKELETON_COUNT = 3;

// 열 개수는 CSS 그리드로 (JS로 창 너비를 재지 않아 첫 화면에서 배치가 다시 바뀌지 않는다)
const GRID_CLASS = 'grid items-stretch w-full gap-6 sm:grid-cols-2 lg:grid-cols-3';

const Skeleton = () => (
  <div className={GRID_CLASS} aria-busy="true" aria-label="프로젝트를 불러오는 중">
    {Array.from({ length: SKELETON_COUNT }, (_, index) => (
      <div key={index} className="rounded-2xl bg-zinc-100 dark:bg-zinc-900 aspect-[4/5] motion-safe:animate-pulse" />
    ))}
  </div>
);

const ProjectItemList = () => {
  const router = useRouter();
  const { projects, observerRef, hasNextPage, isFetchingNextPage, isLoading } = useProjectsInfinite();
  const { projects: allProjects } = useAllProjects();

  // 선택한 기술은 주소(?skill=)에 담아 공유·뒤로가기가 되게
  const selectedSkill = typeof router.query.skill === 'string' ? router.query.skill : null;

  // 전체 목록에서 기술별 사용 횟수를 모아 많이 쓴 순으로
  const skills = useMemo(() => {
    const counts = new Map<string, number>();
    allProjects.forEach(project => {
      (project.properties.Tags?.multi_select ?? []).forEach(tag => {
        counts.set(tag.name, (counts.get(tag.name) ?? 0) + 1);
      });
    });
    return Array.from(counts, ([name, count]) => ({ name, count })).sort(
      (a, b) => b.count - a.count || a.name.localeCompare(b.name),
    );
  }, [allProjects]);

  const filteredProjects = useMemo(
    () =>
      selectedSkill
        ? allProjects.filter(project =>
            (project.properties.Tags?.multi_select ?? []).some(tag => tag.name === selectedSkill),
          )
        : [],
    [allProjects, selectedSkill],
  );

  const handleSelect = (skill: string | null) => {
    const query = { ...router.query };
    if (skill) query.skill = skill;
    else delete query.skill;
    router.replace({ pathname: router.pathname, query }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  // 200ms 이상 지속될 때만 다음 페이지 로딩 표시 (깜빡임 방지)
  const showNextLoading = useDeferredLoading(isFetchingNextPage, 200);

  const filter = skills.length > 0 && (
    <SkillFilter skills={skills} selected={selectedSkill} totalCount={allProjects.length} onSelect={handleSelect} />
  );

  // 기술을 고르면 전체 목록에서 걸러 한 번에 보여준다 (무한 스크롤 없이)
  if (selectedSkill) {
    return (
      <div className="flex flex-col items-center w-full">
        {filter}
        {allProjects.length === 0 ? (
          <Skeleton />
        ) : filteredProjects.length === 0 ? (
          <p className="w-full py-16 text-center">
            <span className="font-semibold text-primary">{selectedSkill}</span>를 사용한 프로젝트가 없습니다.
          </p>
        ) : (
          <div className={GRID_CLASS} aria-live="polite">
            {filteredProjects.map(item => (
              <ProjectItem key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // 1. 초기 진입: 카드 자리를 미리 잡아 빈 화면이 보이지 않게
  if (isLoading && projects.length === 0) {
    return (
      <div className="flex flex-col items-center w-full">
        {filter}
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      {filter}
      <div className={GRID_CLASS}>
        {projects.map(item => (
          <ProjectItem key={item.id} data={item} />
        ))}
      </div>

      {/* 2. 무한 스크롤 감지용 div: null 처리 없이 항상 DOM에 유지 */}
      {hasNextPage && (
        <div ref={observerRef} className="flex justify-center py-10 w-full min-h-[50px]">
          {showNextLoading && <Loading size={32} className="text-zinc-500" />}
        </div>
      )}
    </div>
  );
};

export default ProjectItemList;
