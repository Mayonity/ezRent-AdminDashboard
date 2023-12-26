import React, { useState } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import MyImage from '../assets/ps51_800KB.jpg';
import MyImage1 from '../assets/ps52.png';
import MyImage2 from '../assets/ps53.png';
import MyImage3 from '../assets/ps54.png';
import MyImage4 from '../assets/ps55.png';
import Image from '../assets/Mask group.png';
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import { OrderModel } from '../components/OrderModel';
import { FaSearch } from 'react-icons/fa';
import { Block } from '../components/BlockProducts';
import Delete from '../components/Delete';
import { EditOffers } from '../components/EditOffers';

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderModel, setShowOrderModel] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
  const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpenDropdown1(!isOpenDropdown1);
    // Close the other dropdown
    setIsOpenDropdown2(false);
  };

  const toggleDropdown2 = () => {
    setIsOpenDropdown2(!isOpenDropdown2);
    // Close the other dropdown
    setIsOpenDropdown1(false);
  };

  const [isCompOpen, setIsCompOpen] = useState(false);

  const openComp = () => {
    setIsCompOpen(!isCompOpen);
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

  const closeDeleteLog = () => {
    console.log("Closing sign-in form");
    setShowDelete(false);
  };




  const [showEditOffers, setShowEditOffers] = useState(false);

  const closeEditOffers = () => {
    setShowEditOffers(false);
  };

  const openEditOffers = () => {
    setShowEditOffers(true);
  };

  const closeEditOffersLog = () => {
    console.log("Closing sign-in form");
    setShowEditOffers(false);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=''>

      <div className="flex flex-col md:flex-row bg-gray transition-all ">
        {/* Sidebar and Navbar components */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="m-10 md:m-10 flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <div>
                <h1 className="text-1xl text-gray-2 relative">

                </h1>
              </div>
              <h1 className="text-gray-2 relative">
                <div className="">
                  <button
                    onClick={toggleDropdown1}
                    type="button"
                    className="inline-flex  gap-x-1.5 text-left text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <h1 className={`text-black text-xl ${isOpenDropdown1}`}>By: <span className='text-gray-2'>Devis miller</span></h1>

                  </button>
                  {isOpenDropdown1 && (
                    <div
                      className="absolute left-0  z-10 mt-2 w-80 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex={-1}
                    >
                      <div className="py-1m p-5" role="none">
                        <input type="text"
                          id="first_name"
                          className="bg-gray text-gray-900 text-sm  outline:none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="🔍    Search User"
                          required />
                        <br />
                        <div className='flex bg-gray p-1 gap-20 border-b border-box'>
                          <img src={Image} alt="ss" />
                          <h1 className='mt-2 '>Devis miller</h1>
                        </div>
                        <div className='flex bg-gray p-1 gap-20  border-b border-box'>
                          <img src={Image} alt="ss" />
                          <h1 className='mt-2 '>Devis miller</h1>
                        </div>
                        <div className='flex bg-gray p-1 gap-20 border-b border-box'>
                          <img src={Image} alt="ss" />
                          <h1 className='mt-2 '>Devis miller</h1>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <span className="font-black text-black">Address:</span> 22-04-2022
              </h1>
              <img src={MyImage} alt="" className="mt-5 rounded-lg md:w-3/4" />



              <div className="flex flex-col md:flex-row gap-5">
                <img src={MyImage1} alt="" className="mt-5 rounded-lg md:w-1/3" />
                <img src={MyImage2} alt="" className="mt-5 rounded-lg md:w-1/3" />
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <img src={MyImage3} alt="" className="mt-5 rounded-lg md:w-1/3" />
                <img src={MyImage4} alt="" className="mt-5 rounded-lg md:w-1/3" />
              </div>
            </div>
            <div className="md:w-11/12">
              <div className="flex flex-col gap-9 md:mt-18">
                {/* Contact Form */}
                <div className="rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white text-xl">
                      Product Information
                    </h3>
                  </div>
                  <form action="#" className="p-6.5">
                    <div className="p-6.5">
                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Product Name<span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Product Name here..."
                            className="w-90 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>

                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Price (per day)<span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Product Price"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Quantity<span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Product Quantity"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition  focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Tagline<span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Product Tagline"
                            className="w-90 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>

                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Delivery/Collection<span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Refundable Deposit<span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition  focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                      </div>
                      <label className="mb-2.5 block text-black dark:text-white">
                        Email <span className="text-meta-1">*</span>
                      </label>
                      <div className="flex flex-col gap-6 xl:flex-row ">

                        <input
                          type="email"
                          placeholder="Lorem Ipsum doler init..."
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-9 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        <div className="text-center relative text-gray-2 p-6 md:w-75 font-bold border border-box border-1 rounded-lg bg-whiter">
                          <button
                            onClick={toggleDropdown}
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-whiter px-4 py-2 text-left text-sm font-semibold text-gray-900 hover:bg-gray-50"
                            id="menu-button"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                          >
                            Gaming
                            <svg
                              className={`-mr-1 h-5 w-5 text-gray-400 ${isOpen ? 'transform rotate-180' : ''}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"

                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {isOpen && (
                            <div
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabIndex={-1}
                            >
                              <div className="py-1" role="none">
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Gaming
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Phone
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Vehicle
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Accessories
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Cosmetic
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Books
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Radios
                                </a>

                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Furniture
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Travel
                                </a>
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
                                  role="menuitem"
                                  tabIndex={-1}
                                >
                                  Others
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          FAQ
                        </label>
                        <input
                          type="text"
                          placeholder="Lorem Ipsum doler init..."
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-4.5">

                        <input
                          type="text"
                          placeholder="Lorem Ipsum doler init..."
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                      <Link
                        to="#"
                        className="inline-flex items-center justify-center bg-stroke py-1 px-7 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-7"
                      >
                        + Add FAQ
                      </Link>
                      <div className='mb-4.5 flex flex-col gap-5 xl:flex-row mt-25'>
                        <Link onClick={openDelete}
                          to="#"
                          className="inline-flex items-center justify-center w-1/4 rounded-md gap-2.5 bg-redlight py-4 px-10 text-center font-medium text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >

                          Delete
                        </Link>
                        <Link onClick={openBlock}
                          to="#"
                          className="inline-flex items-center justify-center w-1/4 rounded-md gap-2.5 bg-redlight py-4 px-10 text-center font-medium text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >

                          Blocked
                        </Link>
                        <Link
                          to="#"
                          className="inline-flex items-center ml-40 justify-center gap-5 w-1/4 rounded-md gap-2.5 bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >

                          Save
                        </Link>
                      </div>


                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-bold text-2xl m-10 md:text-3xl lg:text-4xl m-5 md:m-10">
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
                <Block />
              </div>
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
function setShowDelete(arg0: boolean) {
  throw new Error('Function not implemented.');
}

