import { useState } from 'react';
import { QueryClient } from '@tanstack/react-query';

export const useReactQuery = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return queryClient;
};
