import React, { useState } from 'react';
import logo from '../assets/icons/logo.svg';
import user from '../assets/icons/Mask group.png';
import { Layout } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined, DollarOutlined } from '@ant-design/icons';
import userLogo from '../assets/images/Mask group.png';

const { Header } = Layout;

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', padding: '0 25px', boxShadow: 'rgba(0, 0, 0, 0.1) 5px 6px 7px 0px', zIndex: '999999'}}>
        <img className="cursor-pointer" src={logo} alt="Logo" />
        <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-4 border-l pl-4 mr-5 cursor-pointer">
          <img src={user} alt="user" />
          <p>Shreyu</p>
          <DownOutlined />
        </div>
        {
          isOpen && 
          (
            <div onMouseLeave={() => setIsOpen(false)} className='absolute top-[70px] right-7 p-4 w-[240px] bg-white rounded' style={{boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 30px 0px'}}>
              <div className='text-center'>
                <img className='inline-block' src={userLogo} alt="user_logo" />
                <h1 className='text-lg font-semibold'>Shreyu</h1>
                <p className='text-sm text-gray-500'>Shreyurajput22@gmail.com</p>
              </div>
              <div className='mt-4 text-[#5E637E]'>
                <div className='flex gap-3 items-center cursor-pointer'>
                  <UserOutlined className="text-xl" />
                  <p className='text-base'>My Profile</p>
                </div>
                <div className='flex gap-3 items-center mt-2 cursor-pointer'>
                  <DollarOutlined className="text-xl" />
                  <p className='text-base'>Payments & charges</p>
                </div>
                <div className='flex gap-3 items-center mt-2 cursor-pointer'>
                  <LogoutOutlined className="text-xl" />
                  <p className='text-base'>Logout</p>
                </div>
              </div>
            </div>
          )
        }
      </Header>
    );
};

export default NavBar;