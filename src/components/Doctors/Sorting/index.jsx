import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import Style from "./styles.module.css";

const Sorting = ({
  setSelect,
  select,
  checked,
  doctors,
  setDoctors,
  setSort,
}) => {
  console.log(checked);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handelDelete = (checked) => {
    var filtered = doctors;
    checked.map((item) => {
      if (item.checked == true) {
        filtered = filtered.filter((doctor) => doctor.id !== item.id);
        console.log(item);
      }
    });

    setDoctors(filtered);
  };
  return (
    <div className={Style.container}>
      <Form.Label htmlFor="sort" bsPrefix={Style.label}>
        Sort By
      </Form.Label>
      <Form.Select
        size="sm"
        id="Sort"
        bsPrefix={Style.dropdown}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="id">id</option>
        <option value="name">Name</option>
        <option value="rate">Rate</option>
      </Form.Select>
      <Button
        variant="primary"
        size="sm"
        className={select ? Style.border : Style.color}
        onClick={() => setSelect(!select)}
      >
        select
      </Button>
      {checked.length != 0 && (
        <Button
          variant="primary"
          size="sm"
          className={Style.color}
          onClick={handleShow}
        >
          Delete selected
        </Button>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure you want delete this account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handelDelete(checked);
              setShow(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sorting;
