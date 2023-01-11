import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
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
      <DropdownButton
        size="sm"
        id="dropdown-basic-button"
        title="Sort"
        bsPrefix={Style.dropdown}
      >
        <Dropdown.Item onClick={() => setSort("id")}>id</Dropdown.Item>
        <Dropdown.Item onClick={() => setSort("name")}>Name</Dropdown.Item>
        <Dropdown.Item onClick={() => setSort("rate")}>Rate</Dropdown.Item>
      </DropdownButton>
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
