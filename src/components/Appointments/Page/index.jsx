import React from "react";
import { useState } from "react";
import Sorting from "../../Sorting";
import AppTable from "../../Table";

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


  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");


  const columns = ["Doctor", "Clinic", "Status", "Schedule", "Rate", "Account"];

  const [checked, setChecked] = useState([]);

  const sortOptions = ["id","name","rate"];

  return (
    <div>
      <Sorting
        rows={doctors}
        setRows={setDoctors}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options= {sortOptions}
      />
      <AppTable
        rows={doctors}
        columns={columns}
        setRows={setDoctors}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Page;
