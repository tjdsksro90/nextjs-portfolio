import Seo from '@/components/Seo';
import CommonLink from '@/components/common/link';
import MainTitle from '@/components/common/main-title';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Parser from 'rss-parser';

type Post = {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
};

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <div className="container px-5 mx-auto md:px-14">
      <Seo title="Blog" />
      <MainTitle
        main="Blog"
        sub={<CommonLink href={'https://gmrdlsrkswnl.tistory.com/rss'} text="블로그 링크 링크 바로가기" />}
      />
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <a href={post.link}>{post.title}</a>
              <p>{post.contentSnippet}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  const BLOG_RSS_URL = 'https://gmrdlsrkswnl.tistory.com/rss'; // Replace with your Tistory blog RSS URL
  const parser = new Parser();

  try {
    const response = await axios.get(BLOG_RSS_URL);

    const feed = await parser.parseString(response.data);
    const posts: Post[] = feed.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      contentSnippet: item.contentSnippet || item['content:encodedSnippet'],
      isoDate: item.isoDate,
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Blog;
