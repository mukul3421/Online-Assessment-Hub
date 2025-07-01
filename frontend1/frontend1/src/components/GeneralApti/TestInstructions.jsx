import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TestInstructions = () => {
  const { fieldname, papername } = useParams();
  const navigate = useNavigate();

  const startTest = () => {
    navigate(`/${fieldname}/${papername}/test`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#111826]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center dark:bg-[#1f2a38]">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Instructions for {papername.replace('-', ' ')}</h1>
        <p className="text-gray-600 mb-8 dark:text-white">
          Please read the instructions carefully. The test will last for 30 minutes and will be automatically submitted after the time is over. Make sure you answer all the questions.
        </p>
        <button
          onClick={startTest}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default TestInstructions;
