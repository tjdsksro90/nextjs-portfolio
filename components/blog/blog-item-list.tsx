import React from 'react';

const BlogItemList = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="min-h-screen body-font">
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-10">
            <a href={post.link}>{post.title}</a>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogItemList;
