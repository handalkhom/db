import React from "react";
import Login from "./Login";
import Register from "./Register";
import ActivityAdd from "./ActivityAdd";
import ActivityView from "./ActivityView";
import ActivityChartView from "./ActivityChartView";
import ActivityDescription from "./ActivityDescription";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Cookies from "js-cookie";

function App() {
  const userLogin = Cookies.get("access-token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userLogin ? <ActivityView /> : <Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/activity-add/:action" element={<ActivityAdd />}>
            <Route path="/activity-add/:action/:id" element={<ActivityAdd />} />
          </Route>
          <Route path="/activity-chart" element={<ActivityChartView />} />
          <Route path="/activity-desc" element={<ActivityDescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
