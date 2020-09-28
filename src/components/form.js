import React from "react";
// import ReactDOM from "react-dom";
import "../style.css"; // navigate back to style.css
// import ModalApp from "./modal";
import AppModal from "./modal";
// import Card from "./components/card";

// learn about form!!!

class Form extends React.Component {
  // state must be maintained here! read the state quote u will know what this means
  // The component that owns a piece of state should be the one modifying it

  //////////////
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "",
  //     author: "",
  //     pages: "",
  //     read: "",
  //     lib: [],
  //     required: false,
  //   };
  //   // without this, error message is ConstantSourceNode
  //   // TypeError: this.setState is not a function
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  //   // this.warningHandle = this.warningHandle.bind(this);
  //   // this.handleChange = this.handleChange.bind(this);
  // }

  // how to handle change, watch Youtube

  // warningHandle(warning_state) {
  //   this.setState({ required: !warning_state });
  // }

  // handleChange(e) {
  //   console.log("jsut chenaged", e.target);
  //   if (e.target.name == "title") {
  //     this.setState({ title: e.target.value });
  //   } else if (e.target.name == "author") {
  //     this.setState({ author: e.target.value });
  //   } else if (e.target.name == "pages") {
  //     this.setState({ pages: e.target.value });
  //   } else if (e.target.value == "read") {
  //     this.setState({ read: "read" });
  //   } else if (e.target.value == "not-read") {
  //     this.setState({ read: "not read" });
  //   }
  // }

  // handleClick(e) {
  //   if (e && e.target.innerHTML == "Submit") {
  //     // check if input is valid
  //     if (
  //       this.state.title !== "" &&
  //       this.state.author !== "" &&
  //       this.state.pages !== "" &&
  //       this.state.read !== ""
  //     ) {
  //       const new_title = this.state.title;
  //       const new_author = this.state.author;
  //       const new_pages = this.state.pages;
  //       const new_read = this.state.pages;
  //       const new_book = {
  //         title: new_title,
  //         author: new_author,
  //         pages: new_pages,
  //         read: new_read,
  //       };

  //       const updated_library = this.state.lib.slice();
  //       updated_library.push(new_book);
  //       console.log(updated_library, "updated_library");
  //       this.setState({
  //         lib: updated_library,
  //       });
  //       // <Card value={this.state.lib}/>
  //       this.setState({ required: false });
  //       console.log("valid /////////////");
  //     } else {
  //       this.setState({ required: true });
  //       console.log("invalid /////////////////");
  //     }
  //     console.log(this, "this shown");
  //   }
  // }

  render() {
    console.log(this.props, "props in Fprm");
    return (
      <div>
        {/* <h1>React Modal</h1> */}
        {/* <ModalApp show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </ModalApp> */}
        <AppModal
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        {/* <button type="button" onClick={this.showModal}>
          open
        </button> */}
      </div>
    );
  }
}

export default Form;

// function Form() {
//   // const clickHandle = () => {
//   //   console.log("hiya");
//   //   return <ModalApp />;
//   // };

//   return (
//     <div>
//       <button onClick={() => this.setState({ showModal: true })}>
//         Add Work Log
//       </button>
//       {/* <button onClick={clickHandle}>Add a new book</button> */}
//     </div>
//   );
// }

// export default Form;

// function Form() {
//   const clickHandle = () => {
//     return (
//       <div className="container book-form w-100">
//         <div className="d-flex justify-content-center">
//           <div className="user_card">
//             {/* <!-- create remove button  --> */}
//             <div className="remove-icon-box text-right">
//               <button className="remove-btn close-icon">
//                 <i className="fa fa-times align-top" aria-hidden="true"></i>
//               </button>
//             </div>
//             <div className="d-flex justify-content-center">
//               <div className="brand_logo_container">
//                 <div className="d-flex justify-content-center logo-wrapper">
//                   <i
//                     className="fa fa-book logo-book fa-5x"
//                     aria-hidden="true"
//                   ></i>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center form_container">
//               <form>
//                 <div className="input-group mb-3">
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <i className="fa fa-book" aria-hidden="true"></i>
//                     </span>
//                   </div>
//                   <input
//                     type="text"
//                     name="bookname"
//                     className="form-control input_user"
//                     id="bookname"
//                     placeholder="bookname"
//                     required
//                   />
//                 </div>
//                 <div className="input-group mb-3">
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <i className="fas fa-user"></i>
//                     </span>
//                   </div>
//                   <input
//                     type="text"
//                     name="authorname"
//                     className="form-control input_user"
//                     id="authorname"
//                     placeholder="authorname"
//                     required
//                   />
//                 </div>
//                 <div className="input-group mb-3">
//                   <div className="input-group-append">
//                     <span className="input-group-text">
//                       <i className="fa fa-bookmark" aria-hidden="true"></i>
//                     </span>
//                   </div>
//                   <input
//                     type="number"
//                     name="pages"
//                     className="form-control input_pass"
//                     id="pages"
//                     placeholder="pages"
//                     required
//                   />
//                 </div>
//                 <div className="read-check mb-3">
//                   <input type="radio" id="read" name="read" value="read" />
//                   <label for="read">Read</label>
//                   <input
//                     type="radio"
//                     id="not-read"
//                     name="read"
//                     value="not-read"
//                     checked
//                   />
//                   <label for="not-read">Not Read yet</label>
//                 </div>
//                 <div className="d-flex justify-content-center mt-3 login_container">
//                   <button type="submit" name="submit" className="btn login_btn">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <button onClick={clickHandle}>Add a new book</button>
//     </div>
//   );
// }

// export default Form;
