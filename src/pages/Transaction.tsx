import  { useState, useEffect } from 'react';
import { Transform } from '../components/Transform';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import 'tippy.js/dist/tippy.css'; // Import Tippy styles

const Transaction = () => {
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Transaction'; // Set your dynamic title here
  }, []);
  const [showTransform, setShowTransform] = useState(false); // Corrected variable name
  const [isTooltipVisible1, setTooltipVisible1] = useState(false);
  const [isTooltipVisible2, setTooltipVisible2] = useState(false);
  const [isTooltipVisible3, setTooltipVisible3] = useState(false);
  const [isTooltipVisible4, setTooltipVisible4] = useState(false);
  const [isTooltipVisible5, setTooltipVisible5] = useState(false);
  const [isTooltipVisible6, setTooltipVisible6] = useState(false);
  const [isTooltipVisible7, setTooltipVisible7] = useState(false);



  const handleMouseEnter1 = () => {
    setTooltipVisible1(true);
  };

  const handleMouseLeave1 = () => {
    setTooltipVisible1(false);
  };

  const handleMouseEnter2 = () => {
    setTooltipVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setTooltipVisible2(false);
  };

  const handleMouseEnter3 = () => {
    setTooltipVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setTooltipVisible3(false);
  };

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

  const openTransform = () => {
    setShowTransform(true);
  };

  const closeSignInForm = () => {
    console.log("Closing sign-in form");
    setShowTransform(false);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row bg-gray transition-all">
      {/* Sidebar and Navbar components */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className="text-bold text-3xl m-5 md:m-10 boldish">
          Transaction <span className="text-meta-3 boldish">(1)</span>
        </h1>
        <div className="flex flex-col md:flex-row m-5 md:m-10 gap-4 border border-box p-5 bg-white rounded-lg">
          <div className="md:w-full lg:w-2/3">
            <input
              type="text"
              placeholder="Search by"
              className="w-full p-4 bg-whiter border border-box rounded-lg"
            />
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0 flex">
            <button
              className="flex-grow bg-meta-3 h-15 text-white rounded-md text-center flex justify-center align-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1D9E6F"
                stroke="currentColor"
                width={20}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>    Search

            </button>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0 flex">
            <button
              className="flex-grow bg-meta-3 h-15 text-white rounded-md"
              onClick={openTransform}
            >
              New
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto m-10 shadow-md sm:rounded-lg border border-box">

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box bg-gray">
              <tr>
                <th scope="col" className="px-5 py-6 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Transaction Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Order Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    User Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Amount
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Type
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Reference Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Remarks
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="2xl:text-base text-xs border-b border-1 border-box ">
                <th scope="row" className="px-5 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                  01
                </th>
                <td className="py-4">
                  01
                </td>
                <td className=" py-4">
                  01
                </td>
                <td className=" py-4">
                  $40
                </td>
                <td className=" py-4">
                  Late Return
                </td>
                <td className=" py-4 text-center">
                  01
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-1"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-1"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible1 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>





              </tr>
              <tr className="2xl:text-base text-xs border-b border-1 border-box ">
                <th scope="row" className=" px-5 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                  02
                </th>
                <td className=" py-4">
                  02
                </td>
                <td className="py-4">
                  02
                </td>
                <td className=" py-4">
                  $40
                </td>
                <td className="py-4">
                  Reimbursement
                </td>
                <td className=" py-4 text-center">
                  02
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-2"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-base text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-2"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible2 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>


              </tr>

              <tr className="2xl:text-base  text-xs border-b border-1 border-box ">
                <th scope="row" className="px-5 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                  03
                </th>
                <td className=" py-4">
                  03
                </td>
                <td className=" py-4">
                  03
                </td>
                <td className=" py-4">
                  $40
                </td>
                <td className=" py-4">
                  Compensation
                </td>
                <td className=" py-4 text-center">
                  03
                </td>
                <td className="border-b border-1 border-box relative" >
                  <div
                    data-tooltip-target="tooltip-default-3"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-base  text-xs  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-3"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible3 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>



              </tr>


            </tbody>
          </table>
        </div>

        {/* Order */}
        <h1 className='text-4xl font-black m-10 mt-30 boldish'>Order</h1>
        <div className="relative overflow-x-auto m-10  shadow-md sm:rounded-lg border border-box bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box bg-gray">
              <tr>
                <th scope="col" className="px-10 py-6 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Transaction Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Order Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Amount
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Type
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Remarks
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className="2xl:text-base  text-xs  border-b border-1 border-box ">

                <td className="px-10 py-6">
                  01
                </td>
                <td className="px-1 py-4">
                  01
                </td>
                <td className="px-1 py-4">
                  $40
                </td>
                <td className="px-1 py-4">
                  Late Return
                </td>

                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-1"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-base  text-xs  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-1"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible4 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>




              </tr>
            </tbody>
          </table>
        </div>
        {/* Commisions*/}
        <h1 className='text-4xl font-black m-10 mt-30 boldish'>Commissions</h1>
        <div className="relative overflow-x-auto m-10  shadow-md sm:rounded-lg border border-box bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box bg-gray">
              <tr>
                <th scope="col" className="px-10 py-6 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Transaction Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Order Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Amount
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Type
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Remarks
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className="2xl:text-base  text-xs  border-b border-1 border-box ">

                <td className="px-10 py-6">
                  01
                </td>
                <td className="px-1 py-4">
                  01
                </td>
                <td className="px-1 py-4">
                  $40
                </td>
                <td className="px-1 py-4">
                  Late Return
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-1"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-base  text-xs  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-1"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible5 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>



              </tr>
            </tbody>
          </table>
        </div>
        {/* Deposit */}
        <h1 className='text-4xl font-black m-10 mt-30 boldish'>Deposit</h1>
        <div className="relative overflow-x-auto m-10  shadow-md sm:rounded-lg border border-box bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box bg-gray">
              <tr>
                <th scope="col" className="px-10 py-6 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Transaction Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Order Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Amount
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Type
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    REFERENCE ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Remarks
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className="2xl:text-base  text-xs  border-b border-1 border-box ">

                <td className="px-10 py-6">
                  01
                </td>
                <td className="px-1 py-4">
                  01
                </td>
                <td className="px-1 py-4">
                  $40
                </td>
                <td className="px-1 py-4">
                  Late Return
                </td>
                <td className="px-1 py-4">
                  01
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-1"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-base  text-xs  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-1"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible6 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>



              </tr>
            </tbody>
          </table>
        </div>
        {/* Late Fee */}
        <h1 className='text-4xl font-black m-10 mt-30 boldish'>Late Fee</h1>
        <div className="relative overflow-x-auto m-10  shadow-md sm:rounded-lg border border-box bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-xs text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box bg-gray">
              <tr>
                <th scope="col" className="px-10 py-6 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Transaction Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Order Id
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Amount
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Type
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-1 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    REFERENCE ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    Remarks
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className="2xl:text-base  text-xs  border-b border-1 border-box ">

                <td className="px-10 py-6">
                  01
                </td>
                <td className="px-1 py-4">
                  01
                </td>
                <td className="px-1 py-4">
                  $40
                </td>
                <td className="px-1 py-4">
                  Late Return
                </td>
                <td className="px-1 py-4">
                  01
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-1"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-18 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-base  text-xs  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter7}
                    onMouseLeave={handleMouseLeave7}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-1"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 text-sm bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible7 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>





              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showTransform && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-50 z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative bg-white rounded-2xl shadow-2xl">

              <div className="p-8">
                <button onClick={closeSignInForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <Transform />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
