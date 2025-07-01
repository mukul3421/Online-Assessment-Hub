import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, alert } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div>
      {/* Show alert message inside the navbar */}
      {alert && (
        <div 
          className={`w-full p-3 text-center rounded-lg shadow-lg transition-opacity duration-500 z-50
            ${alert.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
        >
          <span>{alert.message}</span>
        </div>
      )}

      <div className="sticky top-0 z-50 bg-gray-300 dark:bg-[#212226]">
        <nav className="flex justify-between items-center p-4 bg-gray-300 dark:bg-[#212226]">
          <div className="flex items-center">
            <button onClick={handleMenuToggle} className="p-2 text-gray-600 dark:text-white">
              <FiMenu size={24} />
            </button>
            <div className="ml-4 text-xl font-bold text-gray-800 dark:text-white">
              <Link to="/">
                <img src={darkMode ? logo2 : logo1} alt="Logo" className="w-40 h-14" />
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Login
                  </button>
                </Link>
              )}
            </div>

            <button onClick={handleThemeToggle} className="p-2 text-gray-600 dark:text-white">
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-16 left-0 bg-gray-300 dark:bg-neutral-800 w-48 h-screen shadow-md z-50">
              <ul className="flex flex-col p-4 space-y-6 text-2xl font-semibold text-gray-800 dark:text-white">
                <li className="hover:text-green-700 dark:hover:text-[#f7c454]" onClick={() => setIsOpen(false)}>
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-green-700 dark:hover:text-[#f7c454]" onClick={() => setIsOpen(false)}>
                  <Link to="/GeneralAptitude">General Aptitude</Link>
                </li>
                <li className="hover:text-green-700 dark:hover:text-[#f7c454]" onClick={() => setIsOpen(false)}>
                  <Link to="/PlacementUpdates">Placement Updates</Link>
                </li>
                <li className="hover:text-green-700 dark:hover:text-[#f7c454]" onClick={() => setIsOpen(false)}>
                  <Link to="/Interview">Interview</Link>
                </li>
                <li className="hover:text-green-700 dark:hover:text-[#f7c454]" onClick={() => setIsOpen(false)}>
                  <Link to="/student-dashboard">Student Dashboard</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;