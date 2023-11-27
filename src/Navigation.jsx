import React from "react";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Button, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: <a href="./">Notes Activity</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <a href="./activity-chart">Grafik</a>,
    key: "2",
  },
];

const Navigation = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const logOut = () => {
    axios
      .get("https://api-deed-balancer.netlify.app/.netlify/functions/api/user/logout", {
        headers: {
          "Access-token": Cookies.get("access-token"),
        },
      })
      .then((response) => {
        Cookies.remove("access-token");
        messageApi.open({
          type: "success",
          content: `${response.data.message}`,
        });
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        messageApi.open({
          type: "success",
          content: `${err}`,
        });
      });
  };
  return (
    <div className="navigation">
      {contextHolder}
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
        <LogoutOutlined onClick={logOut} />
      </Button>
    </div>
  );
};
export default Navigation;
