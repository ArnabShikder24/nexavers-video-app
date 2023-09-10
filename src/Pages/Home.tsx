import React from 'react';
import { VideoCameraFilled } from '@ant-design/icons';
import qus from '../assets/SVG/userQus.svg';

const Home: React.FC = () => {
    return (
        <div className='w-[1000px] mx-auto h-full'>
            <div className='flex items-center h-full'>
                <div className="flex justify-between">
                    {/* <div className="rounded-lg text-center border-4 border-[#0269D0] px-32 py-12">
                    <img src={studio} alt="studio" />
                    <p>Choose a video , audio file from your device</p>
                    <div className="flex justify-center mt-6">
                        <button className="flex items-center gap-3 px-14 py-3 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                        <CloudUploadOutlined className="text-2xl" />
                        <span className="text-lg">Upload video</span>
                        </button>
                    </div>
                    </div> */}
                    <div className='text-center border-r-4 border-[#26243E80] h-[500px] pr-[70px]'>
                        <h1 className='text-xl font-semibold text-[#0260C8] mb-4 mt-10'>Welcome to sync!</h1>
                        <h1 className='text-3xl font-semibold text-[#0247B3] mb-3'>What would you like to do? </h1>
                        <img className='inline-block' src={qus} alt="studio" />
                        <div className="flex justify-center mt-6">
                            <button className="flex items-center gap-3 px-14 py-2 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                            <VideoCameraFilled className="text-xl" />
                            <span className="text-lg">video Language Translater</span>
                            </button>
                        </div>
                    </div>
                    <div className='text-center w-[580px] pt-14'>
                            <div className='flex items-center'>
                                <div className='space-y-4 text-base w-[140px]'>
                                    <h1 className='text-[#F02190]'>step 1</h1>
                                    <h1 className='text-[#004BE9]'>step 2</h1>
                                    <h1 className='text-[#E8AC25]'>step 3</h1>
                                    <h1 className='text-[#08AA43]'>step 4</h1>
                                </div>

                                <div>
                                    <h1 className='text-xl font-semibold text-[#0260C8] mb-4'>Don’t know how to do?</h1>   
                                    <p className='text-base text-black mb-10'>Don’t worry here is the flow explore It.</p>
                                    <div className='border-2 border-[#F02190] rounded-xl w-[430px] h-[250px]'>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;