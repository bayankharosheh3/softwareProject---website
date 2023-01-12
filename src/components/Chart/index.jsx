import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Style from "./styles.module.css"


const MyChart = ({x,y}) => {
  const labels = x;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(123, 200, 156)",
        borderColor: "rgb(123, 200, 156)",
        data: y,
      },
    ],
  };
  return (
    <div className={Style.container}>
      <Line data={data} />
    </div>
  );
};

export default MyChart;
