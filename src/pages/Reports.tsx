import { useState, useEffect } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import Reported from '../components/Reported';
import { Comments } from '../components/Comments';
import Image from "../assets/increase.png"
const Reports = () => {
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | Reports'; // Set your dynamic title here
  }, []);
  const [showReported, setShowReported] = useState(false);
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
      <div className="flex-1 bg-gray h-screen">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className="text-bold text-2xl boldish md:text-3xl lg:text-4xl m-5 md:m-10">
          Reports
        </h1>


        <div className="relative overflow-x-auto m-10  rounded-lg">

          <div className="relative overflow-x-auto mt-10">
            <table className="w-[1000px] 2xl:w-full text-sm   border border-box text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-graydark uppercase  ">
                <tr className='grid grid-cols-7  '>
                  <th scope="col" className="py-5 pl-14   flex items-center ">
                    ID
                    <img src={Image} alt="image" />
                  </th>
                  <th scope="col" className=" py-5   flex items-center  ">
                    From
                    <img src={Image} alt="image" />

                  </th>
                  <th scope="col" className=" py-5  flex items-center ">
                    Type
                    <img src={Image} alt="image" />
                  </th>
                  <th scope="col" className=" py-5  flex items-center ">
                    Issue
                    <img src={Image} alt="image" />
                  </th>
                  <th scope="col" className=" py-5 pl-7 flex items-center ">
                    ID
                    <img src={Image} alt="image" />
                  </th>
                  <th scope="col" className=" py-5  flex items-center ">
                    COMMENTS
                    <img src={Image} alt="image" />
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border border-box grid grid-cols-7  ">
                  <th scope="col" className="py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <p className='text-xs pl-14'>01</p>
                  </th>
                  <td className=" py-4 text-xs pr-8">
                    Name
                  </td>
                  <td className=" pl- text-xs py-4">
                    Need Context
                  </td>
                  <td className=" py-4  text-xs w-72   ">
                    Community guidelines
                  </td>
                  <td className=" py-4 pl-6 text-xs">

                    <p className=" md:table-cell rounded-full bg-warning bg-opacity-10 py-1 px-3 2xl:text-sm text-xs font-medium text-warning">
                      Pending
                    </p>                  </td>
                  <td className=" py-4 text-xs">
                    <button onClick={openComments}>
                      View Comments
                    </button>
                  </td>
                  <td>
                    <button onClick={openReported} className='bg-[#D5EDE5] mt-2 w-20 h-8 rounded-full text-center'>
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


