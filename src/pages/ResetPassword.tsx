
import { useState, useEffect } from 'react';
import unsplash from '../assets/Rectangle 326 (3) copy.png';
const Password = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | ResetPassword'; // Set your dynamic title here
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

          <div className="md:w-[600px] md:mx-auto m-5 bg-white rounded-2xl ">
            {/* <RxCross1 className="text-xl float-right m-5 text-[#DCDCDC]" /> */}
            <div className=" w-[80%] mx-auto text-center space-y-6 py-12">

              <h1 className="md:text-2xl text-lg font-bold text-[#0E9F6E]">Reset password</h1><br />
              <button className="w-full py-4 text-center text-white bg-[#0E9F6E] md:text-lg text-xs rounded-md">Send reset password email</button>
              <div className="flex items-center">
                <hr className="w-full border border-[#DCDCDC]" />
                <p className="px-5">  OR</p>
                <hr className="w-full border border-[#DCDCDC]" />
              </div>
              <input type="password" placeholder="New Password" className="w-full text-xs  focus:border-[#0E9F6E] outline-none border-2 border-[#DCDCDC] rounded-md p-3  " />
              <input type="password" placeholder="Confirm Password" className="w-full  text-xs focus:border-[#0E9F6E] outline-none border-2 border-[#DCDCDC] rounded-md p-3 " />
              <button className="md:w-44 w-32 py-3 text-center text-white bg-[#0E9F6E] rounded-md">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;

