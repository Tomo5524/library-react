import React from "react";
// import ReactDOM from "react-dom";
import "../style.css"; // navigate back to style.css
import Form from "./form";

class Nav extends React.Component {
  // handleClick() {
  //   console.log("hiya");
  // }

  render() {
    console.log(this.props, "props in Nav");
    return (
      <div className="d-flex justify-content-between align-items-center bg-white p-4 radius">
        <h1>Welcome to your own Library</h1>
        <Form
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        {/* <button onClick={this.handleClick}>click me!</button> */}
      </div>
    );
  }
}

export default Nav;
