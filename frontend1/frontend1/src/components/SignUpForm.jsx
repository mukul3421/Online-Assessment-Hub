import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const navigate = useNavigate();

  const closeForm = () => navigate('/');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/signup', { username, password });
      setAlertMessage('Signup Successfully! Please Login');
      setAlertType('success');
      setTimeout(() => navigate('/login'), 2000); // Wait for alert before navigating
    } catch (error) {
      setAlertMessage('Signup Failed. Please retry.');
      setAlertType('error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 bg-opacity-75">
      <div className="relative bg-white rounded-lg p-8 shadow-lg max-w-md w-full space-y-6 mx-4">
        {/* Close Icon */}
        <button onClick={closeForm} className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-red-500">
          <FiX />
        </button>

        <h2 className="text-3xl font-semibold text-center text-gray-800">Create Your Account</h2>

        {/* Attractive Alert */}
        {alertMessage && (
          <div
            className={`${
              alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white text-center py-3 px-4 rounded-lg shadow-md transition-opacity duration-500 mb-4`}
            role="alert"
          >
            <span>{alertMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="px-4 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;