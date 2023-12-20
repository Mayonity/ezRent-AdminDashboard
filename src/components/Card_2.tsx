import React from 'react';

const Card = () => {
  return (
    <div className='bg-[#9D26FB] lg:w-full md:w-59 rounded-lg h-25 flex space-x-9 md:space-x-3 p-5 mb-4 md:mb-0 mr-5'>
      <div className="flex md:h-11.5 mt-1 md:w-11.5 items-center justify-center  rounded-full  bg-[#C46CFC] dark:bg-lightblue mb-4 md:mb-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="vuesax/linear/messages-2">
            <g id="messages-2">
              <path id="Vector" d="M18.4698 16.83L18.8598 19.99C18.9598 20.82 18.0698 21.4 17.3598 20.97L13.1698 18.48C12.7098 18.48 12.2599 18.45 11.8199 18.39C12.5599 17.52 12.9998 16.42 12.9998 15.23C12.9998 12.39 10.5398 10.09 7.49985 10.09C6.33985 10.09 5.26985 10.42 4.37985 11C4.34985 10.75 4.33984 10.5 4.33984 10.24C4.33984 5.68999 8.28985 2 13.1698 2C18.0498 2 21.9998 5.68999 21.9998 10.24C21.9998 12.94 20.6098 15.33 18.4698 16.83Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path id="Vector_2" d="M13 15.23C13 16.42 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.33C2.86 18.4 2 16.91 2 15.23C2 13.47 2.94 11.92 4.38 11C5.27 10.42 6.34 10.09 7.5 10.09C10.54 10.09 13 12.39 13 15.23Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
        </svg>

      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-bold text-white dark:text-white mb-2">
          Rating
        </h4>
        <span className="text-md font-medium text-white">4.57</span>
      </div>
      <div className='h-15 w-0.5 bg-white'></div>
      <div className="flex flex-col">
        <h4 className="lg:text-1xl md:text-xs font-bold text-white dark:text-white mb-2">
          Total products
        </h4>
        <span className="lg:text-md font-bold text-white md:text-sm">345</span>
      </div>
    </div>
  );
};

export default Card;
<div className='bg-[#9D26FB] w-full md:w-80 rounded-lg h-25 flex space-x-9 md:space-x-5 p-5 mb-4 md:mb-0'>
  <div className="flex md:h-11.5 mt-1 md:w-11.5 items-center justify-center  rounded-full bg-[#C46CFC] dark:bg-lightblue mb-4 md:mb-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/messages-2">
        <g id="messages-2">
          <path id="Vector" d="M18.4698 16.83L18.8598 19.99C18.9598 20.82 18.0698 21.4 17.3598 20.97L13.1698 18.48C12.7098 18.48 12.2599 18.45 11.8199 18.39C12.5599 17.52 12.9998 16.42 12.9998 15.23C12.9998 12.39 10.5398 10.09 7.49985 10.09C6.33985 10.09 5.26985 10.42 4.37985 11C4.34985 10.75 4.33984 10.5 4.33984 10.24C4.33984 5.68999 8.28985 2 13.1698 2C18.0498 2 21.9998 5.68999 21.9998 10.24C21.9998 12.94 20.6098 15.33 18.4698 16.83Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Vector_2" d="M13 15.23C13 16.42 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.33C2.86 18.4 2 16.91 2 15.23C2 13.47 2.94 11.92 4.38 11C5.27 10.42 6.34 10.09 7.5 10.09C10.54 10.09 13 12.39 13 15.23Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>
    </svg>

  </div>

  <div className="flex flex-col">
    <h4 className="text-1xl font-bold text-white dark:text-white mb-2">
      Rating
    </h4>
    <span className="text-xl font-medium text-white">4.57</span>
  </div>
  <div className='h-15 w-0.5 bg-white'></div>
  <div className="flex flex-col">
    <h4 className="text-1xl font-bold text-white dark:text-white mb-2">
      Reviews
    </h4>
    <span className="text-xl font-medium text-white">128</span>
  </div>
</div>