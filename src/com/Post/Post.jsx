import React from 'react';
import List from './List';

const BlogPost = () => {
  return (
    <div className="flex justify-between gap-3 md:gap-9 flex-col md:flex-row">
      <div className="md:w-4/6 md:p-6 border border-gray-600">
        {/* Demon-themed banner image */}
        <img src="/demo.jpg" alt="Demon Banner" className="md:w-9/12 md:max-h-72 md:mb-4 mb-2 mx-auto" />

        {/* Blog post content */}
        <h1 className="text-3xl font-bold mb-2">Blog Post Title</h1>
        <main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cum aliquam, molestiae assumenda eos explicabo incidunt hic eveniet? Quia pariatur rem quis, earum aut dignissimos facere a eligendi magni fugit praesentium magnam distinctio repellendus. Libero illum, obcaecati sapiente cumque pariatur dolor voluptate voluptas? Architecto harum, doloribus, nostrum eos distinctio illo velit iusto laborum alias corrupti eveniet consequuntur, ipsum ut nesciunt temporibus ea vero totam numquam ratione saepe aliquid. Natus inventore assumenda mollitia quas aspernatur culpa asperiores eum magnam perspiciatis officiis nihil vel quisquam quis similique suscipit tenetur, nesciunt quo porro est voluptatibus. Unde expedita excepturi sunt nobis est commodi.</main>

      </div>

      {/* Sidebar */}
      <div className="flex-1 md:p-6 border border-gray-600">
        <List />

        <div className="mb-3">
          <h2 className="text-xl font-semibold mb-2">Categories</h2>
          <h3>Art</h3>
          <h3>Science</h3>
          <h3>Friction</h3>
          <h3>Thrills</h3>
        </div>
      </div>

    </div>
  );
};

export default BlogPost;
