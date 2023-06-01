import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import BookList from './components/BookList';
import AdminDashboard from './components/AdminDashboard';
import UpdateBook from './components/updateBook';
import DeleteBook from './components/DeleteBook';
import AddBook from './components/AddBook';
import 'tailwindcss/tailwind.css';
import './App.css';

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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/updatebook" element={<UpdateBook title={''} details={''} cover={''} onUpdate={function (title: string, details: string, cover: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/deletebook" element={<DeleteBook cover={''} onDelete={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/addbook" element={<AddBook onAdd={function (title: string, author: string, details: string, cover: string): void {
          throw new Error('Function not implemented.');
        } } />} />
      </Routes>
    </Router>
  );
};

export default App;
