import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';
import studio from '../assets/icons/Group 36099.svg';

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="rounded-lg text-center border-4 border-[#0269D0] px-32 py-12">
            <img src={studio} alt="studio" />
            <p>Choose a video , audio file from your device</p>
            <div className="flex justify-center mt-6">
                <button className="flex items-center gap-3 px-14 py-3 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                <CloudUploadOutlined className="text-2xl" />
                <span className="text-lg">Upload video</span>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Home;