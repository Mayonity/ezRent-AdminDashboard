import React, { useState } from 'react'

export const EditOffers = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <h1 className='text-meta-3 text-3xl font-bold ml-15'>Edit Offers</h1>
      <div>
<br />
        <label htmlFor="" className='ml-15 mt-5 font-bold'>Edit Price</label>
        <br />
        <input type="text" className='p-3 border border-box rounded-md w-50 ml-15' placeholder='$10'/>
      </div>
      
      <div className="mt-5">
      <label htmlFor="" className='ml-15 mt-5 font-bold '>Status</label>
    <div className="text-center relative text-gray-2 h-15 p-3 w-50 ml-15 font-bold border border-box border-1 rounded-lg bg-whiter">
     
     <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center gap-x-1.5 rounded-md bg-whiter px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Accepted
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
          className="absolute right-0 z-10 mt-2 w-70 lg:w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              Accepted
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
              role="menuitem"
              tabIndex={-1}
            >
              Rejected
            </a>
       
          </div>
        </div>
      )}
    </div>
  </div>
    </div>
    
  </div>
  )
}
