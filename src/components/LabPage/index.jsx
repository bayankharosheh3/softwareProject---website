import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Style from "./styles.module.css";

const LabPage = () => {
  const doctors = [
    {
      doctor: "doctor1",
      id: 1,
    },
    {
      doctor: "doctor2",
      id: 2,
    },
  ];

  const [show, setShow] = useState(false);

  const [message, setMessage] = useState({});

  const handelChange = (value, key) => {
    setMessage({ ...message, [key]: value });
  };

  const handelClick = () => {
    if (
      (message.doctor == "" || message.message === "" || message.title === "",
      message.file === "")
    ) {
      setShow(true);
    } else {
      console.log(message);
      setMessage({ doctor: "", file: "", message: "", title: "" });
      alert('Done')
    }
  };

  return (
    <div className={Style.container}>
      <h3>Send File</h3>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="inputPassword5">Select Doctor</Form.Label>
        <Form.Select
          aria-label="Default select example"
          size="sm"
          value={message.doctor}
          onChange={(e) => {
            handelChange(e.target.value, "doctor");
          }}
        >
          <option value=""></option>
          {doctors.map((item, index) => {
            return (
              <option value={item.doctor} key={index}>
                {item.doctor}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control
          id="title"
          type="text"
          size="sm"
          value={message.title}
          onChange={(e) => {
            handelChange(e.target.value, "title");
          }}
        />
      </div>

      <div className={Style.inputContainer}>
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control
          id="message"
          type="area"
          size="sm"
          value={message.message}
          onChange={(e) => {
            handelChange(e.target.value, "message");
          }}
        />
      </div>
      <div className={Style.inputContainer}>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type="file"
            size="sm"
            value={message.file}
            onChange={(e) => {
              handelChange(e.target.value, "file");
            }}
          />
        </Form.Group>
      </div>
      <div className={Style.button}>
        <Button variant="success" size="sm" onClick={handelClick}>
          Send
        </Button>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Can't Send</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill the inputs</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
            }}
          >
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LabPage;
