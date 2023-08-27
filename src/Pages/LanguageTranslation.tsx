import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import { DownOutlined, CaretDownFilled } from '@ant-design/icons';

const treeData = [
    {
      value: 'Hindi',
      title: 'Hindi',
    },
    {
      value: 'English',
      title: 'English',
    },
    {
      value: 'Bangla',
      title: 'Bangla',
    },
  ];

const Segment: React.FC = () => {
    return (
        <div className='min-h-min p-4 border border-[#CCCCCC] rounded mt-12'>
            <div className='flex items-center justify-between'>
                <button className="cursor-pointer mt-[-58px] flex items-center justify-between px-4 min-w-[200px] py-2 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                    <span className="text-lg">Segment 1</span>
                    <DownOutlined className="text-xl" />
                </button>
                {/* <p className='text-base font-semibold cursor-pointer'>View details</p> */}
            </div>
            <div className="flex">
                <div className="w-[30%]">
                    <div className='bg-gray-400 h-72'></div>
                </div>
                <div className="w-[70%] pl-2">
                    <div className='flex items-center gap-2'>
                        <CaretDownFilled className='text-lg' />
                        <p>Sentence Version 0  :</p>
                    </div>
                    <div className='p-2 border border-[#CCCCCC] rounded'>
                        <div className='flex items-center justify-between'>
                            <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Not silence sentence</p>
                            <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Active version</p>
                        </div>
                        <p className='mt-6'><span className='font-semibold'>Text:</span> Speaker 1 (female): Hii there, how are you?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LanguageTranslation : React.FC = () => {
    const [value, setValue] = useState<string>();
    const gradientStyle = {
        background: 'linear-gradient(0deg, #0269D0, #0269D0), linear-gradient(0deg, rgba(153, 153, 153, 0.5), rgba(153, 153, 153, 0.5))',
      };

    const onChange = (newValue: string) => {
      setValue(newValue);
    };
    return (
        <div>
            <h1 className='text-base font-semibold'>Original video</h1>
            <div className='w-[400px] h-72 bg-slate-200 mt-3' />
            <h1 className='text-base font-semibold mt-12'>Language  Translation</h1>
            <p className='text-slate-600'>Choose language from select language which you want to translate All audio text in to that language. </p>
            <div className="w-[400px]">
                <TreeSelect
                    className='mt-4 w-full'
                    showSearch
                    style={{ width: '100%' }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Select language"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}
                    treeData={treeData}
                />
            </div>
            <h1 className='text-base font-semibold mt-12'>Segments Transcription</h1>
            <div className='w-[1000px]'>
                <div className='flex items-center justify-between p-4 text-white h-10 mt-3 border border-[#99999980]' style={gradientStyle}>
                    <h1 className='text-base'>Show All Segments</h1>
                    <h1 className='text-base'>Total Segments : 50</h1>
                </div>
                {/* Segment */}
                <Segment />

            </div>
        </div>
    );
};

export default LanguageTranslation;