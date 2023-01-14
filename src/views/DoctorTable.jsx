import React from "react";
import { useLocation } from "react-router";
import DTable from "../components/DoctorTable";

const DoctorTable = () => {
  const { state } = useLocation();
  const { DoctorId } = state || {};
  console.log(DoctorId);

  const doctorName = "Ali";

  const rows = [
    {
      id: "1",
      date: "20/3",
      time: "11:10",
      status: true,
      patientName: "john",
    },
    {
      id: "1",
      date: "20/3",
      time: "11:10",
      status: false,
      patientName: "",
    },
  ];
  const columns = ["Date", "Time", "Status", "Patient"];

  return (
    <div>
      <DTable columns={columns} rows={rows} doctorName={doctorName} />
    </div>
  );
};

export default DoctorTable;
