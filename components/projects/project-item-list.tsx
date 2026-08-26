import { useEffect, useState } from 'react';
import { useProjectsInfinite } from '@/hooks/useProjectsInfinite';
import ProjectItem from './project-item';
import { Loading } from '../common/loading';
import { useDeferredLoading } from '@/hooks/useDeferredLoading';

const ProjectItemList = () => {
  const [columnCount, setColumnCount] = useState(1);
  const { projects, observerRef, hasNextPage, isFetchingNextPage, isLoading } = useProjectsInfinite();

  // 200ms 이상 지속될 때만 showSpinner가 true가 됨
  const showInitialLoading = useDeferredLoading(isLoading, 200);
  const showNextLoading = useDeferredLoading(isFetchingNextPage, 200);

  useEffect(() => {
    const updateColumnLayout = () => {
      const width = window.innerWidth;
      if (width < 640) setColumnCount(1);
      else if (width < 1024) setColumnCount(2);
      else setColumnCount(3);
    };

    updateColumnLayout();
    window.addEventListener('resize', updateColumnLayout);
    return () => window.removeEventListener('resize', updateColumnLayout);
  }, []);

  const renderContent = () => {
    if (columnCount === 1) {
      return (
        <div className="flex flex-col gap-8 w-full">
          {projects.map(item => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      );
    }

    // 2열, 3열 레이아웃 (Tailwind 클래스 분기 안전하게 처리)
    const gridClass = columnCount === 2 ? 'grid-cols-2' : 'grid-cols-3';
    const columns = Array.from({ length: columnCount }, (_, colIndex) =>
      projects.filter((_, index) => index % columnCount === colIndex),
    );

    return (
      <div className={`grid ${gridClass} gap-8 w-full`}>
        {columns.map((columnItems, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-8">
            {columnItems.map(item => (
              <ProjectItem key={item.id} data={item} />
            ))}
          </div>
        ))}
      </div>
    );
  };

  // 1. 초기 진입 시 로딩 (200ms 이상 걸릴 때만 노출)
  if (showInitialLoading && projects.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 w-full">
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Loading size={100} wrap="my-5" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      {renderContent()}

      {/* 2. 무한 스크롤 감지용 div: null 처리 없이 항상 DOM에 유지 */}
      {hasNextPage && (
        <div ref={observerRef} className="flex justify-center py-10 w-full min-h-[50px]">
          {showNextLoading && (
            <div className="w-32 h-32">
              <Loading size={100} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectItemList;
