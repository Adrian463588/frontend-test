import React, { FC, useState } from "react";
import { Carousel, CarouselItem, Button  } from "react-bootstrap";


interface Book {
  title: string;
  author: string;
  coverImage: string;
}

const books: Book[] = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    coverImage:
      'https://images.pexels.com/photos/3214775/pexels-photo-3214775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage:
      'https://images.pexels.com/photos/3214775/pexels-photo-3214775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: '1984',
    author: 'George Orwell',
    coverImage:
      'https://images.pexels.com/photos/3214775/pexels-photo-3214775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage:
      'https://images.pexels.com/photos/3214775/pexels-photo-3214775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverImage:
      'https://images.pexels.com/photos/4230562/pexels-photo-4230562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    coverImage:
      'https://images.pexels.com/photos/265045/pexels-photo-265045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage:
      'https://images.pexels.com/photos/357330/pexels-photo-357330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    coverImage:
      'https://images.pexels.com/photos/3184617/pexels-photo-3184617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    coverImage:
      'https://images.pexels.com/photos/3221377/pexels-photo-3221377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    coverImage:
      'https://images.pexels.com/photos/3214775/pexels-photo-3214775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      ];
      
      const Home: React.FC = () => {
        return (
          <div className="container mx-auto my-4">
            <Carousel fade controls={false} indicators={false} interval={3000} pause={false}>
      {books.map((book, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={book.coverImage} alt={book.title} />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Button variant="primary" href="/book-details/[book.id]">
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Bookmark List</h2>
              <Button variant="outline-secondary" href="/bookmark-list">
                Show All
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {books.map((book) => (
                <div key={book.title} className="bg-white rounded shadow p-4">
                  <img src={book.coverImage} alt={book.title} className="w-full" />
                  <h3 className="text-lg font-semibold my-2">{book.title}</h3>
                  <p className="text-gray-500">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        );
      };
      

export default Home;