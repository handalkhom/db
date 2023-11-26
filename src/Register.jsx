import React from "react";
import Logo from "./assets/DBLogo.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, ConfigProvider } from "antd";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="appBg">
      <Form
        name="normal_register"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img src={Logo} />
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm-password"
          rules={[
            {
              required: true,
              message: "Please confirm your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#ffe6d4",

                // Alias Token
                colorBgContainer: "#000000",
              },
            }}
          >
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Register
              </Button>
            </Space>
          </ConfigProvider>
          Or <a href="/login">Log in</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
