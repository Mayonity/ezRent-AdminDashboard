// components/Password.js
import { useState, useEffect } from 'react';
import unsplash from '../assets/Rectangle 326 (3) copy.png';

const Otp = () => {
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        document.title = 'Ez-Rent-Admin | Otp'; // Set your dynamic title here
      }, []);
    useEffect(() => {
        setShowContent(true);
    }, []);
   
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

