// import React, { useState } from "react";
// import { Book } from "../types/Book";

// interface LoanPageProps {
//   books: Book[];
// }

// interface BookProps {
//   book: Book;
//   onRemove: (book: Book) => void;
// }

// const BookComponent: React.FC<BookProps> = ({ book, onRemove }) => (
//   <div className="grid grid-cols-3 gap-4 p-4">
//     <img className="col-span-1" src={book.coverUrl} alt={book.title} />
//     <h2 className="col-span-1">{book.title}</h2>
//     <button className="col-span-1" onClick={() => onRemove(book)}>
//       <i className="fa fa-trash" aria-hidden="true"></i>
//     </button>
//   </div>
// );

// const LoanPage: React.FC<LoanPageProps> = ({ books }) => {
//   const [loanBooks, setLoanBooks] = useState<Book[]>([]);

//   const addLoan = (book: Book) => {
//     if (!loanBooks.includes(book)) {
//       setLoanBooks([...loanBooks, book]);
//     }
//   };

//   const removeLoan = (book: Book) => {
//     setLoanBooks(loanBooks.filter((b) => b !== book));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl mb-4">Loan Page</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {books.map((book) => (
//           <div key={book.id}>
//             <BookComponent book={book} onRemove={removeLoan} />
//             <button
//               className="mt-4 p-2 bg-blue-500 text-white"
//               onClick={() => addLoan(book)}
//             >
//               Add to Loan
//             </button>
//           </div>
//         ))}
//       </div>
//       <h2 className="text-xl mt-8">Books on Loan</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {loanBooks.map((book) => (
//           <BookComponent key={book.id} book={book} onRemove={removeLoan} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LoanPage;

