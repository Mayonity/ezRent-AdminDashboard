import React, { useState } from 'react'
import Delete from "../assets/trash.png"
export const Review = () => {
  const [open, setOpen] = useState(false)
  const openDeletePopup = () => {
    setOpen(true)
  }
  const closeDeletePopup = () => {
    setOpen(false)
  }
  return (
    <div className="flex bg-white  p-10 flex-col justify-center   rounded-md">
      <div className=" ">

        <div className='flex justify-between 2xl:text-xl text-xs'>
          <h1 className='text-gray-2'>
            <span className='!text-black font-bold'>By: </span>Adin
          </h1>
          <h1 className='text-gray-2'>
            <span className='!text-black font-bold'>To: </span>Devis
          </h1>
        </div>

        <div className='bg-gray-2 h-0.5  mt-4 mb-2 opacity-40'></div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between'>
            <h1 className='px-3 py-1 border border-box rounded'>
              4
            </h1>
            <div className='flex gap-2 items-center justify-between'>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.68379 13.4309C8.00158 13.2391 8.39946 13.2391 8.71726 13.4309L11.9395 15.3758C12.6968 15.8329 13.6311 15.1539 13.4301 14.2924L12.575 10.6269C12.4907 10.2654 12.6135 9.88691 12.8941 9.64386L15.7425 7.17628C16.4111 6.59708 16.0537 5.49882 15.1722 5.42404L11.4241 5.10604C11.0545 5.07469 10.7326 4.84135 10.5879 4.49985L9.12124 1.03944C8.77665 0.226408 7.62439 0.226407 7.2798 1.03944L5.81317 4.49985C5.66843 4.84135 5.34657 5.07469 4.97699 5.10604L1.22882 5.42404C0.347393 5.49882 -0.0100166 6.59708 0.658581 7.17628L3.50698 9.64386C3.78755 9.88691 3.91039 10.2654 3.82606 10.6269L2.97093 14.2924C2.76997 15.1539 3.7042 15.8329 4.46152 15.3758L7.68379 13.4309Z" fill="#FFC107" />
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.68379 13.4309C8.00158 13.2391 8.39946 13.2391 8.71726 13.4309L11.9395 15.3758C12.6968 15.8329 13.6311 15.1539 13.4301 14.2924L12.575 10.6269C12.4907 10.2654 12.6135 9.88691 12.8941 9.64386L15.7425 7.17628C16.4111 6.59708 16.0537 5.49882 15.1722 5.42404L11.4241 5.10604C11.0545 5.07469 10.7326 4.84135 10.5879 4.49985L9.12124 1.03944C8.77665 0.226408 7.62439 0.226407 7.2798 1.03944L5.81317 4.49985C5.66843 4.84135 5.34657 5.07469 4.97699 5.10604L1.22882 5.42404C0.347393 5.49882 -0.0100166 6.59708 0.658581 7.17628L3.50698 9.64386C3.78755 9.88691 3.91039 10.2654 3.82606 10.6269L2.97093 14.2924C2.76997 15.1539 3.7042 15.8329 4.46152 15.3758L7.68379 13.4309Z" fill="#FFC107" />
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.68379 13.4309C8.00158 13.2391 8.39946 13.2391 8.71726 13.4309L11.9395 15.3758C12.6968 15.8329 13.6311 15.1539 13.4301 14.2924L12.575 10.6269C12.4907 10.2654 12.6135 9.88691 12.8941 9.64386L15.7425 7.17628C16.4111 6.59708 16.0537 5.49882 15.1722 5.42404L11.4241 5.10604C11.0545 5.07469 10.7326 4.84135 10.5879 4.49985L9.12124 1.03944C8.77665 0.226408 7.62439 0.226407 7.2798 1.03944L5.81317 4.49985C5.66843 4.84135 5.34657 5.07469 4.97699 5.10604L1.22882 5.42404C0.347393 5.49882 -0.0100166 6.59708 0.658581 7.17628L3.50698 9.64386C3.78755 9.88691 3.91039 10.2654 3.82606 10.6269L2.97093 14.2924C2.76997 15.1539 3.7042 15.8329 4.46152 15.3758L7.68379 13.4309Z" fill="#FFC107" />
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.68379 13.4309C8.00158 13.2391 8.39946 13.2391 8.71726 13.4309L11.9395 15.3758C12.6968 15.8329 13.6311 15.1539 13.4301 14.2924L12.575 10.6269C12.4907 10.2654 12.6135 9.88691 12.8941 9.64386L15.7425 7.17628C16.4111 6.59708 16.0537 5.49882 15.1722 5.42404L11.4241 5.10604C11.0545 5.07469 10.7326 4.84135 10.5879 4.49985L9.12124 1.03944C8.77665 0.226408 7.62439 0.226407 7.2798 1.03944L5.81317 4.49985C5.66843 4.84135 5.34657 5.07469 4.97699 5.10604L1.22882 5.42404C0.347393 5.49882 -0.0100166 6.59708 0.658581 7.17628L3.50698 9.64386C3.78755 9.88691 3.91039 10.2654 3.82606 10.6269L2.97093 14.2924C2.76997 15.1539 3.7042 15.8329 4.46152 15.3758L7.68379 13.4309Z" fill="#FFC107" />
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.68379 13.4309C8.00158 13.2391 8.39946 13.2391 8.71726 13.4309L11.9395 15.3758C12.6968 15.8329 13.6311 15.1539 13.4301 14.2924L12.575 10.6269C12.4907 10.2654 12.6135 9.88691 12.8941 9.64386L15.7425 7.17628C16.4111 6.59708 16.0537 5.49882 15.1722 5.42404L11.4241 5.10604C11.0545 5.07469 10.7326 4.84135 10.5879 4.49985L9.12124 1.03944C8.77665 0.226408 7.62439 0.226407 7.2798 1.03944L5.81317 4.49985C5.66843 4.84135 5.34657 5.07469 4.97699 5.10604L1.22882 5.42404C0.347393 5.49882 -0.0100166 6.59708 0.658581 7.17628L3.50698 9.64386C3.78755 9.88691 3.91039 10.2654 3.82606 10.6269L2.97093 14.2924C2.76997 15.1539 3.7042 15.8329 4.46152 15.3758L7.68379 13.4309Z" fill="#FFC107" />
              </svg>
            </div>
          </div>
          <div></div>
          <h1 className='text-gray-2 text-xs font-bold'>
            March 23,2023
          </h1>
        </div>
      </div>
      <div>
        <br />
        <div>
          <p className='text-gray-2 2xl:text-sm text-[10px] p-3 border border-box rounded-lg '>
            I rented the PlayStation 5, and it has been an
            incredible experience. The graphics are stunning,
            and the console runs smoothly. The DualSense
            controller with haptic feedback adds a whole new
            level of immersion to the games
          </p>
        </div>
        <br />
        <div className="flex justify-between ">
          <button
            className="flex justify-center bg-danger  rounded border border-stroke py-3 px-12 2xl:text-xl text-xs font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white "
            type="submit"
            onClick={openDeletePopup}
          >
            Delete
          </button>
          <button
            className="flex justify-center rounded bg-meta-3 py-3 px-12 2xl:text-xl text-xs font-medium text-gray hover:bg-opacity-70"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-50 z-50">
            <div className="relative w-80 max-w-lg ">
              <div className="relative  rounded-lg border-none  border-2  bg-white shadow-2xl">

                <div className="w-140 px-12 py-8">
                  <button onClick={closeDeletePopup} className="absolute top-3  right-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                  </button>
                  <div>
                    <img src={Delete} alt="delete" className="w-[82px] h-[82px] mx-auto" />
                    <p className='font-bold my-5 text-black-2 text-center'>Are you sure you want to delete this review?</p>
                    <div className='flex justify-between'>
                      <button className='py-3 px-6 text-xs bg-[#CACACA] rounded-md text-black-2'onClick={closeDeletePopup} >Cancel</button>
                      <button className='bg-[#D60000] py-3 px-6 text-xs text-white rounded-md'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>

  )
}
