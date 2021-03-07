import React from "react";
import ReactDom from "react-dom";

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81AKVMzInqL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>They Both Die at the End</h1>;

const Author = () => <h4>Adam Silvera</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
