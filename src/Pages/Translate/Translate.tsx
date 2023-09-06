import React from "react";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { Menu, MenuProps } from "antd";
import {
  TranslationOutlined,
} from "@ant-design/icons";
import iconLogo from '../../assets/icons/iconLogo.svg';

const { Content, Sider } = Layout;

const headerHeight = 64; // You need to define headerHeight and colorBgContainer variables

const items1: MenuProps["items"] = [
  { icon: <TranslationOutlined />, label: "" },
].map((item, index) => {
  return {
    key: `sub${index + 1}`,
    icon: item.icon,
    label: item.label,
  };
});

const Translate = () => {
  const colorBgContainer = "#f0f2f5";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="border-b"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          padding: "0 25px 0 0",
          zIndex: "999999",
        }}
      >
        <div className="w-[70px] h-full border-r">
          <img src={iconLogo} className="w-full h-full p-3" alt="logo" />
        </div>
        <div className="flex items-center gap-5 pl-4 mr-5">
          <p className="text-[#0269D0] font-semibold cursor-pointer text-base">Save</p>
          <p className="text-[#0269D0] font-semibold cursor-pointer text-base">Download</p>
        </div>
      </Header>

      <Layout>
        <div className="flex">
          <Sider
            width={70}
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              background: "#fff",
            }}
          >
            <div className="border-r h-full overflow-y-auto">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              items={items1}
            />
            </div>
          </Sider>
          {/* Add a second sidebar here */}
          <Sider
            width={200}
            style={{
                height: `calc(100vh - ${headerHeight}px)`,
              background: "#fff",
            }}
          >
            <div
              className="border-r h-full overflow-y-auto"
              style={{
                width: "200px",
                background: "#fff",
                padding: "8px",
              }}
            >
              Second Sidebar
            </div>
          </Sider>
        </div>
        <Layout
          style={{
            height: `calc(100vh - ${headerHeight}px)`,
            background: colorBgContainer,
            overflowY: "auto",
          }}
        >
          <Content
            style={{
              padding: '10px 20px',
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <h1 className="">hello world</h1>

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Translate;
