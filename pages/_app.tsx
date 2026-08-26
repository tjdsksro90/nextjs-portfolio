import { QueryClientProvider } from '@tanstack/react-query';
import { useReactQuery } from '@/hooks/useReactQuery';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/files-slide-swiper.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = useReactQuery();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
