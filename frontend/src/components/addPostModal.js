import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddPost from "../pages/addPost";
import AddButton from "./AddButton";
import { useState } from "react";
import "../css/feedpage.css";

function PostPop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="add-post-button">
        <Button
          variant="primary"
          onClick={handleShow}
          className="button1"
          style={{ backgroundColor: "#9EBC9E", border: "none" }}
        >
          Add a post
        </Button>
      </div>

      {/* <AddButton variant="primary" onClick={handleShow}>
       
      </AddButton> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPost></AddPost>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default PostPop;
