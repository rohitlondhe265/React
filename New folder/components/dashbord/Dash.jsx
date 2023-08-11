import React from 'react';

export default function Dash () {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">My Dashboard</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Card 1 */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p>This is a sample card with some content.</p>
          </div>

          {/* Sample Card 2 */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p>This is another sample card with some content.</p>
          </div>

          {/* Sample Card 3 */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p>One more sample card with some content.</p>
          </div>

          {/* Sample Chart */}
          <div className="bg-white rounded shadow p-4 col-span-2">
            <h2 className="text-xl font-semibold mb-2">Chart</h2>
            <div className="bg-blue-200 h-40 rounded-lg"></div>
          </div>

          {/* Sample Table */}
          <div className="bg-white rounded shadow p-4 col-span-3">
            <h2 className="text-xl font-semibold mb-2">Table</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">1</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">Admin</td>
                </tr>
                <tr>
                  <td className="p-2">2</td>
                  <td className="p-2">Jane Smith</td>
                  <td className="p-2">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
