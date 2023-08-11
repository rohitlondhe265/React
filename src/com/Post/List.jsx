import React from 'react';
import Card from './Card';

const List = () => {
  const blogPosts = [
    {
      title: 'Blog Post Title 1',
      date: 'August 10, 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Blog Post Title 2',
      date: 'August 9, 2023',
      excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // ... more blog posts
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Related Blog Posts</h2>
      <div className="flex flex-col gap-3">
        {blogPosts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default List;
