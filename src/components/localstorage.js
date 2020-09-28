import React from "react";
import DisplayBook from "./books";

const setLocalStorage = (function () {
  const renderEachBookFromLocalStorage = () => {
    if (localStorage.length > 0) {
      Object.keys(localStorage).forEach(function (id) {
        // id is key
        console.log(id, "id in localstorage render each book");
        let desirialize_id = JSON.parse(id);
        let book = localStorage.getItem(desirialize_id);
        // You always need to have a wrapping parent JSX tag when returning jsx.
        // <DisplayBook book={book}/> does not work
        return <DisplayBook book={book} />;
      });
    }
  };

  const addNewBookToLocalStorage = (book) => {
    // add a new book to localStorage

    // let existing_books = JSON.parse(localStorage.getItem(JSON.stringify(Task.get_current_project()))); // get a whole list (todos) of current project
    // console.log(existing_todos,'existing_todos from addNewTodoToLocalStorage')
    // existing_todos.push(todo)
    let new_book = JSON.stringify(book);
    console.log(new_book, "new_book from addNewTodoToLocalStorage");

    localStorage.setItem(JSON.stringify(book.id), new_book);
  };
  // const renderTodoFromLocalStorage = (book_list) => {
  //     let books = JSON.parse(localStorage.getItem(JSON.stringify(book_list))); // get a whole list that contains todos that belong to current key
  //     console.log(books, 'local storage todo from renderTodoFromLocalStorage')
  //     for (let book of books) {
  //         // let cur_todo = JSON.parse(todo)
  //         <DisplayBook book={book}/>
  //     }
  // }
  return {
    renderEachBookFromLocalStorage,
    addNewBookToLocalStorage,
  };
})();

export default setLocalStorage;
