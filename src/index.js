import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
