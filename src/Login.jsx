import React from "react";
import Logo from "./assets/img_illustration.svg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, ConfigProvider, Typography, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    axios
      .post(`https://api-deed-balancer.netlify.app/.netlify/functions/api/user/login`, {
        username: `${values.username}`,
        password: `${values.password}`,
      })
      .then((response) => {
        Cookies.set("access-token", `${response.data.token}`);
        messageApi.open({
          type: "success",
          content: `${response.data.message}`,
        });
        setTimeout(() => {
          window.location.reload();
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
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img src={Logo} />
        <Typography.Title>Welcome Back!</Typography.Title>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </ConfigProvider>
        </Form.Item>
        Or <a href="./register">register now!</a>
      </Form>
    </div>
  );
};
export default Login;
