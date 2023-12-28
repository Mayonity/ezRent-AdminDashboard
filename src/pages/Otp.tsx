// components/Password.js
import { useState, useEffect } from 'react';
import unsplash from '../assets/Rectangle 326 (3) copy.png';
import { Link } from 'react-router-dom';

const Otp = () => {
    useEffect(() => {
        document.title = 'Ez-Rent-Admin | Otp'; // Set your dynamic title here
      }, []);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);
    const themes = {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1C2434',
        'black-2': '#010101',
        body: '#64748B',
        bodydark: '#F1F5F9',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        primary: '#3C50E0',
        secondary: '#80CAEE',
        stroke: '#E2E8F0',
        gray: '#EFF4FB',
        graydark: '#333A48',
        'gray-2': '#787878',
        'gray-3': '#FAFAFA',
        whiten: '#F1F5F9',
        whiter: '#F5F7FD',
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
        strokedark: '#2E3A47',
        'form-strokedark': '#3d4d60',
        'form-input': '#1d2a39',
        'meta-1': '#DC3545',
        'meta-2': '#EFF2F7',
        'meta-3': '#10B981',
        'meta-4': '#313D4A',
        'meta-5': '#259AE6',
        'meta-6': '#FFBA00',
        'meta-7': '#FF6766',
        'meta-8': '#F0950C',
        'meta-9': '#E5E7EB',
        success: '#13795B',
        danger: '#D34053',
        warning: '#FFA70B',
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className='flex items-center justify-center rounded-xl shadow'>
                <div className={`rounded-xl  transform ${showContent ? 'scale-100' : 'scale-75'} transition-transform ease-in-out duration-500`} style={{ overflow: 'hidden' }}>
                    <img
                        src={unsplash}
                        alt="Description of the image"
                        width="566"
                        height="auto"
                        className={`rounded-xl hidden lg:block`}
                    />
                </div>
                <div className="flex flex-col justify-center items-center h-screen ">

                    <div className="md:w-[500px] md:mx-auto m-5 bg-white  ">
                        <div className=" w-[70%] mx-auto text-center space-y-6 py-12">

                            <h1 className="md:text-4xl text-lg font-bold text-[#0E9F6E]">OTP Verification</h1><br />

                            <input type="password" placeholder="Enter OTP" className="w-full text-md  focus:border-[#0E9F6E] outline-none border-2 border-[#DCDCDC] rounded-md p-6  text-white" />
                            <button className="w-full py-3 text-center text-white bg-[#0E9F6E] rounded-md">Verify</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;

