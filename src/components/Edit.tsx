import React from 'react'

export const Edit = () => {
  return (
   <div className='  w-170'>
     <div className='text-meta-3 text-3xl font-black text-center items-center justify-center'>Edit Order Details</div>
     <div className='flex  ml-20 mt-5 '>
<div>
<label htmlFor="">Lessee name</label>
<input type="text" placeholder='Albert' className='border border-box mt-2  p-2.5 w-60 rounded border-2'/>
</div>
<div>
<label htmlFor="">Phone number</label>
<input type="text" placeholder='+65 123 213' className='border w-60 border-box mt-2 p-2.5 rounded border-2'/>
</div>
     </div>
     <div className='ml-20 mt-8'>
        <label htmlFor="">Address</label>
        <br />
        <input type="text" placeholder='Anson,Tanjong Pagar07, 08, Singapore' className='border border-box Adsalomn mt-2 p-2.5 rounded border-2'/>

     </div>
     <div className='text-center mt-8'>
  <button  className='text-white bg-meta-3 p-4 w-50 ml-8 text-center rounded-lg'>Save</button>
  </div>
   </div>
  )
}
