import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
          size: 16,
        },
      },
    },
    x: {
      ticks: {
        color: "white",
        font: {
          size: 16,
        },
      },
    },
  },
};

const labels = ["M", "T", "W", "T", "F", "S", "S"];

export const data = {
  labels,
  datasets: [
    {
      label: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
      backgroundColor: "rgb(255, 255, 255)",
      barThickness: 6,
    },
  ],
};

export function Charts_1() {
  return <Bar options={options} data={data} />;
}
