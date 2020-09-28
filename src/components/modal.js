import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import React, { useState } from "react";

function MyVerticallyCenteredModal(props) {
  console.log(props, "in vercenter");

  return (
    // console.log('return executed')
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* when modal is open, reset all the inputs  */}
          {/* e.g. when toggling read state, state remains changed and form vaildation goes through without specifying read state since it still remains changed from previous state */}
          {/* ////////////////////////////////////////////////// */}
          Add a new book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* create input to get book object here */}
        <form>
          <div className="py-2">
            <input
              type="text"
              name="title"
              placeholder="Bookname"
              onChange={(e) => {
                props.onChange(e);
              }}
            />
          </div>
          <div className="py-2">
            <input
              type="text"
              name="author"
              placeholder="Author name"
              onChange={(e) => {
                props.onChange(e);
              }}
            />
          </div>
          <div className="py-2">
            <input
              type="number"
              name="pages"
              placeholder="Pages"
              onChange={(e) => {
                props.onChange(e);
              }}
            />
          </div>
          <div className="py-2">
            <input
              type="radio"
              id="read"
              name="read"
              value="Read"
              onChange={(e) => {
                props.onChange(e);
              }}
            />
            <label htmlFor="read" className="mr-2">
              Read
            </label>
            <input
              type="radio"
              id="not-read"
              name="read"
              value="Unread"
              onChange={(e) => {
                props.onChange(e);
              }}
            />
            <label htmlFor="not-read">Not Read yet</label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <h5 className="flex-grow-1 text-danger">
          {props.value.required ? "All fields must be required" : ""}
        </h5>
        <Button
          // onClick={props.onHide}
          onClick={() => {
            //////// no need to call handleclick here because no matter where you click within the box of Modal, click fires and so does handleclick function.
            // just check what it was clicked which is handled in handleClick function
            if (
              props.value.title !== "" &&
              props.value.author !== "" &&
              props.value.pages !== "" &&
              props.value.read !== ""
            ) {
              console.log(props.value.required, "props.value.required ///");
              props.onHide();
            }
          }}
          // onChange={(e) => {
          //   props.onChange(e);
          // }}
          // onClick={props.onCLick}
        >
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props, "in Appmodal");
  // const func = props.onClick;

  // when calling a couple of fucntions onClick,
  // create another helper function to wrap all fuctninos together
  // const handleClickModal = () => {
  //   // e.preventDefault();
  //   props.onClick(); // needs parenthesis
  //   // setModalShow(false);
  // };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add a new book!
      </Button>

      <MyVerticallyCenteredModal
        value={props.value}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onChange={props.onChange}
        onClick={props.onClick}
        // onClick={() => {
        //   // props.onClick();
        //   props.onChange()
        // }}
      />
    </>
  );
}

export default AppModal;
