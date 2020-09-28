import React from "react";
import DisplayBook from "./books";

class Card extends React.Component {
  render() {
    console.log(this.props, "props in Card///");
    console.log(this.props.value, "props value in Card///");
    // const books = this.props.value.lib.map((book) => ( // if class was used in index.js
    const books = this.props.value.map((book) => (
      <DisplayBook
        changeHandle={this.props.changeHandle}
        changeToggle={this.props.changeToggle}
        key={book.id}
        book={book}
      />
    ));

    return <div className="d-flex flex-wrap">{books}</div>;
  }
}

export default Card;
