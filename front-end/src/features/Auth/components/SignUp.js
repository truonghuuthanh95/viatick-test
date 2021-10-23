import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Image,
  InputNumber,
  Select,
} from "antd";
import userAPI from "apis/userAPI";
import membershipAPI from "apis/membershipAPI";
import { useDispatch } from "react-redux";
import { setCurrentTab, setEmailRegisted } from "features/Auth/authSlice";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SignUp = () => {
  const dispatch = useDispatch();

  const [membershipTypes, setMembershipTypes] = useState([]);
  const onFinish = async (values) => {
    // console.log(values);
    // const signUpRes = await userAPI.signUp(values);
    // console.log(signUpRes);
    dispatch(setCurrentTab("1"));
    dispatch(setEmailRegisted("truobnghuuthanh@gmail.com"))
  };

  useEffect(() => {
    const getMembershipTypes = async () => {
      const membershipTypeRes = await membershipAPI.get();
      setMembershipTypes(membershipTypeRes.results);
    };

    getMembershipTypes();
  }, []);
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{ membershipType: 1 }}
    >
      <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"email"}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="membershipType" label="Membership Type">
        <Select style={{ width: 120 }} onChange={null}>
          {membershipTypes.map((member) => (
            <Option value={member.id} key={member.id}>
              {member.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name={"company"}
        label="Company"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={"designation"} label="Desgination">
        <Input />
      </Form.Item>
      <Form.Item
        name={"password"}
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
