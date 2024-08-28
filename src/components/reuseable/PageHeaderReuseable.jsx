import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom'

const PageHeaderReuseable = (props) => {
  return (
    <>
    
    <div className="py-[124px]">
        <h2 className="font-dm-sans text-black pb-[11px] text-[49px] font-bold leading-[63.5px]">
          
          {props.title}
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-dm-sans text-base leading-[12px] font-normal text-black  ">
            <Link to="/"> {props.prev} </Link>
          </p>
          <IoIosArrowBack className="text-[16px]" />
          <p className="font-dm-sans text-base leading-[12px] font-normal text-black  ">
             
            {props.next}
          </p>
        </div>
      </div>
    </>
  )
}

export default PageHeaderReuseable