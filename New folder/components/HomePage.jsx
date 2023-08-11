import React from 'react';

const HomePage = () => {
  return (
    <div className="dark:bg-dark-background dark:text-dark-text">
      <header className="bg-primary text-text p-4">
        <h1 className="text-4xl font-bold">My Website</h1>
      </header>

      <main className="container mx-auto py-8">
        <h2 className="text-xl font-bold mb-4">Welcome to my website!</h2>
        <p className="mb-4">
          This is a simple homepage using React and Tailwind CSS. You can toggle
          between dark and light mode using the toggle button below:
        </p>
        <button
          className="px-4 py-2 text-white bg-accent rounded"
          onClick={() =>
            document.documentElement.classList.toggle('dark')
          }
        >
          Toggle Dark Mode
        </button>
      </main>
    </div>
  );
};

export default HomePage;
