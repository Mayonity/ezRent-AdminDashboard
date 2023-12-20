// Import required modules
import React from 'react';

// Modal component
const ComDelete: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <div className="mb-4">
          <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-30 mt-5'>
            <path d="M71.75 20.4317C60.3725 19.3042 48.9267 18.7234 37.515 18.7234C30.75 18.7234 23.985 19.0651 17.22 19.7484L10.25 20.4317" stroke="#D60000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.34" d="M29.0415 16.9809L29.7932 12.505C30.3398 9.25921 30.7498 6.83337 36.524 6.83337H45.4757C51.2498 6.83337 51.694 9.39587 52.2065 12.5392L52.9582 16.9809" stroke="#D60000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M64.404 31.2284L62.1832 65.6342C61.8074 70.9984 61.4999 75.1667 51.9674 75.1667H30.0324C20.4999 75.1667 20.1924 70.9984 19.8165 65.6342L17.5957 31.2284" stroke="#D60000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.34" d="M35.2939 56.375H46.6714" stroke="#D60000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.34" d="M32.4585 42.7084H49.5418" stroke="#D60000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
         
          <h1 className='mr-5 text-xl font-bold mt-2'>Are you sure you want <br /> to delete this Comment</h1>
          <div className='flex justify-around w-80 mt-10 ml-6'>
            <button className='bg-[#F1F5F9] border-box border p-3 w-30 rounded-md'>Cancel</button>
            <button className='bg-[#D40915] text-white p-3 w-30 rounded-md'>Delete</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComDelete;
