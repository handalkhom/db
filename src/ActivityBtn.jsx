// Ga dipake
import React from "react";
import CalendarModal from "./CalendarModal";
import { Button, ConfigProvider, Space } from "antd";
import { useNavigate } from "react-router-dom";

const ActivityBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="btn-wrapper">
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#ffe6d4",

            // Alias Token
            // colorBgContainer: "#000000",
          },
        }}
      >
        <Space>
          {/* <Button className="activity-btn">
          </Button> */}
          <CalendarModal />
          <Button type="primary" className="activity-btn" onClick={() => navigate("activity-add")}>
            Tambah Aktivitas
          </Button>
        </Space>
      </ConfigProvider>
    </div>
  );
};
export default ActivityBtn;
