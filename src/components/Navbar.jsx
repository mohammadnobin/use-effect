import React, { useState } from 'react'
import Container from './Container'
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import navlogo from '../assets/navlogo.png'


const Navbar = () => {
    let [show, setshow] = useState(true)

    let [active, setactive] = useState(false);
    window.addEventListener("scroll",function (){
      if (this.window.scrollY > 150) {
        setactive(true)
      } else{
        setactive(false)
      }
    });


  return (
    <section id='navber' className={`shadow-xl  ${active ? " text-black fixed z-[999] nothing w-full duration-300 bg-[#b3b7bd]" :""}`}>
    <Container>
        <div className="flex py-[32px] relative z-20  lg:justify-normal items-center justify-between  flex-wrap lg:px-7 md:px-7  sm:px-0 px-7">
            <div className="w-1/4">
                <img className='w-[65.01px]' src={navlogo} alt="" />
            </div>
            <div className="w-2/4">
                <ul className={`absolute  lg:flex justify-center text-center gap-x-[40px] duration-300 text-white lg:text-[#767676] left-0 lg:bg-transparent lg:static ${show == true ? "top-[91px] lg:h-full  h-0 overflow-hidden  w-full " : "top-[91px] h-[200px] lg:h-full left-0 w-full overflow-hidden bg-black"} ${active ? "lg:text-black font-bold" : ""}`} >
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>Home</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>Shop</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>About</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>Contact</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>Journal</li>
                </ul>
            </div>
            <div onClick={()=>setshow(!show)} className="lg:hidden cursor-pointer">
                {show == true ? <FaBars className='text-[26px]' /> : <RiCloseLargeFill className='text-[26px]' />}
           
            </div>
        </div>
    </Container>
    </section>
  )
}

export default Navbar
// className={`absolute  lg:flex justify-center text-center gap-x-[40px] duration-300 text-white lg:text-[#767676] left-0 lg:bg-transparent lg:static ${show == true ? "top-20 hidden w-full bg-black " : "top-20 left-0  block  w-full bg-black"}`} 
