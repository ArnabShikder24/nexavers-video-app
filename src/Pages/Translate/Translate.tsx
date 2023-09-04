import React from "react";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { Menu, MenuProps } from "antd";
import {
  DownOutlined,
  HomeFilled,
  TranslationOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

const headerHeight = 64; // You need to define headerHeight and colorBgContainer variables

const items1: MenuProps["items"] = [
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
  { icon: <TranslationOutlined />, label: "" },
  { icon: <HomeFilled />, label: "" },
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
        className="border"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          padding: "0 25px",
          zIndex: "999999",
        }}
      >
        <div className="flex items-center gap-4 border-l pl-4 mr-5 cursor-pointer">
          <p>Shreyu</p>
          <DownOutlined />
        </div>
      </Header>

      <Layout>
        <div className="flex">
          <Sider
            width={80}
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              background: "#fff",
            }}
          >
            <div className="border h-full overflow-y-auto">
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
              className="border h-full overflow-y-auto"
              style={{
                width: "200px",
                background: "#fff",
                padding: "8px",
              }}
            >
                          Second Sidebar
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatum voluptas optio architecto quos maiores et quia. Sunt, perspiciatis dolores nesciunt molestiae harum laboriosam doloribus beatae sed quaerat? Unde nam illum labore architecto qui! Id dolorem voluptatibus inventore architecto officia voluptas omnis, voluptatem accusantium molestiae. Ea perspiciatis aliquam voluptas atque explicabo quaerat nesciunt, nobis, aut, amet dicta eos repudiandae cupiditate tempora autem sequi quos at sit delectus laudantium quae pariatur omnis dignissimos! Omnis doloremque quod ducimus assumenda ratione ut tempore dolor ipsam officia impedit vitae debitis sapiente cupiditate suscipit eos voluptates consequuntur, eius modi harum recusandae? Quod neque deserunt vero.
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatum voluptas optio architecto quos maiores et quia. Sunt, perspiciatis dolores nesciunt molestiae harum laboriosam doloribus beatae sed quaerat? Unde nam illum labore architecto qui! Id dolorem voluptatibus inventore architecto officia voluptas omnis, voluptatem accusantium molestiae. Ea perspiciatis aliquam voluptas atque explicabo quaerat nesciunt, nobis, aut, amet dicta eos repudiandae cupiditate tempora autem sequi quos at sit delectus laudantium quae pariatur omnis dignissimos! Omnis doloremque quod ducimus assumenda ratione ut tempore dolor ipsam officia impedit vitae debitis sapiente cupiditate suscipit eos voluptates consequuntur, eius modi harum recusandae? Quod neque deserunt vero.
            </div>
          </Sider>
        </div>
        <Layout
          style={{
            height: `calc(100vh - ${headerHeight}px)`,
            background: "#fff",
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
