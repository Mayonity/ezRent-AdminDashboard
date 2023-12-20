import React, { useState } from 'react'
import { Block } from './Block';
import image from '../assets/Mask group.png'
import { BlockChat } from './BlockChat';

export const Chatmod = () => {
  const [showBlock, setShowBlock] = useState(false);
  const openBlock = () => {
    setShowBlock(true);
  };

  const closeBlock = () => {
    console.log("Closing sign-in form");
    setShowBlock(false);
  }; 
  return (
    <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
    <div className='flex'>
    <h2 className='text-danger flex'>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#D34053'><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>This Chat is blocked due to...</h2>
    </div>
      <br />
    </div>

    <div className=" sm:mx-auto sm:w-full sm:max-w-sm " >
      <form className=" flex gap-10" action="#" method="POST">
       <div>
        <label htmlFor="">From</label>
{/* <div className='bg-gray p-1 text-gray-2 w-45 border border-box rounded'>
Devis miller
</div> */}
<input className='bg-gray p-1 text-gray-2 w-45 border border-box rounded outline-none' placeholder='Devis miller'/>

       </div>
       <div>
        <label htmlFor="">To</label>
        <input className='bg-gray p-1 text-gray-2 w-45 border border-box rounded outline-none' placeholder='John Doe'/>
       </div>
      
      </form>

     <div className='border-b border-box mt-10 w-100 '></div>
    </div>
    
    <div className='mt-4 w-100 h-60 border border-box rounded-lg p-5'>
        <div className='flex gap-2 '>
       <img src={image} alt="" className='rounded-full'/>
        <h1>Devis miller</h1>
        </div>
        <div className='para mt-4 text-gray-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard .
        </div>

    </div>
    <div className='justify-center items-center text-center mt-5'>
    <button className='text-[#D40915] bg-[#EEB3B4] justify-center items-center text-center p-3 w-50 ml-12 rounded-lg' onClick={openBlock}>Block</button>
</div>
{showBlock && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-2 bg-opacity-5 z-50">
    <div className="relative w-full max-w-lg bg-white">
      <div className="relative rounded-lg shadow-lg bg-white">
        <button onClick={closeBlock} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>
        <div className="pl-7">
          <BlockChat />
        </div>
      </div>
    </div>
  </div>
)}
  </div>
  )
}
