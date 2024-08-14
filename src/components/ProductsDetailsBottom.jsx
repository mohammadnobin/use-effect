import React from 'react'
import { FaStar } from 'react-icons/fa6'

const ProductsDetailsBottom = () => {
  return (
    <>
        <div className="flex items-center gap-x-[62px] ">
            <div className="">
                <h4 className='font-dm-sans font-normal text-xl text-[#767676] leading-[29px]  '>Description</h4>
            </div>
            <div className="">
                <h4 className='font-dm-sans font-bold text-xl text-[#262626] leading-[26px] '>Reviews (1)</h4>
            </div>
        </div>
        <div className="border-b-[1px] border-[#F0F0F0] mb-[53px] mt-[42px]">
        <div className="border-b-[1px] border-[#F0F0F0] pb-[16px] ">
            <p className='font-dm-sans font-normal text-sm text-[#767676] leading-[30px]  '>1 review for Product</p>
        </div>

        <div className="justify-between pt-[23px] pb-[14px]  flex items-center">
            <div className="flex items-center gap-x-[37px] ">
                <div className="">
                    <h4 className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>John Ford</h4>
                </div>
                <div className="flex items-center text-[gold]">
                    <FaStar  className='w-[20px] h-[20px]' />
                    <FaStar  className='w-[20px] h-[20px]' />
                    <FaStar  className='w-[20px] h-[20px]' />
                    <FaStar  className='w-[20px] h-[20px]' />
                    <FaStar  className='w-[20px] h-[20px]' />
                </div>
            </div>
            <div className="font-dm-sans font-normal text-base text-[#767676] leading-[30px]">
                <h4>6 months ago</h4>
            </div>
        </div>
            <div className="pb-[15px]">
                <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
        </div>
        <div className="lg:w-[780px]">
            <div className="pb-[48px]">
                <h3 className='font-dm-sans font-bold text-[20px] text-[#262626] leading-[26.04px]'>Add a Review</h3>
            </div>
            <form action="">
            <div className="border-b-[1px] border-[#F0F0F0] ">
                <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px]'>Name</h3>
                <input className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' type="text" placeholder='Your name here' required  />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] ">
                <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px] '>Email</h3>
                <input className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' type="email" placeholder='Your email here' required />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] ">
                <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Review</h3>
                <textarea className='border-0 w-full focus-visible:outline-none pb-[16px] font-dm-sans font-normal text-[14px] text-[#262626] leading-[18.23px]' name="" id="requred" placeholder='Your review here' required></textarea>
            </div>
            <div className="mt-[29px]">
                <button type='submit' id='requred' className='py-[16px] px-[85px] bg-black text-white font-dm-sans font-bold text-sm leading-[18px]  '>Post</button>
            </div>

            </form>
        </div>
    </>
  )
}

export default ProductsDetailsBottom