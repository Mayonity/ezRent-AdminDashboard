import React from 'react';

const SignInForm: React.FC = () => {
  return (
    <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
        <h2 className=" text-center text-4xl font-bold leading-9 tracking-tight text-meta-3 ">
         Create new User
        </h2>
        <br />
      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder='example@example.com'
                className={`bg-bodydark text-form-input outline-none p-10 block w-full  border border-body border-2 rounded-md border-1 p-3   shadow-inner placeholder-gray-2 focus:ring-primary sm:text-sm sm:leading-6 text-gray-2`}
              
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
         Username
              </label>
             
            </div>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="current-password"
                required
                placeholder='exampleUsername'
                className={`bg-bodydark text-form-input outline-none p-10 block w-full  border border-body border-2 rounded-md border-1 p-3   shadow-inner placeholder-gray-2 focus:ring-primary sm:text-sm sm:leading-6 text-gray-2`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-meta-3 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline focus:ring focus:ring-offset focus:ring-indigo-600"
            >
              Create User
            </button>
          </div>
        </form>

       
      </div>
      
    </div>
  );
};

export default SignInForm;
