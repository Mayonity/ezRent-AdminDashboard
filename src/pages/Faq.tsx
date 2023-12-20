import React, { useState } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';

const Faq = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row bg-gray transition-all">
        {/* Sidebar and Navbar components */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <h1 className='text-5xl m-5 md:m-10 font-bold'>FAQ</h1>

          <div className='border border-box p-5 md:p-10 m-5 md:m-10 rounded-xl text-lg md:text-xl font-bold flex bg-white'>
            <div>
              <h1>Questions: <span className='text-gray-2'>What Is Lorem Ipsum</span></h1>
              <br />
              <h1>Answer: <span className='text-gray-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro quas aperiam similique. sit amet consectetur adipisicing elit. Voluptate porro quas aperiam similique.</span></h1>
            </div>
            <div>
              <div className='w-24 md:w-30 bg-whiter rounded-lg h-8 md:h-9 p-2 text-center justify-center flex  '>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill='#1D9E6F'><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                <label htmlFor="" className='text-sm md:text-base'>Edit</label>
              </div>
              <div className='w-24 md:w-30 bg-whiter rounded-lg h-8 md:h-9 p-2 text-center justify-center flex mt-4 md:mt-8 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill='#DC3545'><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                <label htmlFor="" className='text-sm md:text-base'>Delete</label>
              </div>
            </div>
          </div>

          {/* Dropdown Section */}
          <div className='border border-box p-5 md:p-10 m-5 md:m-10 rounded-xl text-lg md:text-xl font-bold flex justify-between items-center text-meta-3 bg-white'>
            <div onClick={handleDropdownClick} className='cursor-pointer flex items-center'>
              <h1 className='mr-2 text-sm md:text-base'>Add new</h1>
            </div>
            <div className='text-2xl'>+</div>
          </div>

          {showDropdown && (
            <div className="flex flex-col m-5 md:m-10">
              <input type="text"  className="border border-box border-2 p-4 md:p-5 rounded-xl text-base md:text-xl font-normal text-gray-2 w-full text-[#CACACA]" placeholder='Question'/>
              <input type="text"  className="border border-box border-2 p-4 md:p-5 rounded-xl text-base md:text-xl mt-4 md:mt-5 font-normal text-gray-2 w-full text-[#CACACA]" placeholder='Answers'/>
              <br />
              <div className='justify-center items-center text-right'>
                <button className='bg-meta-3 h-12 w-36 md:w-50 rounded-xl text-white text-sm md:text-base'>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
