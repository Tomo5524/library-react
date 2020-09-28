// Structure Tree
// root
//   app
//     nav
//       form
//         Modal
//     Card
//       displaycard

// The component that owns a piece of state should be the one modifying it.

// import React from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Nav from "./components/nav";
import Card from "./components/card";
import _ from "lodash";
// import setLocalStorage from "./components/localstorage";

const savedLibrary = JSON.parse(localStorage.getItem("library"));

function App() {
  // grab existing books from localstorage, if there is no book in localstorage, libraby assignes an empty list
  const [library, setLibrary] = useState(_.cloneDeep(savedLibrary) || []);

  // useEffect(() => {
  //   localStorage.setItem("library", JSON.stringify(library));
  //   console.log(library, "useEffect executed");
  // }, [library]);

  // create state here
  const [book, setState] = useState({
    title: "",
    author: "",
    pages: "",
    read: "",
    required: false,
  });

  function handleChange(e) {
    if (
      e.target.name == "title" ||
      e.target.name == "author" ||
      e.target.name == "pages" ||
      e.target.value == "Unread" ||
      e.target.value == "Read"
    ) {
      // property's name and name assigned in modal.js should be same
      // name is attribute and value is input here
      const { name, value } = e.target;
      // https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
      // Updating a specific record will require making a recall to the previous State prevState
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleClick(e) {
    // this function fires when user clicks anywhere in Modal
    // this function should only fire when submit clicked so the first line checks it
    if (e && e.target.innerHTML == "Submit") {
      // check if input is valid
      if (
        book.title !== "" &&
        book.author !== "" &&
        book.pages !== "" &&
        book.read !== ""
      ) {
        const new_title = book.title;
        const new_author = book.author;
        const new_pages = book.pages;
        const new_read = book.read;
        const new_book = {
          title: new_title,
          author: new_author,
          pages: new_pages,
          read: new_read,
          id: new Date().getTime(),
        };
        const updated_library = _.cloneDeep(library);
        updated_library.push(new_book);
        setLibrary(updated_library);
        console.log(library, "after library updated");
        // all properties are in line below
        // because in this line, make sure required is false to submit,
        // but we cannot modify required alone so throw all elements in there
        setState({
          title: book.title,
          author: book.author,
          pages: book.pages,
          read: book.read,
          required: false,
        });
        //// reset current state so empty input does not go through validation
        /// EDGE CASE
        resetCurrentState();
        // overwrite whole library in localstorage
        localStorage.setItem("library", JSON.stringify(updated_library));
      } else {
        // setState({ required: true }); // does not work
        setState({
          title: book.title,
          author: book.author,
          pages: book.pages,
          read: book.read,
          required: true,
        });
      }
    }
  }

  function deleteHandle(given_id) {
    const new_books = library.filter((book) => book.id !== given_id);
    setLibrary(new_books);
    // Don't use removeItem() that as the name says removes the whole item from localStorage. Just do another setItem() to overwrite the old data.
    localStorage.setItem("library", JSON.stringify(new_books));
  }

  function handleToggle(cur_book) {
    console.log(cur_book, "cur_book /////");
    let changed_state = cur_book.read == "Read" ? "Not Read" : "Read";
    console.log(changed_state, "changed_state /////");
    // also update libraby
    // https://stackoverflow.com/questions/49627157/update-the-attribute-value-of-an-object-using-the-map-function-in-es6
    // how to edit one spefic object out of array
    const editBooks = library.map((item) => {
      // create new object for item
      var temp = Object.assign({}, item);
      if (item.id === cur_book.id) {
        temp.read = changed_state;
        console.log(temp, "temp//////");
      }
      return temp;
    });
    setLibrary(editBooks);
    // might not have to use line below if I use useEffect instead
    localStorage.setItem("library", JSON.stringify(editBooks));
  }

  function resetCurrentState() {
    setState({
      title: "",
      author: "",
      pages: "",
      read: "",
      required: false,
    });
    // console.log(book, "this.state after reset /////");
    // state still remains in above line but state has been changed
  }

  return (
    <div className="container">
      <Nav value={book} onChange={handleChange} onClick={handleClick} />
      <Card
        value={library}
        changeHandle={deleteHandle}
        changeToggle={handleToggle}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

// first I wantd to go with class but handling localstorage is a lot work and doest not work well with localstorage
// so i just put the whole code for a future reference

// class App extends React.Component {
//   // change this class to function
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       author: "",
//       pages: "",
//       read: "",
//       lib: [],
//       required: false,
//     };
//     // without this, error message is ConstantSourceNode
//     // TypeError: this.setState is not a function
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.deleteHandle = this.deleteHandle.bind(this);
//     this.handleToggle = this.handleToggle.bind(this);
//     this.resetCurrentState = this.resetCurrentState.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   // how to handle change, watch Youtube

//   // warningHandle(warning_state) {
//   //   this.setState({ required: !warning_state });
//   // }

//   handleChange(e) {
//     console.log("jsut chenaged", e.target);
//     if (e.target.name == "title") {
//       this.setState({ title: e.target.value });
//     } else if (e.target.name == "author") {
//       this.setState({ author: e.target.value });
//     } else if (e.target.name == "pages") {
//       this.setState({ pages: e.target.value });
//     } else if (e.target.value == "read") {
//       this.setState({ read: "Read" });
//     } else if (e.target.value == "not-read") {
//       this.setState({ read: "Not Read" });
//     }
//   }

//   handleClick(e) {
//     if (e && e.target.innerHTML == "Submit") {
//       // check if input is valid
//       if (
//         this.state.title !== "" &&
//         this.state.author !== "" &&
//         this.state.pages !== "" &&
//         this.state.read !== ""
//       ) {
//         const new_title = this.state.title;
//         const new_author = this.state.author;
//         const new_pages = this.state.pages;
//         const new_read = this.state.read;
//         const new_book = {
//           title: new_title,
//           author: new_author,
//           pages: new_pages,
//           read: new_read,
//           id: new Date().getTime(),
//         };

//         const updated_library = this.state.lib.slice();
//         updated_library.push(new_book);
//         console.log(updated_library, "updated_library");
//         this.setState({
//           lib: updated_library,
//         });
//         // <Card value={this.state.lib}/>
//         this.setState({ required: false });
//         console.log("valid /////////////");
//         //// reset current state so empty input does not go through validation
//         /// EDGE CASE
//         this.resetCurrentState();
//         // add a new book to localstorage
//         localStorage.setItem(
//           JSON.stringify(new_book.id),
//           JSON.stringify(new_book)
//         );
//       } else {
//         this.setState({ required: true });
//         console.log("invalid /////////////////");
//       }
//       console.log(this, "this shown");
//     }
//   }

//   deleteHandle(given_id) {
//     const new_books = this.state.lib.filter((book) => book.id !== given_id);
//     this.setState({ lib: new_books });
//     localStorage.removeItem(JSON.stringify(given_id));
//   }

//   handleToggle(cur_book) {
//     console.log(cur_book, "cur_book /////");
//     let changed_state = cur_book.read == "Read" ? "Not Read" : "Read";
//     console.log(changed_state, "changed_state /////");
//     // also update libraby
//     // https://stackoverflow.com/questions/49627157/update-the-attribute-value-of-an-object-using-the-map-function-in-es6
//     // how to edit one spefic object out of array
//     const editBooks = this.state.lib.map((item) => {
//       // create new object for item
//       var temp = Object.assign({}, item);
//       if (item.id === cur_book.id) {
//         temp.read = changed_state;
//         console.log(temp, "temp//////");
//       }
//       return temp;
//     });

//     console.log(editBooks, "editBooks /////");
//     this.setState({ lib: editBooks });
//     console.log(this.state.lib, "this.state.lib /////");

//     //   this.state.lib.forEach(function (book) {
//     //     if(book.id === cur_book.id){
//     //       this.setState({ read: changed_state });
//     //     }
//     // });

//     //   console.log(this.state.read, "this.state.read /////");
//     //   console.log(this.state.lib, "this.state.lib /////");
//   }

//   resetCurrentState() {
//     this.setState({
//       title: "",
//       author: "",
//       pages: "",
//       read: "",
//       required: false,
//     });
//     console.log(this.state, "this.state after reset /////");
//     // state still remains in above line but state has been changed
//   }
