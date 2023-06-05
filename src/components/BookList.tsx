import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from 'axios';

interface Book {
  id: string;
  book_id: number;
  book_title: string;
  ISBN: string;
  authors: string[];
  language_code: string;
  average_rating: number;
  rating_count: number;
  year_published: number;
  image_url: string;
  userIDs: string[];
}

const BookList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://readify-seven.vercel.app/api/v1/books');
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.book_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Book List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute top-0 left-0 h-full flex items-center ml-2 text-gray-500">
            <FiSearch />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        {filteredBooks.map((book) => (
          <Link to={`/product/${book.id}`} key={book.id} className="hover:cursor-pointer">
            <div className="bg-white rounded shadow p-4">
              <img
                src={book.image_url}
                alt={book.book_title}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{book.book_title}</h3>
              <p className="text-gray-500">{book.authors[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
