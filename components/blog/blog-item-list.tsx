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
            className="blog-card"
            onClick={() => {
              window.open(post.link);
            }}
          >
            <div
              ref={el => (postRefs.current[index] = el)}
              className={`${
                expandedPosts[index]
                  ? ''
                  : "h-[30rem] overflow-hidden relative after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[10rem] after:bg-gradient-to-t after:from-white dark:after:from-black after:to-transparent"
              }`}
            >
              <h1 className="text-2xl font-bold text-main">{post.title}</h1>
              <p className="h-[1px] bg-primary-reverse my-10"></p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            <div className="text-center">
              <button
                className={`${expandedPosts[index] ? 'justify-center w-full btn-project mt-10' : 'btn-project'}`}
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
      <a
        className="flex justify-center mb-20 ml-3 text-4xl text-center cursor-pointer"
        href="https://gmrdlsrkswnl.tistory.com/"
        target="_blank"
      >
        .<br />.<br />
        <br />
        블로그에서 더 보기
      </a>
    </section>
  );
};

export default BlogItemList;
