import React from "react";
import MyCard from "../Card";
import Style from "./styles.module.css";

const Page = () => {
  const cards = [
    {
      icon: <i class="bx bx-calendar-check"></i>,
      title: "today appointments",
      number: "0",
      to:"/today"
    },
    {
      icon: <i class='bx bx-calendar' ></i>,
      title: "all appointments",
      number: "0",
      to:"/appointments"
    },
    {
      icon: <i class='bx bxs-group'></i>,
      title: "doctors",
      number: "24",
      to:"/doctors"
    },
    {
      icon: <i class='bx bxs-user'></i>,
      title: "patients",
      number: "4",
      to:"/patients"
    },
  ];
  return (
    <div>
        <div className={Style.row}>
          {cards.map((item) => {
            return <MyCard {...item} />;
          })}
        </div>
    </div>
  );
};

export default Page;
