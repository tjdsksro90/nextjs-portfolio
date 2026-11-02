import { useProjectsInfinite } from '@/hooks/useProjectsInfinite';
import ProjectItem from './project-item';
import { Loading } from '../common/loading';
import { useDeferredLoading } from '@/hooks/useDeferredLoading';

const SKELETON_COUNT = 3;

// 열 개수는 CSS 그리드로 (JS로 창 너비를 재지 않아 첫 화면에서 배치가 다시 바뀌지 않는다)
const GRID_CLASS = 'grid items-stretch w-full gap-6 sm:grid-cols-2 lg:grid-cols-3';

const ProjectItemList = () => {
  const { projects, observerRef, hasNextPage, isFetchingNextPage, isLoading } = useProjectsInfinite();

  // 200ms 이상 지속될 때만 다음 페이지 로딩 표시 (깜빡임 방지)
  const showNextLoading = useDeferredLoading(isFetchingNextPage, 200);

  // 1. 초기 진입: 카드 자리를 미리 잡아 빈 화면이 보이지 않게
  if (isLoading && projects.length === 0) {
    return (
      <div className={GRID_CLASS} aria-busy="true" aria-label="프로젝트를 불러오는 중">
        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <div key={index} className="rounded-2xl bg-zinc-100 dark:bg-zinc-900 aspect-[4/5] motion-safe:animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
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
