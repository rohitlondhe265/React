
import React, { useState } from 'react';
import BlogPostCard from './BlogPostCard';
import Pagination from './Pagination';

export default function page() {
  const blogPosts = [
    {
      category: 'Category 1',
      date: 'August 10, 2023',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex necessitatibus beatae.',
    },
    {
      category: 'Category 2',
      date: 'August 9, 2023',
      title: 'Blog Post Title 2',
    },
    {
      category: 'Category 1',
      date: 'August 10, 2023',
      title: 'Blog Post Title 1',
    },
    {
      category: 'Category 2',
      date: 'August 9, 2023',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex necessitatibus beatae.',
    },
    {
      category: 'Category 1',
      date: 'August 10, 2023',
      title: 'Blog Post Title 1',
    },
    {
      category: 'Category 2',
      date: 'August 9, 2023',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex necessitatibus beatae.',
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the actual total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Perform any data fetching or updating here based on the new page
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="relative gradient-outline p-8 mt-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex necessitatibus beatae.</p>
      </div>

    </div>
  )
}
