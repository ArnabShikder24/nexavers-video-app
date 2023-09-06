import React from "react";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { Menu, MenuProps } from "antd";
import {
  TranslationOutlined,
} from "@ant-design/icons";
import iconLogo from '../../assets/icons/iconLogo.svg';
import TranslateContainer from "./TranslateContainer";

const { Content, Sider } = Layout;

const headerHeight = 64; 

const items1: MenuProps["items"] = [
  { icon: <TranslationOutlined />, label: "" },
].map((item, index) => {
  return {
    key: `sub${index + 1}`,
    icon: item.icon,
    label: item.label,
  };
});

const SecondSidebar: React.FC = () => {
  return (
    <div>
      <div className="border-b">
        <div className="flex items-center justify-between my-3 px-3">
          <p className="font-semibold">From</p>
          <select className="border-0 w-24 h-8" name="" id="">
            <option value="English">English</option>
            </select>
        </div>
        <div className="flex items-center justify-between mb-5 px-3">
          <p className="font-semibold">To</p>
          <select className="border-0 bg-[#0269D0] text-white rounded w-24 h-8" name="" id="">
            <option value="Hindi">Hindi</option>
            </select>
        </div>
      </div>
      <div className="border-b mt-2">
        <p className="font-semibold px-3">Choose voices</p>
        <p className="text-[10px] px-3">2 Actors detected </p>
        <div className="flex items-center justify-between my-5 px-4">
          <p className="font-semibold">1</p>
          <select className="border-0 bg-[#0269D0] text-white rounded w-28 h-8" name="" id="">
            <option value="Choose voice">Choose voice</option>
            </select>
        </div>
        <div className="flex items-center justify-between mb-8 px-4">
          <p className="font-semibold">2</p>
          <select className="border-0 bg-[#0269D0] text-white rounded w-28 h-8" name="" id="">
            <option value="Choose voice">Choose voice</option>
            </select>
        </div>
        <div className="text-center mb-4">
          <button className="px-6 py-1 rounded text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
            <span className="text-sm">Apply voices</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Translate: React.FC = () => {
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
        <div className="flex items-center border-r">
          <div className="w-[70px] h-full border-r">
            <img src={iconLogo} className="w-full h-full p-4" alt="logo" />
          </div>
          <div className="w-[199px] h-full text-center">
            <p className="font-semibold text-xl">Translate</p>
          </div>
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
                padding: "8px 0",
              }}
            >
              <SecondSidebar />
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
            <TranslateContainer />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Translate;
