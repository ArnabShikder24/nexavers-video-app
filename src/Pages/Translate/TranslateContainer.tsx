import React from 'react';
import { Input } from 'antd';
import { UserOutlined, PlayCircleFilled, DeleteFilled } from '@ant-design/icons';

const headerHeight = 65;
const gradientStyle = {
    background: 'linear-gradient(0deg, #0269D0, #0269D0), linear-gradient(0deg, rgba(153, 153, 153, 0.5), rgba(153, 153, 153, 0.5))',
};

const Segment: React.FC = () => {
    return (
        <div className='relative'>
            <div className="min-h-min p-4 border border-[#CCCCCC] bg-white rounded mt-12">
                <div>
                    <button className="cursor-pointer flex items-center justify-between px-4 min-w-[200px] py-2 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA] absolute top-[-22px]">
                        <span className="text-lg">speaker 1</span>
                        <UserOutlined className="text-xl" />
                    </button>
                    <div className='flex justify-end w-full'>
                        <div className='flex items-center gap-4 justify-between'>
                            <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Not silence sentence</p>
                            <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Active version</p>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='flex items-center justify-between'>
                        <p className='mt-2 flex gap-4 mb-4 text-base'><span className='font-semibold'>Text:</span> Hii there, how are you?</p>
                        <div className='flex items-center gap-4'>
                            <PlayCircleFilled className="text-xl cursor-pointer" />
                            {/* <PauseCircleFilled /> */}
                            <DeleteFilled className="text-xl cursor-pointer"  />
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='w-[80px] font-semibold text-base'>Edit text :</p>
                        <Input className='w-96' placeholder="" />
                        <p className="border border-[#0269D0] px-2 py-1 cursor-pointer rounded">Add new version</p>
                        <p className="border border-[#0269D0] px-2 py-1 cursor-pointer rounded">Generate next step</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const TranslateContainer = () => {
    return (
        <div className='flex w-full' style={{ height: `calc(100vh - ${headerHeight}px)` }}>
            <div className='w-[70%] border-r px-4 py-3'>
                <div className='flex items-center justify-between p-4 text-white h-10 border border-[#99999980] rounded' style={gradientStyle}>
                    <h1 className='text-base'>Show All Segments</h1>
                    <h1 className='text-base'>Total Segments : 50</h1>
                </div>
                <Segment />
                <Segment />
                <Segment />
            </div>
            <div className='w-[30%] px-4 py-3'>
                Output
            </div>
        </div>
    );
};

export default TranslateContainer;