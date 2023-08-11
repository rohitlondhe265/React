import React from 'react';

const TestResultsTable = ({ results }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Test Name</th>
            <th className="border p-2">Score</th>
            <th className="border p-2">Status</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border p-2">{result.testName}</td>
              <td className="border p-2">{result.score}</td>
              <td className={`border p-2 ${result.status === 'Passed' ? 'text-green-600' : 'text-red-600'}`}>
                {result.status}
              </td>
              {/* Add more table data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestResultsTable;
