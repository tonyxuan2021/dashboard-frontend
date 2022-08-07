import React from "react";
import { theme } from "../../../theme";
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: theme.palette.primary.grey,
        font: {
          size: 18,
        },
      },
    },
    x: {
      ticks: {
        color: theme.palette.primary.grey,
        font: {
          size: 18,
        },
      },
    },
  },
};

const data = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "First dataset",
      data: [40, 45, 42, 41, 40, 43, 40, 42, 39],
      fill: true,
      backgroundColor: theme.palette.blueColor.main,
      borderColor: theme.palette.blueColor.main,
      borderWidth: 5,
    },
  ],
};

export default function Charts_4() {
  return (
    <div style={{ height: "230px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
