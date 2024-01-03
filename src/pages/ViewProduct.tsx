import { useState, useEffect } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import MyImage from '../assets/ps51_800KB.jpg';
import MyImage1 from '../assets/ps52.png';
import MyImage2 from '../assets/ps53.png';
import MyImage3 from '../assets/ps54.png';
import MyImage4 from '../assets/ps55.png';
import Image from '../assets/Mask group.png';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
import { EditOffers } from '../components/EditOffers';
import { Block } from '../components/Block';
import { OrderModel } from '../components/OrderModel';
import ViewProduct from "../components/ViewProduct"
const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderModel, setShowOrderModel] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    setIsOpenDropdown1(!isOpenDropdown1);

  };
  const openOrderModel = () => {
    setShowOrderModel(true);
  };

  const closeOrderModel = () => {
    setShowOrderModel(false);
  };
  const [showBlock, setShowBlock] = useState(false);
  const openBlock = () => {
    setShowBlock(true);
  };

  const closeBlock = () => {
    console.log("Closing sign-in form");
    setShowBlock(false);
  };

  const [showDelete, setShowDelete] = useState(false);

  const closeDelete = () => {
    setShowDelete(false);
  };

  const openDelete = () => {
    setShowDelete(true);
  };





  const [showEditOffers, setShowEditOffers] = useState(false);

  const closeEditOffers = () => {
    setShowEditOffers(false);
  };

  const openEditOffers = () => {
    setShowEditOffers(true);
  };


  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.title = 'Ez-Rent-Admin | AddProduct'; // Set your dynamic title here
  }, []);
  return (
    <div className=''>

      <div className="flex flex-col md:flex-row bg-gray transition-all ">
        {/* Sidebar and Navbar components */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <ViewProduct />
          <h1 className="text-bold text-2xl  md:text-3xl lg:text-4xl m-5 md:m-10">
            Rent History
          </h1>


     <div className="relative overflow-x-auto m-10  rounded-lg justify-center items-center ">
            <table className="w-full  text-base text-left  rtl:text-right text-gray-500 dark:text-gray-400 border border-box">
              <thead className="text-base text-gray-2 uppercase  dark:text-gray-400 border-b border-box">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    LESSEE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DURATION
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TOTAL PRICE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CREATED ON
                  </th>
                  <th scope="col" className="px-6 py-5">

                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b border-box">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    01
                  </th>
                  <td className="px-6 py-5">
                    David
                  </td>
                  <td className="px-6 py-4">
                    10-10-2023 <span>-To-</span>  20-10-2023
                  </td>
                  <td className="px-6 py-4">
                    $10
                  </td>
                  <td className="px-6 py-4">

                    <p className="px-6 py-4">
                      10-10-2023
                    </p>

                  </td>
                  <td className="px-6 py-4">
                    <button onClick={openOrderModel}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#30A87E' className='bg-[#D5EDE5] w-10 h-7 rounded-full'>
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                    </button>
                  </td>


                </tr>

              </tbody>
            </table>
          </div>
          <br />
          <h1 className="text-bold text-2xl md:text-3xl lg:text-4xl m-10 md:m-10">
            Offers
          </h1>


          <div className="relative overflow-x-auto m-10  rounded-lg justify-center items-center ">
            <table className="w-full  text-base text-left  rtl:text-right text-gray-500 dark:text-gray-400 border border-box">
              <thead className="text-base text-gray-2 uppercase  dark:text-gray-400 border-b border-box">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    LESSEE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NEGOTIATE PRICE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    STATUS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    UPDATED ON
                  </th>
                  <th scope="col" className="px-6 py-5">
                    UPDATED BY
                  </th>
                  <th scope="col" className="px-6 py-5">
                    EDIT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b border-box">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    01
                  </th>
                  <td className="px-6 py-5">
                    David
                  </td>
                  <td className="px-6 py-4">
                    $7
                  </td>
                  <td className="px-6 py-4 ">

                    <p className="inline-flex rounded-full bg-greenlight text-meta-3 bg-opacity-50 py-1 px-3 text-sm font-medium ">
                      Accepted
                    </p>

                  </td>
                  <td className="px-6 py-4">

                    <p className="px-6 py-4">
                      10-10-2023
                    </p>

                  </td>
                  <td className="px-6 py-4">

                    <p className="px-6 py-4">
                      Name
                    </p>

                  </td>
                  <td className=" p-5">
                    <button onClick={openEditOffers} className='w-25 text-center h-9 rounded-full justify-center items-center bg-[#D9DDFA] ' >
                      <svg width="23" height="23" viewBox="0 0 20 20" fill="none" className='ml-9' xmlns="http://www.w3.org/2000/svg" >
                        <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 18.3333H17.5" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </td>


                </tr>

              </tbody>
            </table>
          </div> 
        </div>

      </div>
      <div>

      </div>
      {showOrderModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-50   z-50">
          <div className="relative  max-w-lg">
            <div className="relative    rounded-lg  ">

              <div className="">
                <button onClick={closeOrderModel} className="absolute top-3  right-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <OrderModel />
              </div>
            </div>
          </div>
        </div>
      )}
      {showBlock && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80  bg-gray-2 z-50">
          <div className="relative w-full max-w-lg bg-white">
            <div className="relative rounded-lg shadow-lg bg-white">
              <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="pl-7">
                <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center ml-10 text-2xl font-bold leading-9 tracking-tight text-[#C70813] ">
                      Block this Product
                    </h2>
                    <br />
                  </div>
                  <div>
                    <textarea name="" id="" placeholder='Add remarks' className='  border-2  border-gray-2 w-100 h-40 rounded-lg p-5' />
                    <br />
                    <div className='text-center mt-5'>
                      <button className='text-white bg-[#C70813] p-4 w-50 ml-10 text-center rounded-lg'>Block</button>
                    </div>
                  </div>
                </div>              </div>
            </div>
          </div>
        </div>
      )}
      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80  bg-gray-2   z-50">
          <div className="relative w-100 max-w-lg ">
            <div className="relative rounded-3xl shadow-lg bg-white">
              <button onClick={closeDelete} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="p-6">
                <Delete />
              </div>
            </div>
          </div>
        </div>
      )}
      {showEditOffers && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80   bg-gray-2  z-50 ">
          <div className="relative  max-w-lg ">
            <div className="relative rounded-3xl shadow-lg ">
              <button onClick={closeEditOffers} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              </button>
              <div className="">
                <EditOffers />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default AddProduct;

