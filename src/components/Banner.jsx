import React from 'react'
import banner from '../assets/banner.png'
import Slider from "react-slick";
import Container from './Container';
import { SlReload } from "react-icons/sl";
import { MdLocalShipping } from "react-icons/md";
import { Fa2 } from "react-icons/fa6";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
              breakpoint:1023,
              settings: {
                dots: false
              }
            },
          ],
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position:'absolute',
                top:"50%",
                left:"100px",
                transform:"translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding:"10px 0px"
              }}
            >
             0 {i + 1}
            </div>
          )
      };
  return (
    <section>
        <div className="">
         <Slider {...settings}>
                <div className="">
                    <img className='w-full' src={banner} alt="" />
                </div>
                <div className="">
                    <img className='w-full' src={banner} alt="" />
                </div>
                <div className="">
                    <img className='w-full' src={banner} alt="" />
                </div>
                <div className="">
                    <img className='w-full' src={banner} alt="" />
                </div>
            </Slider>    
        </div>
        <div className="border-[#F0F0F0] border-b-[1px] py-[30px]">
          <Container>
          <div className="lg:grid grid-cols-3">
            <div className="">
                <div className="flex items-center justify-center  gap-x-[17px]">
                <Fa2 className='text-xl' />
                    <h4 className='font-dm-sans font-normal text-base leading-[20px] text-[#6D6D6D]'>Two years warranty</h4>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-x-[17px] justify-center  ">
                <MdLocalShipping className='text-xl' />
                    <h4 className='font-dm-sans font-normal text-base leading-[20px] text-[#6D6D6D]'>Free shipping</h4>
                </div>
            </div>
            <div className="">
                <div className="flex items-center justify-center  gap-x-[17px] ">
                <SlReload className='text-xl ' />
                    <h4 className='font-dm-sans font-normal text-base leading-[20px] text-[#6D6D6D]'>Return policy in 30 days</h4>
                </div>
            </div>
        </div>    
        </Container>
        </div>
        
    </section>
  )
}

export default Banner