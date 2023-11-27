import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Grafik Aktivitas ",
  },
  xAxis: {
    categories: [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ],
  },
  series: [
    {
      data: [1, 2, 3, 4, 5, 6, 7],
      name: "Positive",
    },
    {
      data: [6, 3, 4, 2, 6, 2, 3],
      name: "Negative",
    },
  ],
};
const ActivityChart = () => {
  return (
    <div className="chart-wrapper">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default ActivityChart;
