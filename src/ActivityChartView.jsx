import React from "react";
import ActivityChart from "./ActivityChart";
import Navigation from "./Navigation";

const ActivityChartView = () => {
  return (
    <div className="appBg">
      <Navigation />
      <ActivityChart />
    </div>
  );
};
export default ActivityChartView;
