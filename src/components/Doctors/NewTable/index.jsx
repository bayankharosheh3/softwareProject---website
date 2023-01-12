import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";

const NewTable = ({
  newDoctors,
  doctors,
  columns,
  setDoctors,
  setNewDoctors,
}) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  const handelDelete = (id) => {
    const filtered = newDoctors.filter((doctor) => doctor.id !== id);
    setNewDoctors(filtered);
  };

  const handelConfirm = (doctor) => {
    setDoctors([
      {
        id: doctor.id,
        img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
        name: doctor.name,
        email: doctor.email,
        clinic: doctor.specialty,
        status: true,
        schedule: [0],
        rate: 0,
      },
      ...doctors,
    ]);
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
          {newDoctors.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.id}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={Style.textContainer}>
                    <p className={Style.detail}>{item.email}</p>
                    <p className={Style.detail}>{item.phone}</p>
                  </div>
                </td>
                <td>
                  <p className={Style.para2}>{item.specialty}</p>
                </td>
                <td>
                  <div className={Style.btns}>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => {
                        handelConfirm(item);
                        handelDelete(item.id);
                      }}
                    >
                      <i class="bx bx-check-double"></i>
                    </Button>
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
        <Modal.Body>are you sure you want delete this account?</Modal.Body>
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

export default NewTable;
