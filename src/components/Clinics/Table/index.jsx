import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";

const CTable = ({ columns, clinics, setClinics }) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  var color = "success";
  var status = "work";

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  const handelDelete = (id) => {
    const filtered = clinics.filter((clinic) => clinic.id !== id);
    setClinics(filtered);
  };

  return (
    <div className={Style.tableContainer}>
      <Table className={Style.table}>
        <thead className={Style.tableHead}>
          <tr>
            <th>#</th>
            {columns.map((item2) => (
              <th>{item2}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clinics.map((item, index) => {
            if (!item.status) {
              color = "primary";
              status = "close";
            } else {
              color = "success";
              status = "open";
            }
            // console.log(item.id)
            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.id}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.imgContainer}>
                      <img src={item.img} alt="user-img" />
                    </div>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.name}</p>
                      <p className={Style.detail}>{item.specialty}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={Style.textContainer}>
                    <p className={Style.para}>{item.location}</p>
                  </div>
                </td>
                <td>
                  <div className={Style.textContainer}>
                    <span>{item.doctors}</span>
                  </div>
                </td>
                <td>
                  <span className={Style.para2}>{item.rate}</span>
                  <i class="bx bxs-star" style={{ color: "#7bc89c" }}></i>
                </td>
                <td>
                  <Badge bg={color}>{status}</Badge>
                </td>
                <td>
                  <span className={Style.para2}>{item.income.avg}</span>
                  <i class="bx bx-dollar"></i>
                </td>
                <td>
                  <div className={Style.btns}>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleShow(item.id)}
                    >
                      <i class="bx bx-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure you want delete this Clinic?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handelDelete(deleteId);
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

export default CTable;
