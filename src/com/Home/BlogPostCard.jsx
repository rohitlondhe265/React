import React from 'react';

const BlogPostCard = ({ category, date, title }) => {
  return (
    <div className="max-w-sm mx-auto border border-gray-600 bg-white shadow-lg rounded-lg overflow-hidden h-fit">
      <img src="/demo.jpg" alt="Blog Post" className="w-full" />
      <div className="p-4">
        <span className="text-sm text-blue-500 font-semibold">{category}</span>
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <div className='flex justify-between items-center'>
        <p className="text-gray-600 mt-2">{date}</p>
        <button
          className='font-semibold py-1 px-3 rounded bg-blue-500 hover:bg-blue-600 text-white'>Read More
        </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
