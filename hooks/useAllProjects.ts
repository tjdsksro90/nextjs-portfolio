import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/lists';
import { ProjectResultType } from '@/types/projects';

export const useAllProjects = () => {
  const { data: projects = [], isLoading } = useQuery<ProjectResultType[]>({
    queryKey: ['projects', 'all'],
    queryFn: getAllProjects,
    staleTime: 1000 * 60 * 5, // 5분간 캐싱
  });

  return { projects, isLoading };
};
