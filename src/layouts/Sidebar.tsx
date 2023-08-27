import React from 'react';
import { HomeFilled, TranslationOutlined, BellFilled, QuestionCircleFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items1: MenuProps['items'] = [
    { icon: <HomeFilled />, label: "Home" },
    { icon: <TranslationOutlined />, label: "Translated files" },
  ].map(
    (item, index) => {
      return {
        key: `sub${index + 1}`,
        icon: item.icon,
        label: item.label
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

const Sidebar : React.FC = () => {
    return (
        <div className='flex flex-col h-full justify-between'>
        <div>
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
        </div>
    );
};

export default Sidebar;