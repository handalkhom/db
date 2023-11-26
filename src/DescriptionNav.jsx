import React from "react";
import { PushpinOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DescriptionNav = () => {
  return (
    <div className="navigation">
      <Button>
        <ArrowLeftOutlined />
      </Button>
      <Button>
        <PushpinOutlined />
      </Button>
    </div>
  );
};
export default DescriptionNav;
