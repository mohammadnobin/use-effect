import React from 'react'
import Container from '../components/Container'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'

const SignUp = () => {
  return (
    <>
    <Container>
        <PageHeaderReuseable title='Sign up' next='Sign up' prev='Home' />
        <div className="lg:w-1/2 pb-[62px] border-b-[1px] border-[#F0F0F0]">
            <p className='font-dm-sans font-normal text-base leading-[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className="my-[57px]">
        <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]'>Your Personal Details</h2>
            <div className="">
                <form action="">
                    <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>First Name</h3>
                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='First Name' required/>
                    </div>
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Last Name</h3>
                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Last Name' required/>
                    </div>
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email address</h3>
                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="email" placeholder='company@domain.com' required/>
                    </div>
                    <div className="">
                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'> Telephone</h3>
                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="tel" placeholder='Your phone number' required/>
                    </div>
                    </div>
                
                </form>
            </div>
        </div>
    </Container>
    </>
  )
}

export default SignUp