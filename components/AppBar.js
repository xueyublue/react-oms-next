import React from "react";
import { Layout, Row, Col, Button, Dropdown, Menu, Modal } from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
const { Header } = Layout;
import Router from "next/router";
import { useState } from "react";
import * as Constants from "../util/constants";

const AppBar = ({ pageName }) => {
  const [logoutModalVisiable, setLogoutModalVisiable] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "profile") Router.push(Constants.ROUTE_PROFILE);
    else if (e.key === "settings") Router.push(Constants.ROUTE_SETTINGS);
    else if (e.key === "logout") setLogoutModalVisiable(true);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ paddingLeft: 16 }}>
      <Row justify="start">
        <Col span={12}>
          <h3>{pageName}</h3>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Dropdown overlay={menu}>
            <Button type="text" icon={<UserOutlined />}>
              DMS IS Team DEV
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Modal
        title="Confirmation"
        visible={logoutModalVisiable}
        onOk={() => {
          setLogoutModalVisiable(false);
          Router.push(Constants.ROUTE_LOGIN);
        }}
        onCancel={() => setLogoutModalVisiable(false)}
        okText="Yes"
        cancelText="No"
      >
        Are you sure to logout?
      </Modal>
    </Header>
  );
};

export default AppBar;
