import React from 'react'

export const Verify = () => {
  return (
    <div className="flex items-center justify-center h-full ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center ">
      <div className="mb-4 ">
   <h1 className='text-2xl font-bold text-meta-3 '>OTP Verification</h1>
   <br />
   <input type="text" placeholder='Enter OTP' className='border border-box p-3 w-55 rounded'/>
   <br />
   <button className='bg-meta-3 p-3 w-55 mt-5 text-white rounded-md'>Verify</button>
      </div>
    </div>
  </div>
  )
}
