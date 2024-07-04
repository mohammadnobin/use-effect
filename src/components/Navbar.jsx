import React, { useState } from 'react'
import Container from './Container'
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import navlogo from '../assets/navlogo.png'


const Navbar = () => {
    let [show, setshow] = useState(true)
  return (
    <section id='navber' className='bg-white z-[999] shadow-xl'>
    <Container>
        <div className="flex py-[32px] lg:justify-normal items-center justify-between  flex-wrap lg:px-0 md:px-0  sm:px-0 px-7">
            <div className="w-1/4">
                <img className='w-[65.01px]' src={navlogo} alt="" />
            </div>
            <div className="w-2/4">
                <ul className={`absolute lg:flex justify-center text-center gap-x-[40px] duration-300 text-white lg:text-[#767676] left-0 lg:bg-transparent  lg:static ${show == true ? "top-[-220px] w-full bg-black z-10" : "top-20 left-0 z-10 w-full bg-black"}`}>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base duration-200 hover:cursor-pointer'>Home</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base duration-200 hover:cursor-pointer'>Shop</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base duration-200 hover:cursor-pointer'>About</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base duration-200 hover:cursor-pointer'>Contact</li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold hover:text-[#262626] text-base duration-200 hover:cursor-pointer'>Journal</li>
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