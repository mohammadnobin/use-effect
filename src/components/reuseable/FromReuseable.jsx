import React from 'react'

const FromReuseable = (props) => {
  return (
    <>
     <div className="pb-[48px]">
          <h3 className='font-dm-sans font-bold text-[20px] text-[#262626] leading-[26.04px]'>{props.formTitle}</h3>
        </div>
        <form action="">
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px]'>Name</h3>
            <input className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' type="text" placeholder='Your name here' required />
          </div>
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email</h3>
            <input className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' type="email" placeholder='Your email here' required />
          </div>
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>{props.formItem}</h3>
            <textarea className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' placeholder={props.formplaceholder} required></textarea>
          </div>
          <div className="mt-[29px]">
            <button type='submit' className='py-[16px] px-[85px] bg-black text-white font-dm-sans font-bold text-sm leading-[18px]'>Post</button>
          </div>
        </form>
    </>
  )
}

export default FromReuseable