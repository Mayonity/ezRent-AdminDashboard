import React, { ChangeEvent, useState } from 'react';

const Uploading: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  return (
    <div className="col-span-5 xl:col-span-2 ">
            <div className="  bg-white   ">
              <br />
           
     <h1 className='text-4xl text-center text-meta-3 text-bold'>Add Category</h1>
     <p className='text-gray-2 text-xs mt-2 ml-8'>Add your product category and necessary information from here</p>
              <div className="p-7">
                <form action="#">
                  <div className=" flex items-center gap-3">
                  <h1 className='text-xl font-bold'>Category Icon</h1>
                  
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 mt-2  block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-box bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 15C15.1569 15 16.5 13.6569 16.5 12C16.5 10.3431 15.1569 9 13.5 9C11.8431 9 10.5 10.3431 10.5 12C10.5 13.6569 11.8431 15 13.5 15Z" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33H22.5C30 33 33 30 33 22.5V15" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.625 7.5H31.875" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round"/>
<path d="M27.75 11.625V3.375" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round"/>
<path d="M4.005 28.425L11.4 23.46C12.585 22.665 14.295 22.755 15.36 23.67L15.855 24.105C17.025 25.11 18.915 25.11 20.085 24.105L26.325 18.75C27.495 17.745 29.385 17.745 30.555 18.75L33 20.85" stroke="#0E9F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      </span>
          
               
                      <p>Drag your image here</p>
                      <p className='text-gray-2'>(Only * jpg and *png images will be accepted)</p>
                    </div>
                  </div>
                  <div className="md:w-full lg:w-2/3">
                    <label htmlFor="" className='text-1xl'>Category name</label>
            <input
              type="text"
         
              className="w-100 p-3  border border-box rounded-lg"
            />
          </div>
          <br />
                  <div className="flex justify-center gap-15 ">
                    <button
                      className="flex justify-center  rounded border border-stroke py-3 px-15 font-medium text-danger hover:shadow-1 dark:border-strokedark dark:text-white "
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-meta-3 py-3 px-15 font-medium text-gray hover:bg-opacity-70"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
  );
};

export default Uploading;
