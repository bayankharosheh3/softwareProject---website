import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Style from "./styles.module.css";

const MyForm = ({ clinics,setClinics }) => {

  const [clinic, setClinic] = useState({
    id: "4",
    specialty: "",
    name: "",
    img: "https://static.bookinghealth.com/uploads/clinics/gallery/m/4498-1408-otr_Depositphotos_316360964_xl-2015-1.jpg",
    doctors: 0,
    rate: 0,
    status: false,
    income: {
      avg: 0,
      everyMonth: [
        { month: "jan", income: 0 },
        { month: "feb", income: 0 },
        { month: "mar", income: 0 },
        { month: "mar", income: 0 },
        { month: "april", income: 0 },
        { month: "jun", income: 0 },
        { month: "jul", income: 0 },
      ],
    },
    location: "",
  });

  const handelChange = (value,key) => {
    setClinic({...clinic,[key]:value})
  };

  const handelClick = () => {
    setClinics([clinic,...clinics])
  };


  return (
    <div className={Style.container}>
      <h3>Add new Clinic</h3>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="Name">Name</Form.Label>
        <Form.Control
          id="Name"
          type="text"
          size="sm"
          onChange={(e) => handelChange(e.target.value, "name")}
        />
      </div>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="inputPassword5">Specialty</Form.Label>
        <Form.Select
          aria-label="Default select example"
          size="sm"
          onChange={(e) => handelChange(e.target.value, "specialty")}
        >
          <option></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="Location">Location</Form.Label>
        <Form.Control
          id="Location"
          type="text"
          size="sm"
          onChange={(e) => handelChange(e.target.value, "location")}
        />
      </div>
      <div className={Style.inputContainer}>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload Picture</Form.Label>
          <Form.Control type="file" size="sm"   onChange={(e) => handelChange(e.target.value, "img")}/>
        </Form.Group>
      </div>
      <div className={Style.button}>
        <Button variant="success" size="sm" onClick={handelClick}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default MyForm;
