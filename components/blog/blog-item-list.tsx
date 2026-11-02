import { useRef, useState } from 'react';
import { SOCIAL_LINKS } from '@/config/site';
import ExternalIcon from '../common/external-icon';

// RSS 본문 HTML에서 앞부분 글자만 뽑아 두 줄 요약으로 쓴다
const toExcerpt = (html: string, length = 160) => {
  const text = (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > length ? `${text.slice(0, length)}…` : text;
};

/**
 * 블로그 글 목록: 날짜 · 제목(티스토리 링크) · 두 줄 요약.
 * 본문은 '펼쳐보기'로 같은 자리에서 읽는다. 카드 전체 클릭으로 새 탭이 열리던 동작은 없앴다.
 */
const BlogItemList = ({ posts }: { posts: Post[] }) => {
  const [expandedPosts, setExpandedPosts] = useState<{ [key: number]: boolean }>({});
  const postRefs = useRef<(HTMLLIElement | null)[]>([]);

  const toggleExpand = (index: number) => {
    const willCollapse = expandedPosts[index];
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index],
    }));

    // 접을 때는 글 시작 위치로 스크롤 이동
    if (willCollapse) {
      postRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section aria-label="블로그 글 목록" className="pb-24">
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {posts.map((post, index) => (
          <li key={post.link} ref={el => (postRefs.current[index] = el)} className="py-8 scroll-mt-24 first:pt-0">
            {post.isoDate && (
              <time className="block mb-2 font-mono text-xs text-zinc-500 dark:text-zinc-400" dateTime={post.isoDate}>
                {post.isoDate.slice(0, 10)}
              </time>
            )}
            <h2 className="text-xl font-bold leading-snug md:text-2xl">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-main hover:underline underline-offset-4"
              >
                {post.title}
              </a>
            </h2>

            {expandedPosts[index] ? (
              <div className="mt-6 max-w-[68ch] post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p className="mt-3 max-w-[68ch] line-clamp-2 text-zinc-600 dark:text-zinc-400">{toExcerpt(post.content)}</p>
            )}

            <button
              type="button"
              className="inline-flex items-center min-h-[44px] mt-2 text-sm font-semibold text-main hover:underline underline-offset-4"
              aria-expanded={!!expandedPosts[index]}
              onClick={() => toggleExpand(index)}
            >
              {expandedPosts[index] ? '접기' : '펼쳐보기'}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-center pt-8">
        <a className="btn-project" href={SOCIAL_LINKS.blog} target="_blank" rel="noopener noreferrer">
          블로그에서 더 보기
          <ExternalIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default BlogItemList;
