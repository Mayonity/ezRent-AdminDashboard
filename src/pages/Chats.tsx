import  { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chatmod } from '../components/Chatmod'
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import { OrderModel } from '../components/OrderModel';
import { BlockChat } from '../components/BlockChat'

const Chats = () => {
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Chat'; // Set your dynamic title here
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [showChatmod, setShowChatmod] = useState(false); // Corrected state variable
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isTooltipVisible4, setTooltipVisible4] = useState(false);
  const [isTooltipVisible5, setTooltipVisible5] = useState(false);
  const [isTooltipVisible6, setTooltipVisible6] = useState(false);
  const [isTooltipVisible7, setTooltipVisible7] = useState(false);

  const handleMouseEnter4 = () => {
    setTooltipVisible4(true);
  };

  const handleMouseLeave4 = () => {
    setTooltipVisible4(false);
  };
  const handleMouseEnter5 = () => {
    setTooltipVisible5(true);
  };

  const handleMouseLeave5 = () => {
    setTooltipVisible5(false);
  };

  const handleMouseEnter6 = () => {
    setTooltipVisible6(true);
  };

  const handleMouseLeave6 = () => {
    setTooltipVisible6(false);
  };
  const handleMouseEnter7 = () => {
    setTooltipVisible7(true);
  };

  const handleMouseLeave7 = () => {
    setTooltipVisible7(false);
  };
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const [enabled, setEnabled] = useState<boolean>(false);
  const openChatmod = () => {
    setShowChatmod(true);
  };

  const closeChatmod = () => {
    setShowChatmod(false);
  };




  const [showBlock, setShowBlock] = useState(false);
  const openBlock = () => {
    setShowBlock(true);
  };

  const closeBlock = () => {
    console.log("Closing sign-in form");
    setShowBlock(false);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div>
      {showChatmod && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-gray-2 bg-opacity-50">
          <div className="relative z-50 w-150 max-w-lg">
            <div className="relative bg-white rounded-lg shadow-2xl">
              <button onClick={closeChatmod} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="2xl:p-8">
                <Chatmod />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row h-full bg-gray transition-all">
        {/* Sidebar and Navbar components */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <div className='z-50 inset-0'>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          <h1 className="text-bold text-3xl m-5 md:m-10 boldish">
            Chats <span className="text-meta-3 boldish">(2)</span>
          </h1>
          <div className="flex bg-white  flex-col md:flex-row m-5 md:m-10 gap-4 border border-box p-5 rounded-lg">
            <div className="md:w-full lg:w-2/3">
              <label htmlFor="">From</label>
              <input
                type="text"
                placeholder="Devis miller"
                className="w-full p-4 bg-whiter border border-box rounded-lg"
              />
            </div>
            <div className="md:w-full lg:w-2/3">
              <label htmlFor="">To</label>
              <input
                type="text"
                placeholder="John Doe "
                className="w-full p-4 bg-whiter border border-box rounded-lg"
              />
            </div>
            <div className="md:w-1/2  md:mt-0 flex">
              <button
                className="flex-grow bg-meta-3 h-15 mt-5.5 text-white rounded-md text-center flex justify-center align-center items-center"

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1D9E6F"
                  stroke="currentColor"
                  width={20}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>     Search
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto m-10 shadow-md sm:rounded-lg 2xl:text-sm text-xs border border-box">
            <table className="w-full 2xl:text-sm text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      ID
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      FROM
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      TO
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      CONTENTS
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      SENT ON
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th className="py-4 px-10 font-medium text-gray-2 dark:text-white">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      STATUS
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">

                  </th>
                </tr>
              </thead>
              <tbody className='bg-white 2xl:text-sm text-xs'>
                <tr className="text-base border-b border-1 border-box ">
                  <th scope="row" className="px-6 py-42xl:text-sm text-xs  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    01
                  </th>
                  <td className=" py-4 2xl:text-sm text-xs">
                    Devis miller
                  </td>
                  <td className=" py-4 2xl:text-sm text-xs">
                    John Doe
                  </td>
                  <td className="border-b border-1 border-box relative px-5 2xl:text-sm text-xs">
                    <div
                      data-tooltip-target="tooltip-default-1"
                      className="text-black bg-blue-700 2xl:text-sm text-xs hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                      onMouseEnter={handleMouseEnter6}
                      onMouseLeave={handleMouseLeave6}
                    >
                      Hi There! Absolutely,I' bee..
                      <div
                        id="tooltip-default-1"
                        role="tooltip"
                        className={`absolute z-10 inline-block px-3 text-xs bg-white font-medium text-black shadow-3xl w-50transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible6 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                        style={{ top: '-80px', right: '0', width: '100' }}
                      >
                        Hi There! Absolutely,I' bee.. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </td>
                  <td className=" py-4 2xl:text-sm  text-xs">
                    07-08-2023(10:34 AM)
                  </td>

                  <td className="border-b border-1 border-box" onClick={openBlock}>
                    <button onClick={openBlock}>

                      <td className=" py-5  dark-border-strokedark">
                        <button onClick={openBlock}>
                          <label
                            htmlFor="toggle1"
                            className="flex cursor-pointer text-sm select-none text-danger items-center"
                          >    Blocked
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggle1"
                                className="sr-only "

                              />

                              <div className="block 2xl:h-8 h-6 2xl:w-14 w-12  rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                              <div
                                className={`absolute left-1 top-1  2xl:h-6 xl:h-4 w-4 2xl:w-6 rounded-full bg-white transition ${enabled && '!right-1 !translate-x-full !bg-white dark:!bg-white'
                                  }`}
                              ></div>
                            </div>
                          </label>
                        </button>
                      </td>
                    </button>
                  </td>

                  <td className="border-b border-1 border-box py-5  dark-border-strokedark text-primary">

                    <button onClick={openChatmod} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
                        <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>


                    </button>
                  </td>

                </tr>
                <tr className="text-base border-b border-1 border-box ">
                  <th scope="row" className="px-6 py-4 2xl:text-sm  text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    02
                  </th>
                  <td className=" py-4 2xl:text-sm  text-xs">
                    Devis miller
                  </td>
                  <td className=" py-4 2xl:text-sm  text-xs">
                    Patrick
                  </td>
                  <td className="border-b border-1 border-box relative px-5">
                    <div
                      data-tooltip-target="tooltip-default-1"
                      className="text-black bg-blue-700  2xl:text-sm  text-xs hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                      onMouseEnter={handleMouseEnter5}
                      onMouseLeave={handleMouseLeave5}
                    >
                      Hi There! Absolutely,I' bee..
                      <div
                        id="tooltip-default-1"
                        role="tooltip"
                        className={`absolute z-10 2xl:text-sm  text-xs inline-block px-3 text-sm bg-white font-medium text-black shadow-3xl w-50transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible5 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                        style={{ top: '-80px', right: '0', width: '100' }}
                      >
                        Hi There! Absolutely,I' bee.. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </td>
                  <td className=" py-4 2xl:text-sm  text-xs">
                    07-08-2023(10:34 AM)
                  </td>

                  <td className="order-b border-1 border-box py-5  dark-border-strokedark" >
                    <button >
                      <label
                        htmlFor="toggle1"
                        className="flex cursor-pointer  text-sm select-none text-meta-3 items-center"
                      >     UnBlocked
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle1"
                            className="sr-only "
                            onChange={() => {
                              setEnabled(!enabled);
                            }}
                          />

                          <div className="block 2xl:h-8 h-6 2xl:w-14 w-12 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                          <div
                            className={`absolute right-1 top-1  2xl:h-6 xl:h-4 w-4 2xl:w-6 rounded-full bg-meta-3 transition ${enabled && '!right-1 !translate-x-full !bg-meta-3 dark:!bg-white'
                              }`}
                          ></div>
                        </div>
                      </label>
                    </button>
                  </td>

                  <td className="border-b border-1 border-box py-5  dark-border-strokedark text-primary">
                    <button onClick={openChatmod} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
                        <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>


                    </button>

                  </td>

                </tr>
                <tr className="text-base border-b border-1 border-box ">
                  <th scope="row" className="px-6 py-4  2xl:text-sm  text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    03
                  </th>
                  <td className=" py-4 2xl:text-sm  text-xs ">
                    Devis miller
                  </td>
                  <td className=" py-4 2xl:text-sm  text-xs ">
                    Jasons
                  </td>
                  <td className="border-b border-1 border-box relative px-5">
                    <div
                      data-tooltip-target="tooltip-default-1"
                      className="text-black bg-blue-700  2xl:text-sm  text-xs hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                      onMouseEnter={handleMouseEnter4}
                      onMouseLeave={handleMouseLeave4}
                    >
                      Hi There! Absolutely,I' bee..
                      <div
                        id="tooltip-default-1"
                        role="tooltip"
                        className={`absolute z-10 inline-block 2xl:text-sm  text-xs  px-3 bg-white font-medium text-black shadow-3xl w-50transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible4 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                        style={{ top: '-80px', right: '0', width: '100' }}
                      >
                        Hi There! Absolutely,I' bee.. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </td>

                  <td className=" py-4 2xl:text-sm  text-xs">
                    07-08-2023(10:34 AM)
                  </td>

                  <td className="border-b border-box py-5  dark-border-strokedark">
                    <button onClick={openBlock}>
                      <label
                        htmlFor="toggle1"
                        className="flex cursor-pointer text-sm select-none text-danger items-center"
                      >    Blocked
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle1"
                            className="sr-only "

                          />

                          <div className="block 2xl:h-8 h-6 2xl:w-14 w-12 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                          <div
                            className={`absolute left-1 top-1 2xl:h-6 xl:h-4 w-4 2xl:w-6  rounded-full bg-white transition ${enabled && '!right-1 !translate-x-full !bg-white dark:!bg-white'
                              }`}
                          ></div>
                        </div>
                      </label>
                    </button>
                  </td>

                  <td className="border-b border-box py-5 dark-border-box text-primary">
                    <button onClick={openChatmod} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
                        <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>


                    </button>

                  </td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {showBlock && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50">
            <div className="relative w-full max-w-lg bg-white">
              <div className="relative rounded-lg shadow-2xl bg-white">
                <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <div className="pl-7">
                  <BlockChat />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Chats;
function setShowChat(arg0: boolean) {
  throw new Error('Function not implemented.');
}

