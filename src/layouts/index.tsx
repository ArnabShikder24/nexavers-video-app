import React from 'react';
import { Layout, theme } from 'antd';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const headerHeight = 65;
const { Content, Sider } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
    return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <Layout>
        <Sider className="px-2 py-3" width={210} style={{ height: `calc(100vh - ${headerHeight}px)`, background: colorBgContainer, overflowY: 'auto', boxShadow: '0px 0px 4px 0px rgba(2, 105, 208, 1)' }}>
          <Sidebar />
        </Sider>
        <Layout style={{ height: `calc(100vh - ${headerHeight}px)`, padding: '0 24px 24px', background: colorBgContainer, overflowY: 'auto',}}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    );
};

export default MainLayout;