import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [alert, setAlert] = useState(null); // State for managing alerts

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsAuthenticated(false);

    // Show success alert message
    setAlert({
      message: 'You have successfully logged out!',
      type: 'success',
    });

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000); // 3 seconds delay for alert visibility
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, alert }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
