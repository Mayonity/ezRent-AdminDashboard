/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri"
import Editimage from "../components/EditImage"
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
import Image from '../assets/Mask group.png';

const EditImage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [showDelete, setShowDelete] = useState(false);

    const openDelete = () => {
        setShowDelete(true);
    }; const closeDelete = () => {
        setShowDelete(false);
    };
    const [showBlock, setShowBlock] = useState(false);
    const openBlock = () => {
        setShowBlock(true);
    };
    const closeBlock = () => {
        console.log("Closing sign-in form");
        setShowBlock(false);
    };
    const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
    const toggleDropdown1 = () => {
        setIsOpenDropdown1(!isOpenDropdown1);
    }
    return (
        <div>

            <div className='xl:w-[1100px]  2xl:w-full  mt-10 w-full m-5  '>
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
                </h1>                <hr className='2xl:my-7 my-5 md:block hidden' />
                <div className='lg:flex gap-0'>
                    <div className=' lg:w-[300px] md:w-full '>
                        <Editimage />
                    </div>
                    <div className='border bg-gray-300 ml-5 lg:block hidden w-[1px] mt-16  h-[700px]'>

                    </div>
                    <hr className='border lg:hidden block my-10 ' />
                    <div className='mx-5 '>
                        <h1 className='text-[#111827] 2xl:text-xl text-lg md:text-start text-center font-bold'>Product information</h1>
                        <div className='xl:flex xl:gap-5 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Product Name*</label>
                                <div className=' w-full  mt-2  rounded-[15px]'>
                                    <textarea placeholder="" className='text-[10px] cursor-pointer 2xl:w-[520px] h-10 px-3 xl:w-[370px] md:w-[330px] w-[95%] mx-auto  outline-none focus:border-[#0E9F6E]  border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2'>
                                        Sony play station 5
                                    </textarea>

                                </div>
                            </div>
                            <div className='flex xl:gap-5 gap-6 md:mt-0 mt-5 '>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Price (per day)*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <textarea className='text-[10px] cursor-pointer 2xl:w-[220px] px-3 h-10 xl:w-[150px] w-[130px] outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2' >
                                            40
                                        </textarea>
                                    </div>
                                </div>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Quantity*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <textarea className='text-[10px] cursor-pointer 2xl:w-[220px] h-10 px-3 xl:w-[150px] w-[130px] outline-none focus:border-[#0E9F6E]  border-[#DEDEDE] border-2  rounded-[7px] 2xl:py-3 py-2'>
                                            5
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:flex xl:gap-5 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Tagline*</label>
                                <div className=' w-full mt-2   rounded-[15px]'>
                                    <textarea className='text-[10px] cursor-pointer 2xl:w-[520px] px-3 h-10 xl:w-[370px] md:w-[350px] w-[95%] outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2   rounded-[7px] 2xl:py-3 py-2'>
                                        Lorem ipsum dolor sit amet
                                    </textarea>
                                </div>
                            </div>
                            <div className='flex xl:gap-5 gap-6 md:mt-0 mt-5'>
                                <div>
                                    <label className='2xl:text-lg  text-[10px]'>Delivery/ collection fee*</label>
                                    <div className='mt-2  rounded-[15px]'>
                                        <textarea className='text-[10px] cursor-pointer 2xl:w-[220px] px-3 h-10 xl:w-[150px] w-[130px] outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2'>
                                            Delivery Fee
                                        </textarea>
                                    </div>
                                </div>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Refundable deposit*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <textarea className='text-[10px] cursor-pointer 2xl:w-[220px] px-3 h-10 xl:w-[150px] w-[130px]  outline-none focus:border-[#0E9F6E] border-[#DEDEDE] border-2 rounded-[7px] 2xl:py-3 py-2'>
                                            Refundable Deposit
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:flex xl:gap-5 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Description*</label>
                                <div>
                                    <textarea
                                        className=' text-xs  cursor-pointer  border-2 p-2 mt-2 rounded-[7px] px-3 2xl:h-[91px] 2xl:w-[760px] xl:w-[540px] border-[#DEDEDE] md:w-[350px] outline-none focus:border-[#0E9F6E] w-full h-[80px]'>
                                        The PlayStation 5 is the ultimate gaming console that delivers unparalleled performance and breathtaking experiences. Immerse yourself in stunning 4K graphics.
                                    </textarea>
                                </div>
                            </div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <label className='2xl:text-lg text-xs'>Category*</label><br />
                                    <button
                                        onClick={toggleDropdown}
                                        type="button"
                                        className="inline-flex   items-center justify-center  w-full   text-sm font-medium text-gray-700 "
                                    >
                                        <label></label>
                                        <div className='2xl:w-[220px] xl:w-[150px] w-[130px] border-[#DEDEDE] mt-2  flex  items-center justify-end border-2 2xl:h-[91px] h-[80px] rounded-[7px]'>
                                            <RiArrowDropDownLine className="2xl:text-6xl text-4xl right-0 flex items-center" />

                                        </div>
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right z-10 absolute 2xl:left-10 left-1  mt-2 2xl:w-48 w-40 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Gaming
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Backpack
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Clothes
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Vehicles
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Accessories
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Cosmetics
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Books
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Radios
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Furniture
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 pb-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Travel
                                                <hr className='my-2' />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className=' gap-10 mt-7'>
                            <div>
                                <label className='2xl:text-xl text-xs'>FAQ</label>
                                <div className=' w-full  mt-2 rounded-[7px]'>
                                    <textarea className='text-[10px] cursor-pointer w-[100%] border-[#DEDEDE] h-10 px-5 outline-none focus:border-[#0E9F6E] border-2 rounded-[7px] 2xl:py-3 py-2' >
                                        Lorem Ipsum
                                    </textarea>
                                </div>
                                <div className='  mt-5 rounded-[7px]'>
                                    <textarea className='text-[10px] cursor-pointer w-[100%] border-[#DEDEDE] h-10 px-5 outline-none focus:border-[#0E9F6E] border-2 rounded-[7px] 2xl:py-3 py-2 '>
                                        Lorem Ipsum
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className=' md:flex justify-between w-full md:mt-5 mt-5'>
                            <button className='text-[#0E9F6E] bg-[#F1F5F9] 2xl:py-3 py-2 2xl:text-xl text-xs 2xl:h-14 h-12 rounded-lg w-32 2xl:w-28'>+ Add FAQ</button>
                        </div>
                        <div className='mb-4.5 flex flex-col gap-5 xl:flex-row mt-25'>
                            <Link onClick={openDelete}
                                to="#"
                                className="inline-flex items-center justify-center md:w-1/4 w-44 rounded-md gap-2.5 bg-redlight py-4 px-10 text-center font-medium text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >

                                Delete
                            </Link>
                            <Link onClick={openBlock}
                                to="#"
                                className="inline-flex items-center justify-center md:w-1/4 w-44 rounded-md gap-2.5 bg-redlight py-4 px-10 text-center font-medium text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >

                                Block
                            </Link>
                            <Link
                                to="#"
                                className="inline-flex items-center md:ml-40 justify-center gap-5 md:w-1/4 w-44 rounded-md md:gap-2.5 bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >

                                Save
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default EditImage;
