import React from "react";
import Link from "next/link";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  ColumnHeightOutlined,
  ProjectOutlined,
  OneToOneOutlined,
  LineChartOutlined,
  DatabaseOutlined,
  IdcardOutlined,
  TeamOutlined,
  ApartmentOutlined,
  SolutionOutlined,
  DashboardOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  MacCommandFilled,
  TableOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const { SubMenu } = Menu;
const { Sider } = Layout;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState("dashboard");
  const [openKeys, setOpenKeys] = useState(null);
  const { asPath } = useRouter();
  if (asPath !== selectedKeys) setSelectedKeys(asPath);
  if (!openKeys && asPath) {
    const lastIndex = asPath.lastIndexOf("/");
    if(lastIndex !== 0)
      setOpenKeys(asPath.substr(0, asPath.lastIndexOf("/")));
  }
  console.log(`selectedKeys: ${selectedKeys}, asPath: ${asPath}, openKeys: ${openKeys}`);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
      width={240}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKeys]}
        defaultSelectedKeys={["dashboard"]}
        openKeys={[openKeys]}
        onClick={(e) => {
          setSelectedKeys(e.key);
        }}
        onOpenChange={(oKeys) => {
          if (oKeys.length >= 1) {
            setOpenKeys(oKeys[oKeys.length - 1]);
          } else {
            setOpenKeys("dashboard");
          }
        }}
      >
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>

        <SubMenu key="/instance" icon={<UnorderedListOutlined />} title="Instance">
          <Menu.Item key="/instance/details" icon={<UnorderedListOutlined />}>
            <Link href="/instance/details">Details</Link>
          </Menu.Item>
          <Menu.Item key="/instance/sga" icon={<PieChartOutlined />}>
            <Link href="/instance/sga">SGA</Link>
          </Menu.Item>
          <Menu.Item key="instance-banners" icon={<OneToOneOutlined />}>
            Banners
          </Menu.Item>
          <Menu.Item key="instance-resource-limit" icon={<ColumnHeightOutlined />}>
            Resource Limit
          </Menu.Item>
          <Menu.Item key="instance-oracle-param" icon={<ProjectOutlined />}>
            Parameters
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/performance" icon={<LineChartOutlined />} title="Performance">
          <Menu.Item key="performance-session" icon={<LineChartOutlined />}>
            <Link href="/session/session">Session</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/space" icon={<DatabaseOutlined />} title="Space">
          <Menu.Item key="space-tablespace" icon={<MacCommandFilled />}>
            Tablespace
          </Menu.Item>
          <Menu.Item key="space-top-tables" icon={<OrderedListOutlined />}>
            Top Tables
          </Menu.Item>
          <Menu.Item key="space-top-indexes" icon={<OrderedListOutlined />}>
            Top Indexes
          </Menu.Item>
          <Menu.Item key="space-table-records" icon={<TableOutlined />}>
            Table Records
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/session" icon={<ApartmentOutlined />}>
          <Link href="/session">Session</Link>
        </Menu.Item>

        <SubMenu key="user" icon={<UserOutlined />} title="User">
          <Menu.Item key="user-profiles" icon={<SolutionOutlined />}>
            Profiles
          </Menu.Item>
          <Menu.Item key="user-roles" icon={<TeamOutlined />}>
            Roles
          </Menu.Item>
          <Menu.Item key="user-roles-priv" icon={<IdcardOutlined />}>
            Role Privileges
          </Menu.Item>
          <Menu.Item key="user-users" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="user-user-priv" icon={<IdcardOutlined />}>
            User Privileges
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
