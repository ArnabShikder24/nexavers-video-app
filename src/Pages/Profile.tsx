import React from 'react';
import { EditOutlined } from '@ant-design/icons';

const Profile = () => {
    return (
        <div className='w-[900px] mx-auto'>
            <h1 className='text-xl font-semibold'>Profile</h1>
            <p className='text-black mt-2 pb-4'>This information will be displayed publicly so be careful what you share.</p>
            <hr />
            <div className='flex items-center justify-between py-5'>
                <p className='text-[#838383] text-base font-semibold'>Name</p>
                <p>Arnab Shikder</p>
                <div className='flex items-center gap-3 text-sm text-[#004BE9] cursor-pointer'>
                    <EditOutlined className='text-sm' />
                    <p>Edit</p>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between py-5'>
                <p className='text-[#838383] text-base font-semibold'>Phone no.</p>
                <p>64363463634</p>
                <div className='flex items-center gap-3 text-sm text-[#004BE9] cursor-pointer'>
                    <EditOutlined className='text-sm' />
                    <p>Edit</p>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between py-5'>
                <p className='text-[#838383] text-base font-semibold'>country code</p>
                <p>43</p>
                <div className='flex items-center gap-3 text-sm text-[#004BE9] cursor-pointer'>
                    <EditOutlined className='text-sm' />
                    <p>Edit</p>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between py-5'>
                <p className='text-[#838383] text-base font-semibold'>Email</p>
                <p>arnab.shikder@only4values.com</p>
                <div className='flex items-center gap-3 text-sm text-[#b4bdd0] cursor-not-allowed'>
                    <EditOutlined className='text-sm' />
                    <p>Edit</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Profile;