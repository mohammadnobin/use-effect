import React from 'react'
import Container from './Container'
import navlogo from '../assets/navlogo.png'
import { FaFacebookF,FaLinkedinIn,FaInstagram   } from "react-icons/fa";


const Fotter = () => {
  return (
    <section className='bg-[#F5F5F3] py-[56px]'>
        <Container>
            <div className="lg:grid lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex">
                    <div className="w-4/12 lg:text-left text-center">
                    <h2 className='pb-[17px] font-dm-sans font-bold text-base leading-[23px] text-[#262626] '>MENU</h2>
                    <ul className=''>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Home</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Shop</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>About</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Contact</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Journal</li>
                    </ul>
                    </div>
                    <div className="w-4/12 lg:text-left text-center">
                    <h2 className='pb-[17px] font-dm-sans font-bold text-base leading-[23px] text-[#262626] '>SHOP</h2>
                    <ul className=''>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Category 1</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Category 2</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Category 3</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Category 4</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Category 5</li>
                    </ul>
                    </div>
                    <div className="w-4/12 lg:text-left text-center">
                    <h2 className='pb-[17px] font-dm-sans font-bold text-base leading-[23px] text-[#262626] '>HELP</h2>
                    <ul className=''>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Privacy Policy</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Terms & Conditions</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Special E-shop</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Shipping</li>
                      <li className='pb-[6px] font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] '>Secure Payments</li>
                    </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-start-6 lg:col-span-3">
                  <div className=" text-center lg:pt-0 pt-5 lg:text-left">
                    <h4 className='font-dm-sans font-bold text-base leading-[27px] text-[#262626] '>(052) 611-5711</h4>
                    <a className='font-dm-sans font-bold text-base leading-[27px] text-[#262626] ' href="#">company@domain.com</a>
                    <p className='font-dm-sans font-normal text-sm leading-[23px] text-[#6D6D6D] pt-[15px] '>575 Crescent Ave. Quakertown, PA 18951</p>
                  </div>
                </div>
                <div className="lg:col-span-3 lg:col-start-10 lg:py-0 py-5">
                  <img className='w-[121.9px] mx-auto lg:mx-0' src={navlogo} alt="" />
                </div>
            </div>
            <div className="lg:flex justify-between items-center pt-5 lg:pt-[65px] ">
              <div className="">
                <ul className='flex lg:justify-normal justify-center gap-x-[25px] '>
                  <li><a className='text-xl' href="https://www.facebook.com/profile.php?id=61559234345625" target='_blank'><FaFacebookF /></a></li>
                  <li><a className='text-xl' href="#"><FaLinkedinIn /></a></li>
                  <li><a className='text-xl' href="#"><FaInstagram /></a></li>
                </ul>
              </div>
              <div className="">
                <h4 className='font-dm-sans lg:text-left text-center font-normal text-sm leading-[23px] text-[#6D6D6D] '>2020 Orebi Minimal eCommerce Figma Template by Adveits</h4>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Fotter