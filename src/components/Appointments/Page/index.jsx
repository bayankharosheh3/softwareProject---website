import React from "react";
import { useState } from "react";
import Sorting from "../../Sorting";
import AppTable from "../AppTable";

const Page = () => {
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "clinic",
      date: "30/3/2023",
      time: "12:00 am",
      status: true,
    },
    {
      id: "3",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "aJohn Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "clinic",
      date: "30/3/2023",
      time: "12:00 am",
      status: true,
    },
    {
      id: "2",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "bclinic",
      date: "29/3/2023",
      time: "12:00 am",
      status: true,
    },
    {
      id: "5",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "aclinic",
      date: "30/3/2023",
      time: "12:00 am",
      status: false,
    },
    {
      id: "4",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "aJohn Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "clinic",
      date: "31/3/2023",
      time: "12:00 am",
      status: false,
    },
  ]);

  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns = ["Date", "Time", "Patient", "Doctor", "Clinic", "Status"];

  const [checked, setChecked] = useState([]);

  const sortOptions = [
    "id",
    "date",
    "Doctor name",
    "Patient name",
    "clinic",
    "Booking",
  ];

  return (
    <div>
      <h3>UP Coming Appointments</h3>
      <Sorting
        rows={appointments}
        setRows={setAppointments}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <AppTable
        rows={appointments}
        columns={columns}
        setRows={setAppointments}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />

      <h3>Past Appointments</h3>
      <Sorting
        rows={appointments}
        setRows={setAppointments}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <AppTable
        rows={appointments}
        columns={columns}
        setRows={setAppointments}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Page;
