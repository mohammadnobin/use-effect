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
                <form action="">
                    <div className="my-[57px] border-b-[1px] pb-[69px]">
                        <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]'>Your Personal Details</h2>
                            <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                                <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>First Name</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="text" placeholder='First Name' required />
                                </div>
                                <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Last Name</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="text" placeholder='Last Name' required />
                                </div>
                                <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email address</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="email" placeholder='company@domain.com' required />
                                </div>
                                <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'> Telephone</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="tel" placeholder='Your phone number' required />
                                </div>
                            </div>
                    </div>
                    <div className="">
                    <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]'>New Customer</h2>
                    <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Address 1</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="text" placeholder='4279 Zboncak Port Suite 6212' required />
                    </div>
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'> Address 2</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="text" placeholder='-' required />
                    </div>
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>City</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="text" placeholder='Your city' required />
                    </div>
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Post Code</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="text" placeholder='05228' required />
                    </div>
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Division</h3>
                                    <select className='w-full border-b-[1px] border-[#F0F0F0] focus-visible:outline-none pb-[16px]' name="" id="">
                                        <option value="">Dhaka</option>
                                        <option value="">Rajshahi</option>
                                        <option value="">Borisal</option>
                                        <option value="">Sylhet</option>
                                        <option value="">Chattogram</option>
                                    </select>
                    </div>
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>District</h3>
                                    <select className='w-full border-b-[1px] border-[#F0F0F0] focus-visible:outline-none pb-[16px]' name="" id="">
                                        <option value="">Munshiganj</option>
                                        <option value=""></option>
                                        <option value="">Borisal</option>
                                        <option value="">Sylhet</option>
                                        <option value="">Chattogram</option>
                                    </select>
                    </div>
                    </div>
                    </div>
                    <div className="mb-[70px]">
                    <h2 className='font-dm-sans font-bold text-[39px] leading-[50px] pb-[42px]'>Your Password</h2>
                    <div className="w-[70%] grid grid-cols-2 gap-[39px]">
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Password</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="password" placeholder='Password' required />
                    </div>
                    <div className="">
                                    <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Repeat Password</h3>
                                    <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none pb-[16px]' type="password" placeholder='Repeat password' required />
                    </div>
   
                    </div>
                    </div>
                    <div className="border-t-[1px] border-[#F0F0F0] pt-[65px] pb-[140px]">
                        <div className="flex gap-x-[15px] items-center">
                        <input type="checkbox" />
                        <p className='font-dm-sans font-normal text-sm leading-[18px]'>I have read and agree to the Privacy Policy</p>
                        </div>
                        <div className="flex items-center pt-[23px] pb-[27px]">
                            <p className='pr-[33px] font-dm-sans font-normal text-sm leading-[18px]'>Subscribe Newsletter</p>
                            <input type="checkbox" />
                            <label className='pl-[15px] pr-[39px] font-dm-sans font-normal text-sm leading-[18px]' htmlFor="">Yes</label>
                            <input type="checkbox" />
                            <label className='pl-[15px] font-dm-sans font-normal text-sm leading-[18px]' htmlFor="">No</label>
                        </div>
                        <button className='py-[16px] pl-[77px] pr-[83px] bg-black text-white font-dm-sans font-bold text-sm leading-[18px]' type='submit'>Log in</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default SignUp