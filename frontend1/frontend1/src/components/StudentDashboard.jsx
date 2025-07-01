import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('testResults')) || [];
    setTestResults(results);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Student Dashboard</h1>

        {testResults.length > 0 ? (
          <ul>
            {testResults.map((result, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Subject: {result.fieldname} - Paper: {result.papername}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Score: {result.score}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No tests taken yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
