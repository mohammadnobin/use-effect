import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import { FaCircle } from "react-icons/fa";
import starfull from "../assets/starfull.png"
import star25 from "../assets/star25.png"
import starhalf from "../assets/star50.png"
import star75 from "../assets/star75.png"
import star0 from "../assets/staremty.png"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/ProductSlice';

const ProductsDetailsMeddle = ({info}) => {
  let dispatch = useDispatch()
  let [count,setCount] = useState(1)
  let [show, setShow] = useState (false)
  let [showTwo, setShowTow] = useState (false)

  let handledcrise = ()=>{
    if (count > 0) {
      setCount(count - 1)
    }

  }
  let handleIncrise = ()=>{
    setCount(count + 1)
  }
// Clint reating start
  let clienRating = Array.from({ length: 5 }, (_, index) => {
    const starRating = info.rating - index;
  
    return (
      <span key={index}>
        {starRating >= 1 ? (
          <img className='w-[20px]' src={starfull} alt="Full star" />
        ) : starRating >= 0.75 ? (
          <img className='w-[20px]' src={star75} alt="75% full star" />
        ) : starRating >= 0.5 ? (
          <img className='w-[20px]' src={starhalf} alt="Half star" />
        ) : starRating >= 0.25 ? (
          <img className='w-[20px]' src={star25} alt="25% full star" />
        ) : (
          <img className='w-[20px]' src={star0} alt="Empty star" />
        )}
      </span>
    );
  });
// Clint reating end
  let handleAddToCart = (productiem)=>{
    dispatch(addToCart({...productiem, qun:count}))
  }
  return (
    <>
      <div className="pb-[123px] pt-[66px] lg:w-1/2 capitalize">
        <h3 className='font-dm-sans font-bold text-[#262626] text-[39px] leading-[51px] '>{info.title}</h3>
        <div className="flex items-center pt-[15px] pb-[24px] gap-x-[25px]">
          <div className="flex text-[gold] items-center">
            {clienRating}
          </div>
          <div className="">
            <h4 className='text-[#767676] font-dm-sans font-normal leading-[18px] '>{info.reviews?.length || 0} Review</h4>
          </div>
        </div>
        <div className="flex items-center gap-x-[25px] pb-[24px] border-b-[1px] border-[#F0F0F0]">
          <div className="">
            <h4 className='font-dm-sans font-normal text-base text-[#767676] leading-[21px] '>
              <del>${info.price}</del>
            </h4>
          </div>
          <div className="">
            <h4 className='font-dm-sans font-normal text-[20px] text-[#262626] leading-[26px] '>${info.discountPercentage}</h4>
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
            <h4 className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '>{info.availabilityStatus}</h4>
          </div>
        </div>
        <div className="border-b-[1px] gap-x-[27px] border-[#F0F0F0] flex items-center py-[21px] ">
          <div className="">
            <h4 className='font-dm-sans font-bold text-[#262626] text-base leading-[23px]'>stock:</h4>
          </div>
          <div className="">
            <h4 className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '>{info.stock}</h4>
          </div>
        </div>
        <div className="border-b-[1px] border-[#F0F0F0] flex items-center gap-x-[20px] py-[30px] ">
          <div className="">
            <button className='border-[black] border-[1px] lg:py-[16px] lg:px-[43px] hover:bg-black hover:text-white duration-300 ease-in-out font-dm-sans font-bold text-sm text-[#262626] leading-[18px] capitalize '>add to wish list</button>
          </div>
          <div className="">
              <Link to="/cartpage">
            <button onClick={()=>handleAddToCart(info)} className='border-[black] border-[1px] lg:py-[16px] lg:px-[43px] hover:bg-black hover:text-white duration-300 ease-in-out font-dm-sans font-bold text-sm text-[#262626] leading-[18px] capitalize '>
              add to cart</button>
              </Link>
          </div>
        </div>
        <div onClick={()=>setShow(!show)} className="border-b-[1px] cursor-pointer border-[#F0F0F0] ">
          <div className=" flex items-center justify-between ">
          <div className="py-[24px]">
            <h3 className='font-dm-sans font-bold text-base text-[#262626] leading-[23px] '>FEATURES  & DETAILS</h3>
          </div>
          <div className="">
            {show ?<FaMinus /> : <FaPlus />  }
            
          </div>
          </div>
          {show&&
          <div className="py-[24px]">
            <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>

            {info.description}
            </p>
          </div>
          }
        </div>
        <div onClick={()=>setShowTow(!showTwo)} className="border-b-[1px] cursor-pointer border-[#F0F0F0]">
          <div className="flex items-center justify-between ">
          <div className="py-[16px]">
            <h3 className='font-dm-sans font-bold text-base text-[#262626] leading-[23px] '>SHIPPING & RETURNS</h3>
          </div>
          <div className="">
          {showTwo ?<FaMinus /> : <FaPlus />  }
          </div>
        </div>
        {showTwo &&
        <div className="">
          <ul>
            <li className='font-dm-sans capitalize font-normal text-base text-[#767676] leading-[30px] pt-[19px] list-decimal list-inside'>{info.shippingInformation}</li>
            <li className='font-dm-sans capitalize font-normal text-base text-[#767676] leading-[30px] pt-[19px] list-decimal list-inside pb-4'>{info.returnPolicy}</li>
          </ul>
        </div>
        }
          </div>
      </div>
    </>
  )
}

export default ProductsDetailsMeddle