import React from 'react';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import glogo from '../assets/SVG/icons8-google.svg';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Login: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="rounded-lg text-center border-4 border-[#0269D0] px-28 py-7">
                <h1 className='text-2xl font-semibold'>Login</h1>
                <div className="flex justify-center mt-6 mb-4">
                    <button className="flex items-center gap-3 px-10 py-2 rounded border">
                        <img className='w-5' src={glogo} alt="google icon" />
                        <span className="text-sm">Login with Google</span>
                    </button>
                </div>
                <p className='text-gray-500 text-base'>OR</p>
                <div className='py-4'>
                    <Input placeholder="E-mail Address" type='email' />
                    <Input className='mt-5' placeholder="Password" type='password' />
                    <div className='flex items-center justify-between mt-4'>
                        <Checkbox className='text-sm' onChange={onChange}>Remember me</Checkbox>
                        <p className='text-xs cursor-pointer text-red-600'>Forget password?</p>    
                    </div>    
                </div>
                <div className="flex justify-center mt-6">
                    <button className="flex items-center gap-3 px-14 py-3 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                    <span className="text-lg">Login</span>
                    </button>
                </div>
                <p className='text-sm mt-3'>Don’t have an account?   <span className='pl-4 text-[#004BE9] cursor-pointer'>signup here</span></p>
            </div>
        </div>
    );
};

export default Login;