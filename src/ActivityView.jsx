import React from "react";
import Navigation from "./Navigation";
import CurrentDate from "./CurrentDate";
import ActivityList from "./ActivityList";
import ActivityBtn from "./ActivityBtn";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const ActivityView = () => {
  return (
    <div className="appBg">
      <Navigation />
      <CurrentDate />
      <ActivityList />
      <ActivityList />
      <ActivityBtn />
    </div>
  );
};
export default ActivityView;
