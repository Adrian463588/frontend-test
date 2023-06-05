import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');

  const login = (name,email) => {
    // Perform login logic
    setLoggedIn(true);
    localStorage.setItem('username', name);
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('email', email);
  };


  const logout = () => {
    // Perform logout logic
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setUsername('');
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, username, email }}>
      {children}
    </AuthContext.Provider>
  );
};
