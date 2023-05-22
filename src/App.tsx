import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import BookList from './components/BookList';





const App: React.FC = () => {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/booklist" element={<BookList />} />
        
 
      </Routes>
    </Router>
  );
};

export default App;
