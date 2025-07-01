import React from 'react';
import styles from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Main container */}
      <div className="p-4 min-h-screen bg-[#f2f2f2] dark:bg-[#383a3d]">
        <h1 className="text-3xl font-bold mb-3 text-[#5dab1a] dark:text-[#f7c454]">Welcome to AssessmentHub</h1>
        <p className="text-lg font-semibold mb-5 dark:text-white">Aptitude questions and answers for your placement interviews and competitive exams!</p>

        <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
          {/* First Div */}
          <div className=" relative w-full sm:max-w-[420px] lg:max-w-[500px] sm:h-[200px] lg:h-[250px] p-[20px] rounded-md transition-all duration-300 mx-auto
           bg-white dark:bg-[#383a3d] dark:text-gray-200 shadow-[6px_6px_15px_rgba(0,0,0,0.2)] dark:shadow-[6px_6px_10px_rgba(0,0,0,0.7)]">
            <h2 className="text-3xl font-semibold mb-7 text-[#5dab1a] dark:text-[#f7c454] ">General Aptitude</h2>
            <ol className=" text-lg font-medium ml-6 ">
            
              <li className='text-lg font-medium text-gray-800 dark:text-gray-200 transition-all ease-out hover:underline hover:cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-gray-800 dark:text-white " />
                <Link to="/aptitudetest">
                Aptitude Test
            </Link>
                </li>
              <li className='text-lg font-medium text-gray-800 dark:text-gray-200 transition-all ease-out hover:underline hover:cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-gray-800 dark:text-white " />
                <Link to="/verbalabilitytest">
                Verbal Ability Test
            </Link>
                </li>
              <li className=" text-lg font-medium text-gray-800 dark:text-gray-200 transition-all ease-out hover:underline hover:cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-gray-800 dark:text-white " />
                <Link to="/logicalreasoningtest">
                Logical Reasoning Test
            </Link>
                </li>
            </ol>
          </div>

          {/* Second Div */}
          <div className="w-full sm:max-w-[420px] lg:max-w-[500px] sm:h-[200px] lg:h-[250px] p-[20px] rounded-md transition-all duration-300 mx-auto
                          bg-white dark:bg-[#383a3d] dark:text-gray-200
                          shadow-[6px_6px_15px_rgba(0,0,0,0.2)] dark:shadow-[6px_6px_10px_rgba(0,0,0,0.7)]">
            <h2 className="text-3xl font-semibold mb-7 text-[#5dab1a] dark:text-[#f7c454] ">Interview</h2>
            <ol className=" text-lg font-medium ml-6 ">
              <li className='text-lg font-medium text-gray-800 dark:text-gray-200 transition-all ease-out hover:underline hover:cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-gray-800 dark:text-white " />
                <Link to="/Interview">
                HR Interview Questions
            </Link>
                </li>
            </ol>
          </div>

          {/* Third Div */}
          <div className="w-full sm:max-w-[420px] lg:max-w-[500px] sm:h-[200px] lg:h-[250px] p-[20px] rounded-md transition-all duration-300 mx-auto
                          bg-white dark:bg-[#383a3d] dark:text-gray-200
                          shadow-[6px_6px_15px_rgba(0,0,0,0.2)] dark:shadow-[6px_6px_10px_rgba(0,0,0,0.7)]">
            <h2 className="text-3xl font-semibold mb-7 text-[#5dab1a] dark:text-[#f7c454] ">Placement Updates</h2>
            <ol className=" text-lg font-medium ml-6 ">
              <li className='text-lg font-medium text-gray-800 dark:text-gray-200 transition-all ease-out hover:underline hover:cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-gray-800 dark:text-white " />
                <Link to="/PlacementUpdates">
                More Information
            </Link>
               </li>
            </ol>
          </div>

          {/* Fourth Div */}
          <div className="w-full sm:max-w-[420px] lg:max-w-[500px] sm:h-[200px] lg:h-[250px] p-[20px] rounded-md transition-all duration-300 mx-auto
                          bg-white dark:bg-[#383a3d] dark:text-gray-200
                          shadow-[6px_6px_15px_rgba(0,0,0,0.2)] dark:shadow-[6px_6px_10px_rgba(0,0,0,0.7)]">
            <h2 className="text-3xl font-semibold mb-7 text-[#5dab1a] dark:text-[#f7c454] ">Student Dashboard</h2>
            <ol className=" text-lg font-medium ml-6 ">
              <li className='text-lg font-medium text-gray-800 dark:text-gray-200 transition-all ease-out hover:underline hover:cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-gray-800 dark:text-white " />
                <Link to="/student-dashboard">
                More Information
            </Link>
                </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
