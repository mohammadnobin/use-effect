import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';
import product from '../assets/products.png'

const ProductsDetailsTop = (props) => {
  return (
    <>

      <div className="pb-[118px]">
        <h2 className="font-dm-sans text-black pb-[11px] text-[49px] font-bold leading-[63.5px]">
          Products
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-dm-sans text-base leading-[12px] font-normal text-black  ">
            <Link to="/">Home</Link>
          </p>
          <IoIosArrowBack className="text-[16px]" />
          <p className="font-dm-sans text-base leading-[12px] font-normal text-black  ">
            Products
          </p>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] ">
          <div className="bg-[#f2f2f2]">
            <img className='w-full' src={props.images} alt="" />
          </div>
          <div className="">
            <img className='w-full' src={product} alt="" />
          </div>
          <div className="">
            <img className='w-full' src={product} alt="" />
          </div>
          <div className="">
            <img className='w-full' src={product} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsDetailsTop