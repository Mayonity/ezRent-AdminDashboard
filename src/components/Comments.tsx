import React, { useState } from 'react';
import Delete from './ComDelete';

export const Comments = () => {
  const [showDelete, setShowDelete] = useState(false);

  const closeDelete = () => {
    setShowDelete(false);
  };

  const openDelete = () => {
    console.log("Delete button clicked");
    setShowDelete(true);
  };

  const closeDeleteLog = () => {
    console.log("Closing delete form");
    setShowDelete(false);
  };

  return (
    <div className="flex bg-white w-full p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center ml-10 text-4xl font-bold leading-9 tracking-tight text-meta-3">
          Comments <span className="text-sm">(2)</span>
        </h2>
        <br />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()} // Prevent default form submission
        className="max-w-2xl bg-white rounded-lg p-2 mx-auto w-full border border-box"
      >
        <div className="">
          <textarea
            placeholder="comment"
            className="w-full bg-gray-100 rounded text-xs leading-normal resize-none h-25 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-gray-2"
          >
            This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment
          </textarea>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start px-4">
            <button onClick={openDelete}>
              <input type="submit" className="px-10 py-3 rounded-md text-white text-sm bg-[#D40915]" value="Delete" />
            </button>
          </div>
          <h1 className="text-sm text-gray-2">March 23, 2023</h1>
        </div>
      </form>

      <br />
      <div className="w-full h-0.5 bg-gray-2 opacity-40"></div>

      <form
        onSubmit={(e) => e.preventDefault()} // Prevent default form submission
        className="max-w-2xl bg-white rounded-lg mt-10 p-2 mx-auto w-full border border-box"
      >
        <div className="">
          <textarea
            placeholder="comment"
            className="w-full bg-gray-100 rounded text-xs leading-normal resize-none h-25 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-gray-2"
          >
            This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment This is 1st comment
          </textarea>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start px-4">
            <button onClick={openDelete}>
              <input type="submit" className="px-10 py-3 rounded-md text-white text-sm bg-[#D40915]" value="Delete" />
            </button>
          </div>
          <h1 className="text-sm text-gray-2">March 23, 2023</h1>
        </div>
      </form>

      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-3xl shadow-lg bg-white">
              <button onClick={closeDelete} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#CACACA">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-6">
                <Delete />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
