import Seo from '@/components/Seo';
import BlogItemList from '@/components/blog/blog-item-list';
import CommonLink from '@/components/common/link';
import MainTitle from '@/components/common/main-title';
import { Loading } from '@/components/common/loading';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useDeferredLoading } from '@/hooks/useDeferredLoading';
import { SOCIAL_LINKS } from '@/config/site';

const Blog = () => {
  const { posts, isLoading, isError } = useBlogPosts();

  // 200ms 이상 지속될 때만 로딩 노출 (깜빡임 방지)
  const showLoading = useDeferredLoading(isLoading, 200);

  const renderContent = () => {
    if (isLoading) {
      return showLoading ? <Loading size={40} wrap="py-20 text-zinc-500" /> : null;
    }

    if (isError || posts.length === 0) {
      return (
        <p className="py-20 text-center">
          {isError ? '블로그 글을 불러오지 못했습니다.' : '등록된 글이 없습니다.'}
          <br />
          위의 블로그 링크에서 직접 확인해 주세요.
        </p>
      );
    }

    return <BlogItemList posts={posts} />;
  };

  return (
    <div className="max-w-6xl min-h-screen px-5 mx-auto md:px-8">
      <Seo title="Blog" />
      <MainTitle
        main="Blog"
        sub={
          <span className="flex flex-wrap items-center gap-3">
            <span>개발하며 배운 것을 티스토리에 기록합니다.</span>
            <CommonLink href={SOCIAL_LINKS.blog} text="블로그 바로가기" className="chip-link" showIcon />
          </span>
        }
      />
      {renderContent()}
    </div>
  );
};

export default Blog;
