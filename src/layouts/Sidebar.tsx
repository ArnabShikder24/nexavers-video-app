import React, { useState } from 'react';
import { HomeFilled, TranslationOutlined, BellFilled, QuestionCircleFilled, PlusOutlined, CloudUploadOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Modal } from 'antd';

const items1: MenuProps['items'] = [
    { icon: <HomeFilled />, label: "Home" },
    { icon: <TranslationOutlined />, label: "Translated files" },
  ].map(
    (item, index) => {
      return {
        key: `sub${index + 1}`,
        icon: item.icon,
        label: item.label,
      };
    },
  );
const items2: MenuProps['items'] = [
    { icon: <BellFilled />, label: "Notification" },
    { icon: <QuestionCircleFilled />, label: "Help ?" },
  ].map(
    (item, index) => {
      return {
        key: `sub${index + 1}`,
        icon: item.icon,
        label: item.label
      };
    },
  );

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div className='flex flex-col h-full justify-between'>
        <div>
          <div className="flex justify-center">
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-3 px-10 py-2 rounded text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                <PlusOutlined />
                <span className="text-sm">Upload New </span>
            </button>
          </div>
          <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ borderRight: 0 }}
              items={items1}
          />
        </div>
        <div>
          <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ borderRight: 0 }}
              items={items2}
          />
        </div>
        <Modal
          title={<div className='flex items-center justify-center gap-5'><CloudUploadOutlined className='text-3xl' /><h1 className="text-semibold text-lg text-center">Upload video</h1></div>}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </div>
    );
};

export default Sidebar;