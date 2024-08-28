import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const ProductleftcatebrancolorResuable = (props) => {
  return (
    <>

<div className="">
          <div
          onClick={props.handleclick}
          className="flex justify-between items-center pb-[35px] cursor-pointer"
        >
          <h3 className="font-dm-sans font-bold text-xl leading-[26px]  ">
            {props.title}
 
          </h3>
          {props.cshow ? (
            <span>
             <IoMdArrowDropup className='text-[26px]' />
            </span>
          ) : (
            <span>
       <IoMdArrowDropdown className='text-[26px]' />
            </span>
          )}
        </div>
        {props.cshow && (
          <div className="pb-[53px]">
            <ul>
              <li onClick={props.handleAllProducts} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">All Products

              <span>
                  <FaPlus />
                </span>
              </li>
              {props.categroy.map((item,i)=>(

              <li onClick={()=>props.handleCategory(item)} key={i} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">
                {item}
                <span>
                  <FaPlus />
                </span>
              </li>
              ))}
            </ul>
          </div>
        )}
        </div>
    </>
  )
}

export default ProductleftcatebrancolorResuable