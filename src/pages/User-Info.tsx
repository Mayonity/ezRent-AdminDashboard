import { useState, useEffect } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import Card_3 from '../components/Card_3';
import Card_2 from '../components/Card_2';
import Card_0 from '../components/Card_0';
import Card_1 from '../components/Card_1';
import { OrderModel } from '../components/OrderModel';
import { Review } from '../components/Review';
import { Verify } from '../components/Verify';
import { ResetPass } from '../components/ResetPass';
import { Block } from '../components/Block';
import { RecieveInfo } from '../components/RecieveInfo';
import { Address } from '../components/Address';
import UserForm from '../components/UserForm';
const Info = () => {
  
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | User-info'; // Set your dynamic title here
  }, []);

  const [showOrderModel, setShowOrderModel] = useState(false);
  const [isTooltipVisible1, setTooltipVisible1] = useState(false);
  const [isTooltipVisible2, setTooltipVisible2] = useState(false);
  const [isTooltipVisible3, setTooltipVisible3] = useState(false);

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
  const openOrderModel = () => {
    setShowOrderModel(true);
  };

  const closeOrderModel = () => {
    setShowOrderModel(false);
  };
  const [showReview, setShowReview] = useState(false);
  const openReview = () => {
    setShowReview(true);
  };

  const closeReview = () => {
    setShowReview(false);
  };
  const [showUserForm, setShowUserForm] = useState(false);
  const openUserForm = () => {
    setShowUserForm(true);
  };

  const closeUserForm = () => {
    setShowUserForm(false);
  };
  const [showVerify, setShowVerify] = useState(false);
  const openVerify = () => {
    setShowVerify(true);
  };

  const closeVerify = () => {
    setShowVerify(false);
  };
  const [showResetPass, setShowResetPass] = useState(false);
  const openResetPass = () => {
    setShowResetPass(true);
  };

  const closeResetPass = () => {
    setShowResetPass(false);
  };
  const [showBlock, setShowBlock] = useState(false);
  const openBlock = () => {
    setShowBlock(true);
  };

  const closeBlock = () => {
    console.log("Closing sign-in form");
    setShowBlock(false);
  };



  const [showRecieveInfo, setShowRecieveInfo] = useState(false);


  const openRecieveInfo = () => {
    setShowRecieveInfo(true);
  };

  const closeRecieveInfo = () => {
    setShowRecieveInfo(false);
  };






  const [showAddress, setShowAddress] = useState(false);


  const openAddress = () => {
    setShowAddress(true);
  };

  const closeAddress = () => {
    setShowAddress(false);
  };




  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row bg-gray h-1/2 transition-all">
      {/* Sidebar and Navbar components */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className='m-10 ml-24 flex text-[#DC4449]'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#DC4449'> <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>This user is blocked due to spam and misinformation</h1>
        {/* Section with three boxes */}
        <div className='m-10 flex md:flex-row flex-col justify-center 2xl:text-lg text-sm'>
          <div>
            <div className=' p-5 border-box border rounded bg-white'>
              <div className='flex justify-between border-b border-box mb-5 '>
                <h1 className='2xl:text-xl text-lg font-bold text-meta-3'>User Information</h1>
                <button onClick={openUserForm}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-10 text-center h-7 border-box  justify-center items-center border'>
                    <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.5 18.3333H17.5" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div>
                <div className='flex gap-20 mb-2'>
                  <h1>Id:</h1>
                  <h1 className='text-gray-2'>1</h1>
                </div>
                <div className='flex gap-13  mb-2'>
                  <h1>Name:</h1>
                  <h1 className='text-gray-2'>John Doe</h1>
                </div>
                <div className='flex gap-12  mb-2'>
                  <h1>Phone:</h1>
                  <div className='flex 2xl:gap-30 gap-10'>
                    <h1 className='text-gray-2'>+65 342 342</h1>
                    <div className='w-8 h-7 text-danger ml-15' ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#DE4245'><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg></div>
                  </div>
                </div>
                <div className='md:mb-10 justify-center align-center items-center ml-25 mb-2'>
                  <button className='w-15 h-7 bg-meta-3 rounded-md text-white text-sm' onClick={openVerify}>Verify</button>
                </div>
                <div className='flex gap-12  mb-2'>
                  <h1>Email:</h1>
                  <div className='flex 2xl:gap-30 gap-14'>
                    <h1 className='text-gray-2'>johndoe@gmail.com</h1>
                    <div className='  text-center rounded-full  border-success border-2 text-success'><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill='#559A85'><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                  </div>
                </div>
                <div className='flex 2xl:gap-8 gap-4  mb-2'>
                  <h1>Commision rate:</h1>

                  <input type="text" placeholder='%5' className='text-gray-2 w-10 h-8 p-1 rounded border' />
                </div>
                <div className='flex 2xl:gap-10 xl:gap-3  mb-5'>
                  <h1>Created on:</h1>
                  <h1 className='text-gray-2'>August 07,2023 (10:10 AM)</h1>
                </div>
                <div className='flex justify-between mb-2'>
                  <button className='2xl:w-40 w-32 2xl:text-xl text-xs rounded-md h-10 bg-greenlight' onClick={openResetPass}>Reset Password</button>
                  <button className='2xl:w-40 w-32 2xl:text-xl text-xs rounded-md h-10 bg-[#EEB3B4] text-[#D40915]' onClick={openBlock}>Block</button>

                </div>
              </div>

            </div>
          </div>




          <div className='flex  justify-center bg-white  gap-4 md:gap-8 lg:gap-10 xl:gap-12'>
            <div className=' p-5 border-box border rounded'>
              <div className='flex justify-between border-b border-box mb-5'>
                <h1 className='2xl:text-xl text-lg font-bold text-meta-3'>Receiver Information</h1>
                <svg
                  className="fill-current text-meta-3"
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="#13795B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                    fill=""
                  />
                  <path
                    d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                    fill=""
                  />
                </svg>
              </div>

              <div className='2xl:w-90 w-72 p-5 border border-box rounded'>

                <div className='flex justify-between 2xl:text-xl text-xs'>

                  <div>
                    <div className='flex gap-5 '>

                      <div >Name:</div>
                      <div className='text-gray-2'>John Doe</div>

                    </div>

                    <div className='flex gap-5 '>
                      <div>Phone:</div>
                      <div className='text-gray-2'>+65 342 342</div>

                    </div>
                  </div>
                  <div className='' >
                    <button onClick={openRecieveInfo}>
                      <svg width="5" height="5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='2xl:w-10 w-8 text-center 2xl:h-7 h-6 border-box  justify-center items-center border'>
                        <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 18.3333H17.5" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
              <div className='2xl:w-90 w-72 p-5 border border-box rounded mt-5'>

                <div className='flex justify-between 2xl:text-xl text-xs'>

                  <div>
                    <div className='flex gap-5 '>

                      <div>Name:</div>
                      <div className='text-gray-2'>John Doe</div>

                    </div>

                    <div className='flex gap-5 '>
                      <div>Phone:</div>
                      <div className='text-gray-2'>+65 342 342</div>

                    </div>
                  </div>
                  <div className='' >
                    <button onClick={openRecieveInfo}>
                      <svg width="5" height="5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='2xl:w-10 w-8 text-center 2xl:h-7 h-6 border-box  justify-center items-center border'>
                        <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 18.3333H17.5" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='  flex  justify-center bg-white  '>
            <div className=' p-5 border-box border rounded'>
              <div className='flex justify-between border-b border-box mb-5'>
                <h1 className='2xl:text-xl text-lg font-bold text-meta-3'>Receiver Address</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z" stroke="#0E9F6E" stroke-width="1.5" />
                  <path d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z" stroke="#0E9F6E" stroke-width="1.5" />
                </svg>

              </div>

              <div className='2xl:w-90 w-72 p-5 border border-box rounded'>

                <div className='flex justify-between 2xl:text-xl text-xs'>

                  <div className='flex 2xl:gap-5 gap-3'>

                    <div>Address:</div>
                    <div className='text-gray-2'>Street, X Singapore</div>

                  </div>
                  <div className=' '>
                    <button onClick={openAddress}>
                      <svg width="5" height="5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='2xl:w-10 w-8 text-center 2xl:h-7 h-6 border-box  justify-center items-center border'>
                        <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 18.3333H17.5" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>


                </div>

              </div>
              <div className='2xl:w-90 w-72 p-5 border border-box rounded mt-5'>
                <div className='flex justify-between 2xl:text-xl text-xs'>

                  <div className='flex 2xl:gap-5 gap-3'>

                    <div>Address:</div>
                    <div className='text-gray-2'>Street, X Singapore</div>

                  </div>
                  <div className=' '>
                    <button onClick={openAddress}>
                      <svg width="5" height="5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='2xl:w-10 w-8 text-center 2xl:h-7 h-6 border-box  justify-center items-center border'>
                        <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 18.3333H17.5" stroke="#279D70" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>


                </div>

              </div>
            </div>


          </div>

        </div>



        <div className="grid grid-cols-1 gap- md:grid-cols-2 lg:grid-cols-4  2xl:gap-6 m-2 md:m-6">
          <div className="card 2xl:p-4 p-2 card">
            <Card_0 />
          </div>
          <div className="card 2xl:p-4 p-2 card">
            <Card_3 />
          </div>
          <div className="card 2xl:p-4 p-2 card">
            <Card_2 />
          </div>
          <div className="card 2xl:p-4 p-2 card">
            <Card_1 />
          </div>
        </div>



        <h1 className='text-4xl m-10 font-bold mt-20'>Orders & Earnings</h1>
        <h1 className='text-3xl m-10 font-bold mt-'>Rent</h1>
        <br />
        <br />
        <br />

        <div className="relative overflow-x-auto m-10  shadow-md sm:rounded-lg  border border-box -mt-20">
          <table className="w-full 2xl:text-sm text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box">
              <tr>
                <th scope="col" className="px-2 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ORDER ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ITEM
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    DURATION
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className=" py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    TOTAL PRICE
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    COMMISSION
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th className="py-4 px-3  text-gray-2 dark:text-white">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    NETT
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th className="py-4  px-3 text-gray-2 dark:text-white">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    CREATED ON
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th className="py-4 text-gray-2 dark:text-white">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    STATUS
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
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  01
                </th>
                <td className=" py-4 ">
                  playstation5
                </td>
                <td className="  py-4 2xl:text-sm text-xs">
                  10-10-2023-To-20-10-2023
                </td>
                <td className="border-b border-1 border-box relative ">
                  $50
                </td>
                <td className=" py-4">
                  $50
                </td>

                <td className="border-b border-1 border-box">
                  $50
                </td>
                <td className=" py-4 2xl:text-sm text-xs">
                  March 23, 2023 (10:00 AM)
                </td>
                <td className="border-b border-1 border-box py-5  dark-border-strokedark text-primary">

                  <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-2 2xl:text-sm text-[10px] font-medium text-warning">
                    Pending
                  </p>
                </td>
                <td className="py-2" >
                  <button onClick={openOrderModel}>    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill='#30A87E' className='bg-[#D5EDE5] w-7 h-7 rounded-full p-1'>
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg></button>
                </td>
              </tr>




            </tbody>
          </table>
        </div>
        <h1 className='text-3xl m-10 font-bold'>Borrow</h1>
        <div className="relative overflow-x-auto m-10 shadow-md sm:rounded-lg  border border-box">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box">
              <tr>
                <th scope="col" className="px-2 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ORDER ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ITEM
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    DURATION
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    TOTAL PRICE
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    CREATED ON
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th className="py-4 px-2 font-medium text-gray-2 dark:text-white">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    STATUS
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
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  01
                </th>
                <td className=" py-4 ">
                  playstation5
                </td>
                <td className=" py-4 2xl:text-sm text-xs">
                  10-10-2023-To-20-10-2023
                </td>


                <td className="border-b border-1 border-box">
                  $50
                </td>
                <td className=" py-4 2xl:text-sm text-xs">
                  March 23, 2023 (10:00 AM)
                </td>
                <td className="border-b border-1 border-box py-5  dark-border-strokedark text-primary">

                  <p className="inline-flex rounded-full bg-warning bg-opacity-10 px-2 py-1 2xl:text-sm text-[10px] font-medium text-warning">
                    Pending
                  </p>
                </td>
                <td className=" py-4">
                  <button onClick={openOrderModel}>    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill='#30A87E' className='bg-[#D5EDE5] w-7 h-7 rounded-full p-1 2xl:text-sm text-[10px]'>
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg></button>
                </td>
              </tr>



            </tbody>
          </table>
        </div>
        <h1 className='text-3xl m-10 font-bold'>Rating & Reviews</h1>

        <div className="relative overflow-x-auto m-10 shadow-md sm:rounded-lg  border border-box">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="2xl:text-lg text-sm text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box">
              <tr>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    ID
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    FROM
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    TO
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    RATING
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    REVIEW
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32" />
                      <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32" />
                    </svg>
                  </div>
                </th>

                <th scope="col" className="px-3 py-3">
                  ADDED ON
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="2xl:text-base text-xs border-b border-1 border-box ">
                <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  01
                </th>
                <td className="px-3 py-4">
                  Adin
                </td>
                <td className="px-3 py-4">
                  Devis
                </td>

                <td className="px-3 py-4">
                  4.7
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-1"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-20 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 2xl:text-sm text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
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

                <td className="px-3 py-4">
                  March 23, 2023 (10:00 AM)
                </td>
                <td className=" py-5  dark-border-box text-primary ">
                  <button onClick={openReview} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
                      <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </button>

                </td>

              </tr>
              <tr className="2xl:text-base text-xs border-b border-1 border-box ">
                <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  01
                </th>
                <td className="px-3 py-4">
                  Adin
                </td>
                <td className="px-3 py-4">
                  Devis
                </td>

                <td className="px-3 py-4">
                  4.7
                </td>
                <td className="border-b border-1 border-box relative">
                  <div
                    data-tooltip-target="tooltip-default-2"
                    className="text-black bg-blue-700 hover:bg-blue-800 -ml-20 focus:ring-4 2xl:text-sm text-xs focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    Lorem Ipsum
                    <div
                      id="tooltip-default-2"
                      role="tooltip"
                      className={`absolute z-10 inline-block px-3 py-2 2xl:text-sm text-xs bg-white font-medium text-black shadow-3xl w-50  transition-opacity border border-box duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${isTooltipVisible2 ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
                      style={{ top: '-50px', right: '0' }}
                    >
                      Lorem Ipsum
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-4">
                  March 23, 2023 (10:00 AM)
                </td>
                <td className=" py-5  dark-border-box text-primary ">
                  <button onClick={openReview} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
                      <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </button>

                </td>

              </tr>
              <tr className="2xl:text-base text-xs border-b border-1 border-box ">
                <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  01
                </th>
                <td className="px-3 py-4">
                  Adin
                </td>
                <td className="px-3 py-4">
                  Devis
                </td>

                <td className="px-3 py-4">
                  4.7
                </td>
                <td className="border-b border-1 border-box relative" >
                  <div
                    data-tooltip-target="tooltip-default-3"
                    className="text-black bg-blue-700 hover:bg-blue-800 2xl:text-sm text-xs -ml-20 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
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

                <td className="px-3 py-4">
                  March 23, 2023 (10:00 AM)
                </td>
                <td className=" py-5  dark-border-box text-primary ">
                  <button onClick={openReview} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
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
      {showOrderModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-gray-2 bg-opacity-50 z-50">
          <div className="relative  max-w-lg">
            <div className="relative    rounded-lg  ">

              <div className="p-8">
                <button onClick={closeOrderModel} className="absolute top-12 right-12 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <OrderModel />
              </div>
            </div>
          </div>
        </div>
      )}
      {showReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-50 z-50">
          <div className="relative w-100 bg-white max-w-lg">
            <div className="relative  rounded-lg shadow-2xl">

              <div className="p-">
                <button onClick={closeReview} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <Review />
              </div>
            </div>
          </div>
        </div>
      )}
      {showUserForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-50 z-50">
          <div className="relative w-180 max-w-lg ">
            <div className="relative  rounded-lg border-box  border-2  bg-white shadow-2xl">

              <div className="w-140 px-12 py-8">
                <button onClick={closeUserForm} className="absolute top-3  right-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      )}
      {showVerify && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-3xl shadow-lg bg-white w-80 ml-45 p-8 ">
              <button onClick={closeVerify} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#CACACA">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-5">
                <Verify />
              </div>
            </div>
          </div>
        </div>
      )}
      {showResetPass && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-80 z-50">
          <div className="relative w-full max-w-lg ">
            <div className="relative  rounded-lg shadow-2xl border-box  border-2  bg-white">
              <button onClick={closeResetPass} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-14">
                <ResetPass />
              </div>
            </div>
          </div>
        </div>
      )}
      {showBlock && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 bg-gray-2 z-50">
          <div className="relative w-full max-w-lg bg-white">
            <div className="relative rounded-lg shadow-lg bg-white">
              <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-7">
                <Block />
              </div>
            </div>
          </div>
        </div>
      )}
      {showRecieveInfo && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-3xl shadow-2xl  border-box  border-2  bg-white w-150 ml-10 p-8 ">
              <button onClick={closeRecieveInfo} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#CACACA">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-5 ">
                <RecieveInfo />
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddress && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-3xl shadow-2xl border border-box bg-white w-150 ml-10 p-8 ">
              <button onClick={closeAddress} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#CACACA">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-5">
                <Address />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Info;
;
