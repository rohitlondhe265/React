import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        className={`px-4 py-2 ${
          isFirstPage ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 hover:text-blue-700'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <span className="mx-4 text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`px-4 py-2 ${
          isLastPage ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 hover:text-blue-700'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
