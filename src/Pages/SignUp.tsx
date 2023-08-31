import React from 'react';
import { Input } from 'antd';
import glogo from '../assets/SVG/icons8-google.svg';


const SignUp: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="rounded-lg text-center border-4 border-[#0269D0] px-28 py-7">
                <h1 className='text-2xl font-semibold'>Sign up</h1>
                <div className="flex justify-center mt-6 mb-4">
                    <button className="flex items-center gap-3 px-10 py-2 rounded border">
                        <img className='w-5' src={glogo} alt="google icon" />
                        <span className="text-sm">sign up with Google</span>
                    </button>
                </div>
                <p className='text-gray-500 text-base'>OR</p>
                <div className='py-4'>
                    <Input placeholder="E-mail Address" type='email' />
                    <Input className='mt-5' placeholder="Password" type='password' />   
                </div>
                <div className="flex justify-center mt-5">
                    <button className="flex items-center gap-3 px-14 py-3 rounded font-semibold text-white bg-gradient-to-r from-[#022797] to-[#0266CA]">
                    <span className="text-lg">sign up </span>
                    </button>
                </div>
                <p className='text-sm mt-3'>Already have an account?<span className='pl-4 text-[#004BE9] cursor-pointer'>Login here</span></p>
            </div>
        </div>
    );
};

export default SignUp;