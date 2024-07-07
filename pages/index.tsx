import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Post = {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
};

export default function Home() {
  /*const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<{ items: Post[] }>('/api/rss');
        setPosts(response.data.items);
        console.log(response);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);*/

  return (
    <div className="container px-5 mx-auto md:px-14">
      <Seo title="Home" />
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
      {/* <div>
        <h1>Tistory Blog Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.link}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
              <p>{post.contentSnippet}</p>
              <small>{new Date(post.isoDate).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
