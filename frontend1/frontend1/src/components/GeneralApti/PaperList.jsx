import React from 'react';
import { useParams, Link } from 'react-router-dom';


const papersData = {
    aptitudetest: [
      "Aptitude-Test-1",
      "Aptitude-Test-2",
      "Aptitude-Test-3",
      "Aptitude-Test-4",
      "Aptitude-Test-5",
      "Aptitude-Test-6",
      "Aptitude-Test-7",
      "Aptitude-Test-8",
      "Aptitude-Test-9",
      "Aptitude-Test-10",
      // Add more paper names...
    ],
    verbalabilitytest: [
      "VerbalAbility-Test-1",
      "VerbalAbility-Test-2",
      "VerbalAbility-Test-3",
      "VerbalAbility-Test-4",
      "VerbalAbility-Test-5",
      "VerbalAbility-Test-6",
      "VerbalAbility-Test-7",
      "VerbalAbility-Test-8",
      "VerbalAbility-Test-9",
      "VerbalAbility-Test-10",
      // Add more paper names...
    ],
    logicalreasoningtest: [
      "LogicalReasoning-Test-1",
      "LogicalReasoning-Test-2",
      "LogicalReasoning-Test-3",
      "LogicalReasoning-Test-4",
      "LogicalReasoning-Test-5",
      "LogicalReasoning-Test-6",
      "LogicalReasoning-Test-7",
      "LogicalReasoning-Test-8",
      "LogicalReasoning-Test-9",
      "LogicalReasoning-Test-10",
      // Add more paper names...
    ]
  };
const PaperList = () => {
  const { fieldname } = useParams();
  const papers = papersData[fieldname] || [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white capitalize">Papers for {fieldname}</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <Link
              key={index}
              to={`/${fieldname}/${paper}/instructions`}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{paper.replace('-', ' ')}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperList;