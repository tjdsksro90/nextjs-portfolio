import Seo from '@/components/Seo';
import BlogItemList from '@/components/blog/blog-item-list';
import CommonLink from '@/components/common/link';
import MainTitle from '@/components/common/main-title';
import { BLOG_RSS_URL } from '@/config';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Parser from 'rss-parser';

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <div className="max-w-4xl px-5 mx-auto md:px-8">
      <Seo title="Blog" />
      <MainTitle
        eyebrow="Writing"
        main="Blog"
        sub={
          <span className="flex flex-wrap items-center gap-3">
            <CommonLink href={'https://gmrdlsrkswnl.tistory.com'} text="블로그 바로가기 ↗" className="chip-link" />
          </span>
        }
      />
      <BlogItemList posts={posts} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  const parser = new Parser();

  try {
    const response = await axios.get(BLOG_RSS_URL as string);
    const feed = await parser.parseString(response.data);
    const posts: Post[] = feed.items.map((item: { [key: string]: string }) => ({
      title: item.title,
      link: item.link,
      content: item.content || item['content:encodedSnippet'],
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
