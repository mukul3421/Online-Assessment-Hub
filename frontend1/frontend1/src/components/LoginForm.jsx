import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' }); // Alert state
  const navigate = useNavigate();

  const closeForm = () => navigate('/');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    
    try {
      // Send the data to the backend with the role
      const response = await axios.post('/api/login', {
        username,
        password,
        role, // Include the role in the request
      });
  
      const token = response.data.token; // Assumes backend returns { token: <JWT token> }
      localStorage.setItem('token', token); // Save token to local storage
  
      if (typeof login === 'function') {
        login(); // Update authentication context if login function is available
      }
  
      // Show success alert first
      setAlert({
        message: 'Login Successful!',
        type: 'success',
      });
  
      // Delay the navigation to ensure the alert message is visible
      setTimeout(() => {
        navigate('/'); // Redirect to the desired page after login
      }, 2000); // Delay for 2 seconds (adjust if needed)
  
    } catch (error) {
      // Handle errors based on the error response
      const errorMessage = error.response ? error.response.data.error : error.message;
  
      let alertMessage = '';
      let alertType = 'error';
  
      // Check for specific error messages from the API response
      if (errorMessage === "Faculty user not found.") {
        alertMessage = "Faculty login failed: User not found. Please check your username.";
      } else if (errorMessage === "Invalid password.") {
        alertMessage = "Login failed: Invalid password. Please try again.";
      } else if (errorMessage === "User not found.") {
        alertMessage = "Login failed: Username not found. Please check your username.";
      } else if (errorMessage === "Invalid role specified.") {
        alertMessage = "Login failed: Invalid role. Please select the correct role.";
      } else {
        alertMessage = "Login failed. Please retry.";
      }
  
      setAlert({
        message: alertMessage,
        type: alertType,
      });
  
      setUsername(''); // Clear the form fields
      setPassword('');
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 bg-opacity-75">
      <div className="relative bg-white rounded-lg p-8 shadow-lg max-w-md w-full space-y-6 mx-4">
        <button onClick={closeForm} className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-red-500">
          <FiX />
        </button>

        <h2 className="text-3xl font-semibold text-center text-gray-800">Login to Your Account</h2>
        
        {/* Alert Box */}
        {alert.message && (
          <div
            className={`p-4 mb-4 rounded-lg ${alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {alert.type === 'success' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2 2m-2-2l2 2M14 10V6H4v12h10V10m0 4l2 2" />
                )}
              </svg>
              <p>{alert.message}</p>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>
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
            Login
          </button>
          {role === 'student' && (
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 mt-4"
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
