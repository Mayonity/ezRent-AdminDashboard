import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import Reported from '../components/Reported';
import { Block } from '../components/Block';
import { Comments } from '../components/Comments';

const Reports = () => {
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Reports'; // Set your dynamic title here
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [showReported, setShowReported] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const openReported = () => {
    setShowReported(true);
  };

  const closeReported = () => {
    setShowReported(false);
  };


  const [showComments, setShowComments] = useState(false);
  const openComments = () => {
    setShowComments(true);
  };

  const closeComments = () => {
    console.log("Closing sign-in form");
    setShowComments(false);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-full bg-gray transition-all">
      {/* Sidebar and Navbar components */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className="text-bold text-2xl boldish md:text-3xl lg:text-4xl m-5 md:m-10">
          Reports
        </h1>


        <div className="relative overflow-x-auto m-10  rounded-lg">
          <table className="w-full  text-base text-center  rtl:text-right text-gray-500 dark:text-gray-400 border border-box">
            <thead className="2xl:text-base text-xs text-center text-gray-2 uppercase  dark:text-gray-400 border-b border-box">
              <tr>

                <th scope="col" className="px-6 py-3 text-gray-2 text">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className=" py-3">
                  <th scope="col" className=" py-3 text-gray-2">
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                      FROM
                      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                        <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                      </svg>
                    </div>
                  </th>
                </th>
                <th scope="col" className=" py-3 text-gray-2 hidden md:table-cell">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    TYPE
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2 hidden md:table-cell">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ISSUE
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2  hidden md:table-cell">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3 text-gray-2">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    COMMENTS
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className='2xl:text-xl text-xs'>
              <tr className="bg-white dark:bg-gray-800 border-b border-box">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  01
                </th>
                <td className="px-6 py-5">
                  Name
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  Need Context
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  Community guidelines
                </td>
                <td className="px-6 py-4 hidden md:table-cell">

                  <p className="inline-flex hidden md:table-cell rounded-full bg-warning bg-opacity-10 py-1 px-3 2xl:text-sm text-xs font-medium text-warning">
                    Pending
                  </p>

                </td>
                <td className="px-6 py-4">
                  <button onClick={openComments}>
                    View Comments
                  </button>
                </td>

                <td className="" >


                  <button onClick={openReported} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
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
      {showReported && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-50 z-50">
          <div className="relative w-150 max-w-lg">
            <div className="relative bg-white rounded-2xl shadow-2xl">
              <button onClick={closeReported} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="2xl:p-8">
                <Reported />
              </div>
            </div>
          </div>
        </div>
      )}
      {showComments && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50">
          <div className="relative w-full max-w-lg bg-white">
            <div className="relative rounded-2xl shadow-2xl bg-white">
              <button onClick={closeComments} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-7">
                <Comments />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reports;
function setShowReported(arg0: boolean) {
  throw new Error('Function not implemented.');
}

