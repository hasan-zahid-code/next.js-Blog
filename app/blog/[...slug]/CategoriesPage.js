import React from 'react';
import BlogCard from './BlogCard';

export default function CategoriesPage({ posts }) {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <BlogCard key={index} title={post.title} content={post.content} link={post.link}/>
      ))}
    </div>
  );
}
