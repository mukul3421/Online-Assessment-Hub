import React from 'react';
import { Link } from 'react-router-dom';

const fields = ['AptitudeTest', 'VerbalAbilityTest', 'LogicalReasoningTest'];

const FieldList = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#111826]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Choose a Category</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
          {fields.map((field, index) => (
            <Link
              key={index}
              to={`/${field.toLowerCase()}`}
              className=" dark:bg-[#1f2a38] block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
            >
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">{field}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldList;
