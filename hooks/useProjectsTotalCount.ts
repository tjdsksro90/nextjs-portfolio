import { getTotalCount } from '@/api/lists';
import { useQuery } from '@tanstack/react-query';

export const useProjectTotalCount = () => {
  const { data: totalCount = 0, isLoading } = useQuery({
    queryKey: ['projects', 'totalCount'],
    queryFn: getTotalCount,
    staleTime: 1000 * 60 * 5, // 5분간 캐싱
  });

  return { totalCount, isLoading };
};
