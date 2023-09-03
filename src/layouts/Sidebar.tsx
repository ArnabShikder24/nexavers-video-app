import React, { useState } from "react";
import {
  HomeFilled,
  TranslationOutlined,
  BellFilled,
  QuestionCircleFilled,
  PlusOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Modal } from "antd";
import flim from '../assets/icons/Group 36099.svg';

const items1: MenuProps["items"] = [
  { icon: <HomeFilled />, label: "Home" },
  { icon: <TranslationOutlined />, label: "Translated files" },
].map((item, index) => {
  return {
    key: `sub${index + 1}`,
    icon: item.icon,
    label: item.label,
  };
});
const items2: MenuProps["items"] = [
  { icon: <BellFilled />, label: "Notification" },
  { icon: <QuestionCircleFilled />, label: "Help ?" },
].map((item, index) => {
  return {
    key: `sub${index + 1}`,
    icon: item.icon,
    label: item.label,
  };
});

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    setSelectedFile(file || null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 px-10 py-2 rounded text-white bg-gradient-to-r from-[#022797] to-[#0266CA]"
          >
            <PlusOutlined />
            <span className="text-sm">Upload New </span>
          </button>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ borderRight: 0 }}
          items={items1}
        />
      </div>
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ borderRight: 0 }}
          items={items2}
        />
      </div>
      {/* Modal section */}
      <Modal
        title={
          <div className="flex items-center justify-center gap-3">
            <CloudUploadOutlined className="text-3xl" />
            <h1 className="text-semibold text-lg text-center">Upload video</h1>
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <p className="text-[#587393] mb-2">1. Upload files</p>
        <div
          className="bg-[#F1F4F9] border-dashed border-2 border-[#AFB9C8] p-4 rounded-lg text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <div>
              <p className="mb-2">Selected File: {selectedFile.name}</p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => setSelectedFile(null)}
              >
                Remove File
              </button>
            </div>
          ) : (
            <div className="mb-4">
              <img className="w-[77px] inline-block mb-2" src={flim} alt="flim icon" />
              <p>Choose a video , audio file from your device</p>
              <p className="mb-6">or you can drop file here</p>
              <input
                type="file"
                className="hidden"
                id="fileInput"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="fileInput"
                className="text-white px-4 py-2 rounded cursor-pointer bg-gradient-to-r from-[#022797] to-[#0266CA]"
              >
                Browse
              </label>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
