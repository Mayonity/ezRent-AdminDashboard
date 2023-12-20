const Card1 = () => {
    return (
      <div className='bg-green lg:w-full md:w-59  rounded-lg h-25 flex space-x-9 md:space-x-5 p-5 mb-4 md:mb-0'>
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-greenlight dark:bg-lightblue">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
      
            <div className=" flex ">
              <div>
                <h4 className="text-1xl font-bold text-white dark:text-white">
                Total users
                </h4>
                <span className="text-xl font-medium text-white " >77</span>
              </div>
      
              
            </div>
       </div>
    );
  };
  
  export default Card1;
  