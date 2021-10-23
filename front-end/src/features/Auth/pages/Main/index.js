import React from "react";
import { Tabs, Row, Col, Image } from "antd";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import logo from "static/images/download.png";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from 'features/Auth/authSlice'
const { TabPane } = Tabs;
const Index = () => {
  const dispatch = useDispatch()
  const currentTab = useSelector((state) => state.auth.currentTab);
  return (
    <>
      <Row style={{ paddingTop: 80 }}>
        <Col span={8} offset={8}>
          <p style={{ textAlign: "center" }}>
            <Image width={200} src={logo} preview={false} />
          </p>
          <Tabs activeKey={currentTab} centered  onTabClick={(e) => dispatch(setCurrentTab(e))}>
            <TabPane tab="Log In" key={"1"}>
              <SignIn />
            </TabPane>
            <TabPane tab="Sign Up" key={"2"}>
              <SignUp />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default Index;
