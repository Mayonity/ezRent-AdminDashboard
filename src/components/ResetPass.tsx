import React from 'react'

export const ResetPass = () => {
  return (
    <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md bg-white">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-meta-3 -ml-12">
       Reset Password
      </h2>
      <br />
    </div>

    <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='p-3 bg-meta-3 text-white w-100 text-center -ml-10 rounded-md'>Sent Reset Password email</div>
<div className='flex mt-5 gap-1 -ml-5'>
    <div className='bg-box h-0.5 w-100 mt-3'></div>
    <div className='text-gray-2'>OR</div>
    <div className='bg-box h-0.5 w-100 mt-3'></div>

</div>
     <div className='-ml-10'>
        <input type="password" placeholder='New Password ' className='p-3 w-100 mt-5 rounded-md border border-box text-box' />
        <input type="password" placeholder='Confirm Password ' className='p-3 w-100 mt-5 rounded-md border border-box text-box' />
        <button className='bg-meta-3 p-4 w-50 mt-5 text-white text-center ml-25  rounded-md'>Save</button>
     </div>
    </div>
    
  </div>
  )
}
