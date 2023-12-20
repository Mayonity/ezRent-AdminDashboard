// components/Password.js
import React, { useState, useEffect } from 'react';
import unsplash from '../assets/Rectangle 326 (3) copy.png';
import { Outlet, Link } from 'react-router-dom';

const Password = () => {
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
      <div className={`form  rounded-xl flex flex-col justify-center px-6 py-24.5 mb-1 lg:px-8 bg-white ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`sm:mx-auto sm:w-full sm:max-w-sm mt-10 ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold leading-9 tracking-tight font text-gray-800">Forgot Password</h2>
        </div>
        <div className={`mt-10 sm:mx-auto sm:w-full sm:max-w-sm ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <form className="space-y-6 forget" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-2 ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}">Email</label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autoComplete="current-password"
                  required
                  className="bg-bodydark text-black outline-none p-3 border-2 border-gray-2 rounded-xl shadow-inner placeholder-gray-2 focus:ring-primary sm:text-sm sm:leading-6 w-full opacity-60"
                />
              </div>
            </div>
            <div className={`ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
              <button type="submit" className="text-white tracking-wider flex w-full justify-center rounded-md bg-meta-3 px-7 py-4 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Recover Password</button>
              <br />
              <Link to={`/`} className="mt-10 text-sm text-meta-3 tracking-wider bold ">Back to login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Password;

