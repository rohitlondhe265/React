import React from 'react';
import TestResultsTable from './TestResultsTable';

const Table = () => {
  const testResults = [
    { testName: 'Test 1', score: 85, status: 'Passed' },
    { testName: 'Test 2', score: 92, status: 'Passed' },
    { testName: 'Test 3', score: 78, status: 'Failed' },
    // Add more test results as needed
  ];

  return (
    <div className="mx-auto max-w-screen-md p-4">
      <h1 className="text-2xl font-bold mb-4">Test Results</h1>
      <TestResultsTable results={testResults} />
    </div>
  );
};

export default Table;
