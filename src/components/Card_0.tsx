import React from 'react';

const Card = () => {
  return (
    <div className='bg-blue lg:w-full md:w-59 rounded-lg h-25 flex space-x-9 md:space-x-5 p-5 mb-4 md:mb-0 mr-5'>
      <div className="flex md:h-11.5 mt-1 md:w-11.5 items-center justify-center  rounded-full bg-lightblue dark:bg-lightblue mb-4 md:mb-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 21.61V12.54" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.92989 2.48004L4.58989 5.44004C3.37989 6.11004 2.38989 7.79004 2.38989 9.17004V14.82C2.38989 16.2 3.37989 17.88 4.58989 18.55L9.92989 21.52C11.0699 22.15 12.9399 22.15 14.0799 21.52L19.4199 18.55C20.6299 17.88 21.6199 16.2 21.6199 14.82V9.17004C21.6199 7.79004 20.6299 6.11004 19.4199 5.44004L14.0799 2.47004C12.9299 1.84004 11.0699 1.84004 9.92989 2.48004Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </div>

      <div className="flex flex-col">
        <h4 className="lg:text-1xl md:text-sm font-bold text-white dark:text-white mb-2">
          Total products
        </h4>
        <span className="lg:text-xl font-medium text-white md:text-sm">345</span>
      </div>
    </div>
  );
};

export default Card;
