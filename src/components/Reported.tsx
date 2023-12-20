import React, { useState } from 'react'

const Reported = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderModel, setShowOrderModel] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-xl">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
<h1>From:  <span className='text-gray-2'>Devis</span></h1>
<h1>Type: <span className='text-gray-2'>Report listening</span></h1>
<h1>Issue: <span className='text-gray-2'>Report message by reporter</span></h1>
<h1>Status</h1>
<div className="text-center relative text-gray-2 h-13 p-2 md:w-50 font-bold border border-box border-1 rounded-lg bg-white">
<button
  onClick={toggleDropdown}
  type="button"
  className="inline-flex w-full justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
  id="menu-button"
  aria-expanded={isOpen}
  aria-haspopup="true"
>
  <span className="ml-2">Pending</span>
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
                  className="absolute right-0 text-gray-2 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                   Pending
                    </a>
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                     Investigating
                    </a>
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Confirming
                    </a>
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                     Completed
                    </a>
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                     Rejecteds
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className='border-b border-box mt-10 w-100 '></div>

            <div>
              <input type="text" placeholder='Add Comment' className='h-30 w-100 p-2  border mt-10 border-box border-1 text-left rounded-lg'/>
            </div>
          <div className='justify-center text-center'>
          <button className='w-50 h-15 bg-meta-3 text-white rounded-lg mt-10 ml-14 text-center'>Save</button>
          </div>
    </div>
 
 
  </div>
  )
}

export default Reported
