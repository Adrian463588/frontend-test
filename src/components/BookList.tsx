import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface Book {
  title: string;
  author: string;
  coverImage: string;
}

const books: Book[] = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage: "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://encyclopediaofalabama.org/wp-content/uploads/2023/02/m-2908.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Nineteen_Eighty-Four_cover.jpg/220px-Nineteen_Eighty-Four_cover.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/The_Great_Gatsby_cover.jpg/220px-The_Great_Gatsby_cover.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Pride_and_Prejudice_1813_cover.jpg/220px-Pride_and_Prejudice_1813_cover.jpg",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/One_Hundred_Years_of_Solitude_cover.jpg/220px-One_Hundred_Years_of_Solitude_cover.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/The_Hobbit_1937_cover.jpg/220px-The_Hobbit_1937_cover.jpg",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Animal_Farm_cover.jpg/220px-Animal_Farm_cover.jpg",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Brave_New_World_cover.jpg/220px-Brave_New_World_cover.jpg",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lord_of_the_Flies_cover.jpg/220px-Lord_of_the_Flies_cover.jpg",
  },
];


const BookList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredBooks.map((book, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-500">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
