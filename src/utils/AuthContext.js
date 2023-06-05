import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const login = (name,email) => {
    // Perform login logic
    setLoggedIn(true);
    setUsername(name);
    setEmail(email);
  };


  const logout = () => {
    // Perform logout logic
    setLoggedIn(false);
    setUsername('');
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, username, email }}>
      {children}
    </AuthContext.Provider>
  );
};
