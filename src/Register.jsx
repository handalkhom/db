import React from "react";
import Logo from "./assets/DBLogo.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, ConfigProvider, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`https://api-deed-balancer.netlify.app/.netlify/functions/api/user/register`, {
        nama: `${values.name}`,
        username: `${values.username}`,
        password: `${values.password}`,
      })
      .then((response) => {
        messageApi.open({
          type: "success",
          content: `${response.data.message}`,
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: `${err}`,
        });
      });
  };
  return (
    <div className="appBg">
      {contextHolder}
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
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
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
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm Password" />
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
              <Button type="primary" htmlType="submit" className="register-form-button">
                Register
              </Button>
            </Space>
          </ConfigProvider>
          Or <a href="/">Log in</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
