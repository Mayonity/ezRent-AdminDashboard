import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import unsplash from '../assets/Rectangle 326 (2) copy.png';

const Form = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

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

  // Function to handle the login and navigation
  const handleLogin = () => {
    // You can add your login logic here if needed.
    // For example, you can send a request to your server for authentication.

    // After a successful login, navigate to the Dashboard page.
    navigate('/Dashboard');
  };

  return (
    <div className={`flex items-center  justify-center min-h-screen bg-${themes.primary}`}>
  <div className='flex items-center rounded-xl justify-center bg-white shadow w-200'>
  <div className={`flex   transform ${showContent ? 'scale-100' : 'scale-75'} transition-transform ease-in-out duration-500`}>
      {showContent && (
        <img
          src={unsplash}
          alt="Description of the image"
          width={440}
          className="hidden lg:block "
        />
      )}
    </div>
    <div className={` new form  rounded-xl    flex flex-col justify-center px-6 py-12 lg:px-8 bg-${themes.white} ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`} style={{ height: '600px' }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={`mt-10 text-4xl font-bold font leading-9 one tracking-tight new text-${themes.black} ease-in-out ml-3 duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>Login</h2>
        </div>
        <div className={`mt-10 pr-30 sm:mx-auto sm:w-full sm:max-w-sm`}>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className={`block one text-sm ml-3 new font-bold leading-6 text-gray-2 tracking-wider ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>Email</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`bg-[#F1F5F9] text-black outline-none one new ml-3 p-10 block w-90  border border-body border-2 rounded-xl border-1 p-3  opacity-30 shadow-inner placeholder-gray-400 focus:ring-primary sm:text-sm sm:leading-6`}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block one text-sm new font-bold ml-3 leading-6 text-gray-2 tracking-wider  ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>Password</label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`bg-[#F1F5F9] text-black one new ml-3 outline-none p-10 block w-90  opacity-30 border border-body border-2 rounded-xl border-0 p-3 shadow-inner placeholder-gray-400 focus:ring-primary sm:text-sm sm:leading-6`}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleLogin}
                className={`text-white tracking-wider ml-3 one new flex w-90 justify-center rounded-md bg-meta-3 px-7 py-4 text-sm font-semibold leading-6 text-${themes.white} shadow-sm hover-bg-${themes.primary} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                Login
              </button>
            </div>
          </form>
          <br />
          <Link to={`password`} className={`mt-10 text-sm one  ml-3 text-meta-3 tracking-wider bold`}>Forgot password?</Link>
        </div>
      </div>
  </div>
    </div>
  );
};

export default Form;
