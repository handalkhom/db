import React from "react";
import DescriptionNav from "./DescriptionNav";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Form, Space } from "antd";

const { TextArea } = Input;

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
        <Space>
          <Button>
            <EditOutlined />
          </Button>
          <Button>
            <DeleteOutlined />
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default ActivityDescription;
