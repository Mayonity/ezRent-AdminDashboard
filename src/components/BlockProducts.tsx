import React from 'react'

export const Block = () => {
  return (
<div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
        <h2 className=" text-center ml-10 text-3xl font-bold leading-9 tracking-tight text-[#C70813] ">
         Block this Products
        </h2>
        <br />
      </div>
<div>
    <textarea name="" id="" className='bg-white text-meta-9 border-2 border-box w-100 h-40 rounded-lg p-5'> Add remarks</textarea>
    <br />
  <div className='text-center mt-5'>
  <button  className='text-white bg-[#C70813] p-4 w-50 ml-10 text-center rounded-lg'>Block</button>
  </div>
</div>
      
      
    </div>
  )
}
