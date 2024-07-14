import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import cartimg from '../assets/cartimg.png'

const Header = () => {
  let [catagorishow ,setcatagorishow] = useState(false);
  let [cartshow ,setcatrshow] = useState(false);
  let [usershow ,setusershow] = useState(false);
  let catagoriRef = useRef();
  let cartRef = useRef();
  let userRef = useRef();
  useEffect(()=>{
    window.addEventListener("click",(e)=>{
      if (catagoriRef.current.contains(e.target) == true) {
        setcatagorishow(!catagorishow)
      } else{
        setcatagorishow(false)
      }
      if (cartRef.current.contains(e.target) == true) {
        setcatrshow(!cartshow)
      } else{
        setcatrshow(false)
      }
      if (userRef.current.contains(e.target) == true) {
        setusershow(!usershow)
      } else{
        setusershow(false)
      }
    });
  },[catagorishow,cartshow,usershow]);


  return (
    <section id="header" className="bg-[#F5F5F3] py-[25px] lg:px-7 md:px-7  sm:px-0 px-7">
      <Container>
        <div className="flex items-center lg:gap-4">
          <div className="w-1/4 relative">
            <div ref={catagoriRef} className="flex items-center">
              <div className="">
                <HiOutlineBars3BottomLeft className="text-[28px] cursor-pointer" />
              </div>
              <div className="">
                <h4 className="text-[#262626] font-dm-sans font-normal text-base leading-[18px] hidden lg:block ">Shop by Category</h4>
              </div>
            </div>
            {catagorishow &&
                  <div  className="absolute  top-10 lg:top-7  left-0 w-[300px] z-10 bg-[#262626] ">
                  <ul>
                    <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Accesories</li>
                    <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Furniture</li>
                    <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Electronics</li>
                    <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Clothes</li>
                    <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Bags</li>
                    <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]"></li>
                  </ul>
                </div>
             }
          </div>
          <div className="w-2/4">
            <div className="relative">
              <input className="w-full h-[50px] placeholder:text-[#C4C4C4] text-black lg:pl-3 pl-1" type="text" placeholder="Search Products" />
              <div className="absolute top-[50%] translate-y-[-50%] right-2 lg:right-5 ">
                 <FaSearch className=" cursor-pointer" /> 
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="relative flex justify-end gap-x-2  lg:gap-5"> 
              <div ref={userRef} className="flex relative">
                <FaUser className="text-xl cursor-pointer"/>
                <MdOutlineArrowDropDown className="text-xl cursor-pointer" />
                {usershow && 
                <div className="absolute z-50 top-9  right-0 text-center w-[200px]">
                  <div className="">
                    <button className="w-[196px] py-[16px] bg-white hover:bg-black duration-500 hover:text-white text-black font-dm-sans font-bold text-base mb-1 "> My Account</button>
                  </div>
                  <div className="">
                  <button className="w-[196px] py-[16px] bg-white hover:bg-black duration-500 hover:text-white text-black font-dm-sans font-bold text-base ">Log Out</button>
                  </div>
                </div>
                }
                
              </div>
              <div ref={cartRef} className="">
                <FaShoppingCart className="text-xl cursor-pointer" />
              </div>
              {cartshow &&
              <div className="absolute z-50 top-7 w-[350px] right-[-25px] lg:right-0 lg:w-[360px]  bg-white">
                <div className="flex items-center justify-around py-[20px] bg-[#F5F5F3]">
                  <div className="w-[80px]">
                    <img src={cartimg} alt="" />
                  </div>
                  <div className="">
                    <h4 className="font-bold font-dm-sans text-base leading-[18px] py-2 ">Black Smart Watch</h4>
                    <p className="font-bold font-dm-sans text-base leading-[18px] ">$44.00</p>
                  </div>
                  <div className="">
                    <RiCloseLargeFill />
                  </div>
                </div>
                <div className=" p-[20px]">
                  <div className="pb-[13px]">
                    <h4 className=" font-dm-sans pb-[13px] text-[18px] leading-[18px]">Subtotal:<span className="font-bold" >$44.00</span></h4>
                  </div>
                  <div className="flex justify-around">
                    <div className="">
                      <button className="lg:py-[16px] py-2 px-5 lg:px-[41px] border-black border-2 hover:bg-black hover:text-white duration-500 ">View Card</button>
                    </div>
                    <div className="">
                      <button className="lg:py-[16px] py-2 px-5 lg:px-[41px] border-black border-2 hover:bg-black hover:text-white duration-500  ">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
              }
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
