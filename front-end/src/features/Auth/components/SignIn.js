import React from "react";
import { Form, Input, Button, Checkbox, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";

const SignIn = () => {
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={null}
      >
        <p style={{ textAlign: "center" }}>
          <Button type="primary" size="large" icon={<GooglePlusOutlined />}>
            LOGIN WITH GOOGLE
          </Button>
        </p>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="yours@example.com"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="yout password"
          />
        </Form.Item>
        <Form.Item>
          <a href="">Don't remember your password?</a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
