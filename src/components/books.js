import React from "react";
import "font-awesome/css/font-awesome.min.css";

function DisplayBook(props) {
  console.log(props, "props in display book ///////////////");
  return (
    <div className="m-2 p-5 bg-white radius">
      <div className="d-flex  justify-content-between w-100">
        <h2>Title: {props.book.title}</h2>
        <button
          onClick={() => {
            props.changeHandle(props.book.id);
          }}
          className="fas fa-trash-alt btn fa-lg"
        ></button>
      </div>
      <p>Author: {props.book.author}</p>
      <p>Pages: {props.book.pages}</p>
      <button
        onClick={() => {
          props.changeToggle(props.book);
        }}
        className={
          props.book.read == "Read" ? "btn btn-success" : "btn btn-danger"
        }
      >
        {props.book.read == "Read" ? "Read" : "Unread"}
      </button>
    </div>
  );
}

export default DisplayBook;
