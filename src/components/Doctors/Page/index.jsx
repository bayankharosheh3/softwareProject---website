import React from "react";
import { useState } from "react";
import NewTable from "../NewTable";
import Sorting from "../Sorting";
import MyTable from "../Table";

const Page = () => {
  const [doctors, setDoctors] = useState([
    {
      id: "1",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      name: "John Doe",
      email: "john.doe@gmail.com",
      clinic: "Ophthalmology",
      status: true,
      schedule: ["9:00", "11:00", "12:00"],
      confirmed: true,
      rate: 2.5,
    },
    {
      id: "2",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      name: "John Doe2",
      email: "john.doe@gmail.com",
      clinic: "Ophthalmology",
      status: true,
      schedule: ["9:00", "11:00", "12:00"],
      confirmed: true,
      rate: 3,
    },
    {
      id: "3",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      name: "John Doe",
      email: "john.doe@gmail.com",
      clinic: "Ophthalmology",
      status: false,
      schedule: ["9:00", "11:00", "12:00"],
      confirmed: true,
      rate: 5,
    },
    {
      id: "4",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      name: "John Doe",
      email: "john.doe@gmail.com",
      clinic: "Ophthalmology",
      status: true,
      schedule: ["9:00", "11:00", "12:00"],
      confirmed: true,
      rate: 1.5,
    },
  ]);
  const [newDoctors, setNewDoctors] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "059999999",
      specialty: "Ophthalmology",
    },
  ]);

  const [select, setSelect] = useState(false);

  const [deleted, setDeleted] = useState([]);

  const [sort, setSort] = useState("id");

  const columns2 = ["Name", "Email", "Specialty", "Confirm"];

  const columns = ["Doctor", "Clinic", "Status", "Schedule", "Rate", "Account"];

  return (
    <div>
      <NewTable
        doctors={doctors}
        columns={columns2}
        setDoctors={setDoctors}
        setNewDoctors={setNewDoctors}
        newDoctors={newDoctors}
      />
      <Sorting
        doctors={doctors}
        setDoctors={setDoctors}
        select={select}
        setSelect={setSelect}
        deleted={deleted}
        setSort={setSort}
      />
      <MyTable
        doctors={doctors}
        columns={columns}
        setDoctors={setDoctors}
        setNewDoctors={setNewDoctors}
        newDoctors={newDoctors}
        select={select}
        deleted={deleted}
        setDeleted={setDeleted}
        sort={sort}
      />
    </div>
  );
};

export default Page;
