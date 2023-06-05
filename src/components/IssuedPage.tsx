import React from 'react';
import { Link } from 'react-router-dom';

const IssuedPage: React.FC = () => {
  // Dummy data for issued books
  const issuedBooks = [
    { id: 1, cover: 'https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg', title: 'Bumi', returnDate: '09/09/2023' },
    { id: 2, cover: 'https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg', title: 'Bintang', returnDate: '09/09/2023' },
    { id: 3, cover: 'https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg', title: 'Bulan', returnDate: '09/09/2023' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {issuedBooks.map((book) => (
        <div key={book.id} className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg">
          <div className="relative">
            <Link to="/readbook">
              <img src={book.cover} alt="Book Cover" className="w-full h-40 object-cover" />
            </Link>
            <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v1H3V5zm2 2v9a2 2 0 002 2h6a2 2 0 002-2V7h2a1 1 0 110 2H5a1 1 0 010-2h2zm7 3a1 1 0 011 1v5a1 1 0 11-2 0V11a1 1 0 011-1zm-4 0a1 1 0 011 1v5a1 1 0 11-2 0V11a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <Link to="/readbook" className="text-xl font-semibold hover:underline">{book.title}</Link>
            <p className="text-gray-500 mt-2">Return Date: {book.returnDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IssuedPage;
