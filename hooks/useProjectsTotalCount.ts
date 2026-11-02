import { useAllProjects } from './useAllProjects';

export const useProjectTotalCount = () => {
  // 전체 목록 쿼리를 공유하므로 추가 요청이 생기지 않는다
  const { projects, isLoading } = useAllProjects();

  return { totalCount: projects.length, isLoading };
};
