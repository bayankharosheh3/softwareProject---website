import React from "react";
import MyChart from "../../Chart";
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
  return (
    <div>
      <div className={Style.row}>
        {cards.map((item) => {
          return <MyCard {...item} />;
        })}
      </div>
      <div className={Style.row}>
        <MyChart x={chart.months} y={chart.income} />
      </div>
    </div>
  );
};

export default Page;
