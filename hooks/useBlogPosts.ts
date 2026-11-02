import { getBlogPosts } from '@/services/blog';
import { useQuery } from '@tanstack/react-query';

export const useBlogPosts = () => {
  const { data: posts = [], isLoading, isError } = useQuery({
    queryKey: ['blog', 'posts'],
    queryFn: getBlogPosts,
    staleTime: 1000 * 60 * 5, // 5분간 캐싱
  });

  return { posts, isLoading, isError };
};
