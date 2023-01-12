import React from "react";
import { useState } from "react";
import Sorting from "../../Sorting";
import PatientsTable from "../PatientsTable";

const Page = () => {
  const [patients, setPatients] = useState([
    {
      id: "1",
      img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      lastAppointment: { doctor: "Ali", date: "30/3" },
      uploaded: true,
      answered: true,
    },
    {
      id: "2",
      img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      lastAppointment: { doctor: "Ali", date: "30/3" },
      uploaded: false,
      answered: true,
    },
    {
      id: "3",
      img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      lastAppointment: { doctor: "Ali", date: "30/3" },
      uploaded: false,
      answered: false,
    },
  ]);

  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns = ["Patient", "Last Appointment", "Medical Files", "History"];

  const [checked, setChecked] = useState([]);

  const sortOptions = ["id", "name","last appointment"];

  return (
    <div>
      <Sorting
        rows={patients}
        setRows={setPatients}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <PatientsTable
        rows={patients}
        columns={columns}
        setRows={setPatients}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Page;
