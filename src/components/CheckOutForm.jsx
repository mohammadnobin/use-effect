import React from 'react'

const CheckOutForm = () => {
  return (
    <div className='pt-[119px] pb-[129px]'>
      <h2 className='pb-[42px] font-dm-sans font-bold text-[39px] text-[#262626] leading-[50px]  '>
        Billing Details
      </h2>
      <div className="lg:w-3/4">
        <form action="" id='lskdj'>
          <div className="grid grid-cols-2 gap-x-[ 39px]">
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>First Name *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='First Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Last Name</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Last Name' required />
            </div>
          </div>
          <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Companye Name (optional)</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Company Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Country *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Company Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Companye Name (optional)</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Company Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Companye Name (optional)</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Company Name' required />
            </div>
        </form>
      </div>
      <button id='lskdj' type='submit'>button</button>
    </div>
  )
}

export default CheckOutForm  
