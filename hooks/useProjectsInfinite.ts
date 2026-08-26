import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getLists } from '@/api/lists';

export const useProjectsInfinite = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: ({ pageParam }) => getLists(pageParam),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: lastPage => (lastPage?.has_more ? lastPage.next_cursor : undefined),
  });

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const projects = data?.pages.flatMap(page => page.results) || [];

  return {
    projects,
    observerRef,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  };
};
