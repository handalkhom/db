import React from "react";
import DescriptionNav from "./DescriptionNav";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Input, Form } from "antd";

const { TextArea } = Input;

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <EditOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const ActivityDescription = () => {
  return (
    <div className="appBg">
      <DescriptionNav />
      <p>
        <strong>07.00 Solat</strong>
      </p>
      <div className="activity-description-wrapper">
        <Form>
          <TextArea rows={4} />
        </Form>
        <Dropdown
          menu={{
            menuProps,
          }}
          placement="bottomLeft"
        >
          <Button>
            <EditOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};
export default ActivityDescription;
