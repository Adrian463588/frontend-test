import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';




const App: React.FC = () => {

  const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage: "https://example.com/book1.jpg",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    quantity: 5,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/booklist" element={<BookList />} />
        <Route
  path="/bookdetail"
  element={
    <BookDetail
      title={book.title}
      author={book.author}
      coverImage={book.coverImage}
      synopsis={book.synopsis}
      quantity={book.quantity}
    />
  }
/>
 
      </Routes>
    </Router>
  );
};

export default App;
