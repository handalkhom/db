import React from "react";
import Login from "./Login";
import Register from "./Register";
import ActivityAdd from "./ActivityAdd";
import ActivityView from "./ActivityView";
import ActivityDescription from "./ActivityDescription";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activity-add" element={<ActivityAdd />} />
          <Route path="/activity-desc" element={<ActivityDescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
