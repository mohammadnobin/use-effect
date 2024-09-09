import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <Container>
        <div className="lg:w-[643px]">
    <div className="pt-[81px] pb-[50px]">
        <h2 className='font-dm-sans font-bold text-[200px] text-[#262626] leading-[260px] '>404</h2>
        <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] '>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
    </div>
    <div className="pb-[140px]">
    <div className="relative ">
              <input className="w-full h-[50px] placeholder:text-[#767676] text-black border-[#F0F0F0] border-[1px] focus-visible:outline-none lg:pl-3 pl-1" type="text" placeholder="Type to search" />
              <div className="absolute top-[50%] translate-y-[-50%] right-2 lg:right-5">
                <FaSearch className="cursor-pointer" />
              </div>
            </div>
            <Link to="/" >
        <button className='font-dm-sans font-bold text-base leading-[18px] py-[16px] px-[52px] bg-black text-[#ffffff] mt-[60px]'>Back to Home</button>
            </Link>
    </div>
        </div>
    </Container>
    </>
  )
}

export default ErrorPage