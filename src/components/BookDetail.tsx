import React from "react";

interface BookDetailProps {
  title: string;
  author: string;
  coverImage: string;
  synopsis: string;
  quantity: number;
}

const BookDetail: React.FC<BookDetailProps> = ({
  title,
  author,
  coverImage,
  synopsis,
  quantity,
}) => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Loan Now
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <img src={coverImage} alt={title} className="w-64 h-auto" />
        <div className="md:ml-4 mt-4 md:mt-0">
          <p className="text-lg font-semibold mb-2">Author: {author}</p>
          <p className="text-gray-500 mb-2">Quantity: {quantity}</p>
          <p className="mb-4">{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
