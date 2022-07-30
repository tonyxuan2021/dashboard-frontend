import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
        font: {
          size: 18,
        },
      },
    },
    x: {
      ticks: {
        color: "white",
        font: {
          size: 18,
        },
      },
    },
  },
};

const labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      borderColor: "rgb(255, 255, 255)",
      backgroundColor: "rgb(255, 255, 255)",
      borderWidth: 4,
    },
  ],
};

export function Charts_3() {
  return <Line options={options} data={data} />;
}
