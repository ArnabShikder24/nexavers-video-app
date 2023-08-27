import React from 'react';
import logo from '../assets/icons/logo.svg';
import user from '../assets/icons/Mask group.png';
import { Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

const NavBar : React.FC = () => {
    return (
        <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', padding: '0 25px', boxShadow: 'rgba(0, 0, 0, 0.1) 5px 6px 7px 0px', zIndex: '999999'}}>
        <img className="cursor-pointer" src={logo} alt="Logo" />
        <div className="flex items-center gap-4 border-l pl-4">
          <img src={user} alt="user" />
          <p>Shreya</p>
          <DownOutlined className="cursor-pointer" />
        </div>
      </Header>
    );
};

export default NavBar;