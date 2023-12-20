import React from 'react';

const Card = () => {
  return (
    <div className='bg-[#50AE55] lg:w-full md:w-59 rounded-lg h-25 flex space-x-9 md:space-x-5 p-5 mb-4 md:mb-0 mr-5'>
    <div className="flex md:h-11.5 mt-1 md:w-11.5 items-center justify-center  rounded-full bg-[#96CE98] dark:bg-lightblue mb-4 md:mb-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vuesax/linear/repeat-circle">
<g id="repeat-circle">
<g id="Group">
<path id="Vector" d="M7.5 8.34003H14.9C15.79 8.34003 16.5 9.06 16.5 9.94V11.71" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M9.19 6.65997L7.5 8.34003L9.19 10.03" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M16.5 15.66H9.10001C8.21001 15.66 7.5 14.94 7.5 14.06V12.29" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M14.8101 17.34L16.5001 15.66L14.8101 13.97" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path id="Vector_5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
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
 
 