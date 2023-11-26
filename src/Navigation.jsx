import React from "react";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Button } from "antd";

const items = [
  {
    label: <a href="./">Notes Activity</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <a href="./chart">Grafik</a>,
    key: "2",
  },
];

const Navigation = () => {
  return (
    <div className="navigation">
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Button>
            <MenuOutlined />
          </Button>
        </a>
      </Dropdown>
      <Button>
        <LogoutOutlined />
      </Button>
    </div>
  );
};
export default Navigation;
