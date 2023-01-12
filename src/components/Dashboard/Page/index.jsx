import React, { useState } from "react";
import MyChart from "../../Chart";
import TodayTable from "../../Today";
import MyCard from "../Card";
import Style from "./styles.module.css";

const Page = () => {
  const cards = [
    {
      icon: <i class="bx bx-calendar-check"></i>,
      title: "today appointments",
      number: "0",
      to: "/today",
    },
    {
      icon: <i class="bx bx-calendar"></i>,
      title: "all appointments",
      number: "0",
      to: "/appointments",
    },
    {
      icon: <i class="bx bxs-group"></i>,
      title: "doctors",
      number: "24",
      to: "/doctors",
    },
    {
      icon: <i class="bx bxs-user"></i>,
      title: "patients",
      number: "4",
      to: "/patients",
    },
  ];

  const chart = {
    months: ["January", "February", "March", "April", "May", "June"],
    income: [30000, 56000, 50000, 78900, 40000, 45000],
  };

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
      time: "12:00 am",
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
      time: "12:00 am",
    },
  ]);

  const columns = ["Time", "Patient", "Doctor"];

  return (
    <div>
      <div className={Style.row}>
        {cards.map((item) => {
          return <MyCard {...item} />;
        })}
      </div>
      <div className={Style.row}>
        <div className={Style.child}>
          <MyChart x={chart.months} y={chart.income} />
        </div>
        <div className={Style.child}>
          <TodayTable rows={appointments} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Page;
