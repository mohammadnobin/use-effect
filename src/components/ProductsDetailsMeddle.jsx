import React, { useState } from 'react'
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const ProductsDetailsMeddle = () => {

  let [count,setCount] = useState(0)

  let handledcrise = ()=>{
    if (count > 0) {
      setCount(count - 1)
    }

  }
  let handleIncrise = ()=>{
    setCount(count + 1)
  }

  return (
    <>
      <div className="pb-[123px] pt-[66px] lg:w-1/2">
        <h3 className='font-dm-sans font-bold text-[#262626] text-[39px] leading-[51px] '>Product</h3>
        <div className="flex items-center pt-[15px] pb-[24px] gap-x-[25px]">
          <div className="flex text-[gold] items-center">
            <FaStar className='w-[20px] h-[20px] '  />
            <FaStar className='w-[20px] h-[20px] '/>
            <FaStar className='w-[20px] h-[20px] '/>
            <FaStar className='w-[20px] h-[20px] '/>
            <FaStar className='w-[20px] h-[20px] '/>
          </div>
          <div className="">
            <h4 className='text-[#767676] font-dm-sans font-normal leading-[18px] '>1 Review</h4>
          </div>
        </div>
        <div className="flex items-center gap-x-[25px] pb-[24px] border-b-[1px] border-[#F0F0F0]">
          <div className="">
            <h4 className='font-dm-sans font-normal text-base text-[#767676] leading-[21px] '>
              <del>$000</del>
            </h4>
          </div>
          <div className="">
            <h4 className='font-dm-sans font-normal text-[20px] text-[#262626] leading-[26px] '>$44.00</h4>
          </div>
        </div>
        <div className="border-b-[1px] border-[#F0F0F0]">
          <div className="flex items-center pt-[30px]">
            <div className="w-[100px]">
              <h4 className='font-dm-sans font-bold text-[#262626] text-base leading-[23px]'>color:</h4>
            </div>
            <div className="flex items-center gap-x-[15px] ">
              <FaCircle className='text-[#cccccc] hover:scale-[1.5] duration-300 ease-in-out' />
              <FaCircle className='text-[#FF8686] hover:scale-[1.5] duration-300 ease-in-out' />
              <FaCircle className='text-[#7ED321] hover:scale-[1.5] duration-300 ease-in-out' />
              <FaCircle className='text-[#B6B6B6] hover:scale-[1.5] duration-300 ease-in-out' />
              <FaCircle className='text-[#15CBA5] hover:scale-[1.5] duration-300 ease-in-out' />
            </div>
          </div>
          <div className="flex items-center py-[30px]">
            <div className="w-[100px]">
              <h4 className='font-dm-sans font-bold text-[#262626] text-base leading-[23px]'>size:</h4>
            </div>
            <div className="">
              <select className='border-[#F0F0F0] border-[1px] w-[139px] focus-visible:outline-none font-dm-sans font-normal text-[#767676] text-base leading-[30px] px-4   ' name="" id="">
                <option value="">s</option>
                <option value="">m</option>
                <option value="">l</option>
                <option value="">xl</option>
                <option value="">xxl</option>
              </select>
            </div>
          </div>
          <div className="flex items-center pb-[30px]">
            <div className="w-[100px]">
              <h4 className='font-dm-sans font-bold text-[#262626] text-base leading-[23px]'>quantity:</h4>
            </div>
            <div className="flex items-center justify-around border-[#F0F0F0] border-[1px] w-[139px]  ">
              <div className="">
                <button onClick={handledcrise} className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '><FaMinus /></button>
              </div>
              <div className="">
                <h4 className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '> {count} </h4>
              </div>
              <div className="">
                <button onClick={handleIncrise} className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '><FaPlus /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] gap-x-[27px] border-[#F0F0F0] flex items-center py-[21px] ">
          <div className="">
            <h4 className='font-dm-sans font-bold text-[#262626] text-base leading-[23px]'>status:</h4>
          </div>
          <div className="">
            <h4 className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '>in stock</h4>
          </div>
        </div>
        <div className="border-b-[1px] border-[#F0F0F0] flex items-center gap-x-[20px] py-[30px] ">
          <div className="">
            <button className='border-[black] border-[1px] lg:py-[16px] lg:px-[43px] hover:bg-black hover:text-white duration-300 ease-in-out font-dm-sans font-bold text-sm text-[#262626] leading-[18px] capitalize '>add to wish list</button>
          </div>
          <div className="">
            <button className='border-[black] border-[1px] lg:py-[16px] lg:px-[43px] hover:bg-black hover:text-white duration-300 ease-in-out font-dm-sans font-bold text-sm text-[#262626] leading-[18px] capitalize '>add to cart</button>
          </div>
        </div>
        <div className="border-b-[1px] border-[#F0F0F0] flex items-center justify-between ">
          <div className="py-[24px]">
            <h3 className='font-dm-sans font-bold text-base text-[#262626] leading-[23px] '>FEATURES  & DETAILS</h3>
          </div>
          <div className="">
            <FaPlus />
          </div>
        </div>
        <div className="border-b-[1px] border-[#F0F0F0] flex items-center justify-between ">
          <div className="py-[24px]">
            <h3 className='font-dm-sans font-bold text-base text-[#262626] leading-[23px] '>SHIPPING & RETURNS</h3>
          </div>
          <div className="">
            <FaPlus />
          </div>
        </div>
        <div className="pt-[19px]">
          <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </>
  )
}

export default ProductsDetailsMeddle