// Import required modules
import React from 'react';

// Modal component
const CancelOrder: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <div className="mb-4">
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-35'>
<path opacity="0.4" d="M52.15 7H31.85C29.47 7 26.11 8.40002 24.43 10.08L10.08 24.43C8.40002 26.11 7 29.47 7 31.85V52.15C7 54.53 8.40002 57.89 10.08 59.57L24.43 73.92C26.11 75.6 29.47 77 31.85 77H52.15C54.53 77 57.89 75.6 59.57 73.92L73.92 59.57C75.6 57.89 77 54.53 77 52.15V31.85C77 29.47 75.6 26.11 73.92 24.43L59.57 10.08C57.89 8.40002 54.53 7 52.15 7Z" fill="#C90000"/>
<path d="M45.71 42L56.105 31.605C57.12 30.59 57.12 28.91 56.105 27.895C55.09 26.88 53.41 26.88 52.395 27.895L42 38.29L31.605 27.895C30.59 26.88 28.91 26.88 27.895 27.895C26.88 28.91 26.88 30.59 27.895 31.605L38.29 42L27.895 52.395C26.88 53.41 26.88 55.09 27.895 56.105C28.42 56.63 29.085 56.875 29.75 56.875C30.415 56.875 31.08 56.63 31.605 56.105L42 45.71L52.395 56.105C52.92 56.63 53.585 56.875 54.25 56.875C54.915 56.875 55.58 56.63 56.105 56.105C57.12 55.09 57.12 53.41 56.105 52.395L45.71 42Z" fill="#C90000"/>
</svg>


         
          <h1 className='mr-5 text-xl font-bold mt-2'>Are you sure you want <br /> to delete this product?</h1>
          <div className='flex justify-around w-80 mt-10 ml-6'>
            <button className='bg-[#F1F5F9] border-box border p-3 w-30 rounded-md'>No</button>
            <button className='bg-[#D40915] text-white p-3 w-30 rounded-md'>Yes</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
