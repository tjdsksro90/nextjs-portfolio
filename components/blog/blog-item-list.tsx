import { useRef, useState } from 'react';

const BlogItemList = ({ posts }: { posts: Post[] }) => {
  const [expandedPosts, setExpandedPosts] = useState<{ [key: number]: boolean }>({});
  const postRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index],
    }));

    // 스크롤 이동
    if (postRefs.current[index]) {
      postRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="min-h-screen body-font">
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className="blog-card group"
            onClick={() => {
              window.open(post.link);
            }}
          >
            <div
              ref={el => (postRefs.current[index] = el)}
              className={`${
                expandedPosts[index]
                  ? ''
                  : "h-[26rem] overflow-hidden relative after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[10rem] after:bg-gradient-to-t after:from-white dark:after:from-zinc-950 after:to-transparent"
              }`}
            >
              {post.isoDate && (
                <time className="block mb-3 font-mono text-xs text-zinc-400" dateTime={post.isoDate}>
                  {post.isoDate.slice(0, 10)}
                </time>
              )}
              <h1 className="text-2xl font-bold leading-snug transition-colors md:text-3xl group-hover:text-main">
                {post.title}
              </h1>
              <div className="h-px my-8 bg-zinc-200 dark:bg-zinc-800" />
              <div className="overflow-hidden" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            <div className="mt-6 text-center">
              <button
                className={`${expandedPosts[index] ? 'justify-center w-full btn-ghost mt-4' : 'btn-ghost'}`}
                type="button"
                onClick={e => {
                  e.stopPropagation(); // Prevent the li onClick from triggering
                  toggleExpand(index);
                }}
              >
                {expandedPosts[index] ? '접기' : '펼쳐보기'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center pt-4 pb-24">
        <a className="btn-project" href="https://gmrdlsrkswnl.tistory.com/" target="_blank" rel="noopener noreferrer">
          블로그에서 더 보기 ↗
        </a>
      </div>
    </section>
  );
};

export default BlogItemList;
