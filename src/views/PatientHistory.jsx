import React from "react";
import { useLocation } from "react-router";
import HistoryTable from "../components/HistoryTable";

const PatientHistory = () => {
  const { state } = useLocation();
  const { PatientId } = state || {};

  console.log(PatientId);

  const patientName = "Ali";

  const rows = [
    {
      id: "1",
      question: "Past surgeries & hospitalizations",
      answers: ["aaa", "bbbbb"],
    },
    {
      id: "2",
      question: "Chronic diseases",
      answers: ["aaa", "bbbbb"],
    },
    {
      id: "3",
      question: "Kind of taken medication",
      answers: ["aaa", "bbbbb"],
    },

    {
      id: "5",
      question: "Diseases or medical problems that run in family",
      answers: ["aaa", "bbbbb"],
    },
    {
      id: "4",
      question: "Smoking",
      answers: ["no"],
    },
  ];

  const columns = ["question", "answers"];

  return (
    <HistoryTable columns={columns} rows={rows} patientName={patientName} />
  );
};

export default PatientHistory;
