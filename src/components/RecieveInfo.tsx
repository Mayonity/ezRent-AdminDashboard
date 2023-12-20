import React from 'react'

export const RecieveInfo = () => {
  return (
    <div className="flex bg-transparent w-150 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight text-meta-3 -ml-30">
      Edit Receiver Information
      </h2>
      <br />
    </div>

    <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
  
     <div className='-ml-30'>
        <label htmlFor=""  className='ml-5 mt-5'>Receiver Name</label>

        <input type="password" placeholder='John Doe' className='p-3 w-125 mt-5 rounded-md border border-2 border-box text-box ml-5' />

        <label htmlFor="" className='ml-5 mt-5'>Phone Number</label>

        <input type="password"  className='p-3 w-125 mt-5 rounded-md border border-2  border-box text-box ml-5 ' />
        <button className='bg-meta-3 p-4 w-50 mt-5 text-white text-center ml-35  rounded-md'>Save</button>
     </div>
    </div>
    
  </div>
  )
}
