import React, { useState } from "react";
import {
  Badge,
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";

const MyTable = ({
  sort,
  doctors,
  columns,
  setDoctors,
  select,
  checked,
  setChecked,
}) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  var color = "success";
  var status = "work";

  const handelDelete = (id) => {
    const filtered = doctors.filter((doctor) => doctor.id !== id);
    setDoctors(filtered);
  };

  const sorted = doctors.sort((p1, p2) => {
    if (sort === "id") {
      return p1.id > p2.id ? 1 : p1.id < p2.id ? -1 : 0;
    } else if (sort === "rate") {
      return p1.rate < p2.rate ? 1 : p1.rate > p2.rate ? -1 : 0;
    } else if (sort === "name") {
      return p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0;
    } else return 0;
  });

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
          {sorted.map((item, index) => {
            if (!item?.status) {
              color = "danger";
              status = "not working";
            } else {
              color = "success";
              status = "working";
            }

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
                      <p className={Style.detail}>{item.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className={Style.para}>{item.clinic}</p>
                  {/* <p className={Style.detail}>IT department</p> */}
                </td>
                <td>
                  <Badge bg={color}>{status}</Badge>
                </td>
                <td>
                  {item.schedule.map((item1) => {
                    return <div>{item1}</div>;
                  })}
                </td>
                <td>
                  <div>
                    <span> {item.rate}</span>
                    <i class="bx bxs-star" style={{ color: "#7bc89c" }}></i>
                  </div>
                </td>
                <td>
                  <div className={Style.btn}>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleShow(item.id)}
                    >
                      <i class="bx bx-trash"></i>
                    </Button>
                  </div>
                </td>
                {select && (
                  <td>
                    <ToggleButtonGroup
                      type="checkbox"
                      defaultValue={[1, sorted.length]}
                      className="mb-2"
                    >
                      <ToggleButton
                        size="sm"
                        id={item.id}
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value={item.id}
                        onChange={(e) =>
                          setChecked([
                            ...checked,
                            { id: item.id, checked: e.currentTarget.checked },
                          ])
                        }
                      >
                        <i class="bx bx-check"></i>{" "}
                      </ToggleButton>
                      {/* <Button
                      size="sm"
                      variant={"primary"}
                      onClick={() => {
                        setDeleted([...deleted, item]);
                      }}
                    >
                      <i class="bx bx-check"></i>{" "}
                    </Button> */}
                    </ToggleButtonGroup>
                  </td>
                )}
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

export default MyTable;
