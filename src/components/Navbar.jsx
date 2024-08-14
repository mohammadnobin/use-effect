import React, { useState } from 'react'
import Container from './Container'
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import navlogo from '../assets/navlogo.png'
import { Link, NavLink } from 'react-router-dom';


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
    <section id='navber' className={`shadow-xl my_navber  ${active ? " text-black fixed z-[999] nothing w-full duration-300 bg-[#b3b7bd]" :""}`}>
      <div className="relative z-50">
        <Container>
        <div className="flex py-[32px] lg:justify-normal items-center justify-between  flex-wrap lg:px-7 md:px-7  sm:px-0 px-7">
            <div className="w-1/4">
            <Link to="/">
                <img className='w-[65.01px]' src={navlogo} alt="" />
            </Link>
            </div>
            <div className="w-2/4">
                <ul className={`absolute  lg:flex justify-center text-center gap-x-[40px] duration-300 text-white lg:text-[#767676] left-0 lg:bg-transparent lg:static ${show == true ? "top-[90px] lg:h-full left-0  h-0 overflow-hidden  w-full " : "top-[90px] h-[200px] lg:h-full left-0 w-full overflow-hidden bg-black"} ${active ? "lg:text-black font-bold" : ""}`}
                >
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold lg:hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer '>
                    <NavLink   onClick={() =>setshow(true)} to="/" >Home</NavLink>
                   </li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold lg:hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>
                    <NavLink   onClick={() =>setshow(true)} to="/shoppage" >Shop</NavLink>
                   </li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold lg:hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>
                    <NavLink   onClick={() =>setshow(true)} to="/aboutpage" >About</NavLink>
                   </li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold lg:hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>
                    <NavLink   onClick={() =>setshow(true)} to="/contactspage" >Contact</NavLink>
                   </li>
                   <li className='py-2 lg:py-0 font-dm-sans hover:font-bold lg:hover:text-[#262626] text-base lg:duration-200 hover:cursor-pointer'>
                    <NavLink   onClick={() =>setshow(true)} to="/journalpage" >Journal</NavLink>
                   </li>
                </ul>
            </div>
            <div onClick={()=>setshow(!show)} className="lg:hidden cursor-pointer">
                {show == true ? <FaBars className='text-[26px]' /> : <RiCloseLargeFill className='text-[26px]' />}
           
            </div>
        </div>
    </Container>
      </div>
    
    </section>
  )
}

export default Navbar
// className={`absolute  lg:flex justify-center text-center gap-x-[40px] duration-300 text-white lg:text-[#767676] left-0 lg:bg-transparent lg:static ${show == true ? "top-20 hidden w-full bg-black " : "top-20 left-0  block  w-full bg-black"}`} 
