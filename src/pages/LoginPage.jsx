import React from 'react'
import Container from '../components/Container'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'

const LoginPage = () => {
  return (
    <>
    <Container>
        <PageHeaderReuseable title='Login' next='Login' prev='Home' />
        <div className="lg:w-[50%] border-b-[1px] border-[#F0F0F0] ">
            <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] pb-[62px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className="py-[57px]">
            <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]'>Returning Customer</h2>
            <div className="">
                <form action="">
                    <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email address</h3>
                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="email" required/>
                    </div>
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Password</h3>
                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="password" placeholder='....' required/>
                    </div>
                    </div>
                    <div className="mt-[29px] pb-[70px] border-b-[1px] border-[#F0F0F0] ">
                    <button className='font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-black hover:text-white duration-500 ease-in-out' type='submit'>Log in</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="lg:w-[50%]">
        <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] '>New Customer</h2>
        <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] pt-[38px] pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <div className="mt-[51px] mb-[140px]">
                    <button className='font-dm-sans font-bold text-sm leading-[18px] px-[80px] py-[16px] border-[#2B2B2B] border-[1px] hover:bg-white bg-black hover:text-black text-white duration-500 ease-in-out'>Continue</button>
                    </div>
        </div>
    </Container>
    </>
  )
}

export default LoginPage