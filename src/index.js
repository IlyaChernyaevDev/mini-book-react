import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img: `https://images-na.ssl-images-amazon.com/images/I/81AKVMzInqL._AC_UL200_SR200,200_.jpg`,
    title: "They Both Die at the End",
    author: "Adam Silvera",
  },
  {
    id: 2,
    img: `https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg`,
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
  },
  {
    id: 3,
    img: `https://images-na.ssl-images-amazon.com/images/I/81LoD65Jy6L._AC_UL200_SR200,200_.jpg`,
    title: "Later",
    author: "Stephen King",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="book cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
