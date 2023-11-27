import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import Cookies from "js-cookie";

const ActivityChart = () => {
  const [posisitf, setPositif] = useState();
  const [negatif, setnegatif] = useState();
  const [hari, setHari] = useState();
  useEffect(() => {
    axios
      .get(`https://api-deed-balancer.netlify.app/.netlify/functions/api/chart`, {
        headers: {
          "Access-token": Cookies.get("access-token"),
        },
      })
      .then((response) => {
        setHari(response.data.hari);
        setPositif(response.data.positif);
        setnegatif(response.data.negatif);
      });
  }, []);

  const options = {
    title: {
      text: "Grafik Aktivitas ",
    },
    xAxis: {
      categories: hari,
    },
    series: [
      {
        data: posisitf,
        name: "Positive",
      },
      {
        data: negatif,
        name: "Negative",
      },
    ],
  };
  return (
    <div className="chart-wrapper" style={{ width: "80vw" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default ActivityChart;
