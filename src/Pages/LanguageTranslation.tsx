import React, { useState } from 'react';
import { Input, TreeSelect } from 'antd';
import { DownOutlined, CaretDownFilled, RightOutlined } from '@ant-design/icons';

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
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='relative'>
            <div className={`min-h-min p-4 border border-[#CCCCCC] rounded mt-12 overflow-auto ${open && 'pt-8'}`} style={{maxHeight: '340px'}}>
                <div>
                    <button onClick={() => setOpen(!open)} className="cursor-pointer flex items-center justify-between px-4 min-w-[200px] py-2 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA] absolute top-[-22px]">
                        <span className="text-lg">Segment 1</span>
                        {
                            open ? 
                                <DownOutlined className="text-xl" /> :
                                <RightOutlined className="text-xl"/>
                        }
                    </button>
                    {!open && <p onClick={() => setOpen(true)} className='flex justify-end w-full text-base font-semibold cursor-pointer'>View details</p>}
                </div>
                {
                    open && 
                    (
                    <div className="flex">
                        <div className="w-[30%]">
                            <div className='bg-gray-400 h-72'></div>
                        </div>
                        <div className="w-[70%] pl-2">
                            <div>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <CaretDownFilled className='text-lg mb-1' />
                                    <p>Sentence Version 0  :</p>
                                </div>
                                <div className='p-2 border border-[#CCCCCC] rounded'>
                                    <div className='flex items-center justify-between'>
                                        <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Not silence sentence</p>
                                        <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Active version</p>
                                    </div>
                                    <p className='mt-6'><span className='font-semibold'>Text:</span> Speaker 1 (female): Hii there, how are you?</p>
                                    <div className='flex items-center gap-3'>
                                        <p className='w-[135px]'>Edit text :</p>
                                        <Input className='w-full' placeholder="" />
                                        <p className="w-[260px] border border-[#0269D0] px-2 py-1 cursor-pointer rounded">Add new version</p>
                                        <p className="w-[290px] border border-[#0269D0] px-2 py-1 cursor-pointer rounded">Generate next step</p>
                                    </div>
                                    <audio controls className="mt-4 border-blue-500 border-2 bg-transparent p-2 rounded">
                                        <source src="" type="" />
                                    </audio>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <CaretDownFilled className='text-lg mb-1' />
                                    <p>Text language translation Version 0 :</p>
                                </div>
                                <div className='p-2 border border-[#CCCCCC] rounded'>
                                    <div className='flex items-center justify-between'>
                                        <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Not silence sentence</p>
                                        <p className="border border-[#08AA43] px-2 py-1 cursor-pointer rounded">Active version</p>
                                    </div>
                                    <p className='mt-6'><span className='font-semibold'>Text:</span> Speaker 1 (female): Hii there, how are you?</p>
                                    <div className='flex items-center gap-3'>
                                        <p className='w-[135px]'>Edit text :</p>
                                        <Input className='w-full' placeholder="" />
                                        <p className="w-[260px] border border-[#0269D0] px-2 py-1 cursor-pointer rounded">Add new version</p>
                                        <p className="w-[290px] border border-[#0269D0] px-2 py-1 cursor-pointer rounded">Generate next step</p>
                                    </div>
                                    <audio controls className="mt-4 border-blue-500 border-2 bg-transparent p-2 rounded">
                                        <source src="" type="" />
                                    </audio>
                                </div>
                            </div>
                            <div className='pl-5'>
                                <p className='mt-6'><span className='font-semibold'>Original Text:</span> <span className='text-gray-500 text-sm'>Speaker 1 (female) :</span> <span className='text-xs'>0:00/01:59</span> Hii there, how are you?</p>
                                <p><span className='font-semibold mr-2'>Edited Text : </span>Null</p>
                            </div>
                        </div>
                    </div>
                    )
                }
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
        <div className='pb-10'>
            <h1 className='text-base font-semibold'>Original video</h1>
            <div className='w-[500px] h-72 bg-slate-200 mt-3' />
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
            <div className='w-[1100px]'>
                <div className='flex items-center justify-between p-4 text-white h-10 mt-3 border border-[#99999980]' style={gradientStyle}>
                    <h1 className='text-base'>Show All Segments</h1>
                    <h1 className='text-base'>Total Segments : 50</h1>
                </div>
                {/* Segment */}
                <Segment />
                <Segment />
                <Segment />
                <Segment />

                <div className='mt-10 flex justify-center'>
                    <button className="border border-[#0269D0] text-[#0269D0] px-24 py-3 cursor-pointer rounded">Generate video</button>
                </div>
            </div>
        </div>
    );
};

export default LanguageTranslation;