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
// import faker from "faker";

const ActivityChart = () => {
  return (
    <Line
      data={{
        labels: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ],
        datasets: [
          {
            data: [2, 4, 1, 3, 7, 3, 6],
          },
        ],
      }}
    ></Line>
  );
};
export default ActivityChart;
