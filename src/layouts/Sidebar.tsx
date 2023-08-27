import React from 'react';
import { HomeOutlined, TranslationOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items2: MenuProps['items'] = [
    { icon: <HomeOutlined />, label: "Home" },
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

const Sidebar : React.FC = () => {
    return (
        <div>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ borderRight: 0 }}
            items={items2}
        />
        </div>
    );
};

export default Sidebar;