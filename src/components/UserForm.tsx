import React from 'react';

const SignInForm = () => {
  return (
    <form>
      <h1 className='text-2xl font-bold text-[#0E9F6E] text-center'>Edit User Information</h1>
      <div className="mb-4 mt-10">
        <label className="block text-black dark:text-white mb-2.5 2xl:text-xl text-xs font-bold">User ID</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full  rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 2xl:py-3 2xl:px-4 text-xs font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white mb-2.5 2xl:text-xl text-xs font-bold">Name</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full  rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 2xl:py-3 2xl:px-4 text-xs font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black dark:text-white mb-2.5 2xl:text-xl text-xs font-bold">Phone Number</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full  rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 2xl:py-3 2xl:px-4 text-xs font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white mb-2.5 2xl:text-xl text-xs font-bold">Email</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full  rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 2xl:py-3 2xl:px-4 text-xs font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black dark:text-white mb-2.5 2xl:text-xl text-xs font-bold">Commission Rate</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full  rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 2xl:py-3 2xl:px-4 text-xs font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="text-center mt-4">
        <button className="w-full md:w-32 rounded bg-meta-3 p-3 font-medium text-gray">
          Save
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
