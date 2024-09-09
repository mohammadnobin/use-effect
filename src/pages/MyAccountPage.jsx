import React from 'react'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
import Container from '../components/Container'

const MyAccountPage = () => {
  return (
    <section className='pb-[140px]'>
    <Container>
    <PageHeaderReuseable title="My Account" next="My Account" prev="Home" />
    <div className="lg:grid grid-cols-12 gap-x-[39px]">
        <div className="col-span-2">
            <ul>
                <li className='font-dm-sans font-normal hover:font-bold hover:text-black duration-200 ease-in-out cursor-pointer text-base text-[#767676]  leading-[30px] pb-[19px] border-b-[1px] border-[#F0F0F0]'>Dashboard</li>
                <li className='font-dm-sans font-normal hover:font-bold hover:text-black duration-200 ease-in-out cursor-pointer text-base text-[#767676]  leading-[30px] pb-[19px] border-b-[1px] border-[#F0F0F0]'>Others</li>
                <li className='font-dm-sans font-normal hover:font-bold hover:text-black duration-200 ease-in-out cursor-pointer text-base text-[#767676]  leading-[30px] pb-[19px] border-b-[1px] border-[#F0F0F0]'>Donwloads</li>
                <li className='font-dm-sans font-normal hover:font-bold hover:text-black duration-200 ease-in-out cursor-pointer text-base text-[#767676]  leading-[30px] pb-[19px] border-b-[1px] border-[#F0F0F0]'>Addresses</li>
                <li className='font-dm-sans font-normal hover:font-bold hover:text-black duration-200 ease-in-out cursor-pointer text-base text-[#767676]  leading-[30px] pb-[19px] border-b-[1px] border-[#F0F0F0]'>Account details</li>
                <li className='font-dm-sans font-normal hover:font-bold hover:text-black duration-200 ease-in-out cursor-pointer text-base text-[#767676]  leading-[30px] pb-[19px] border-b-[1px] border-[#F0F0F0]'>Logout</li>
            </ul>
        </div>
        <div className="col-start-3 col-span-8">
            <div className="">
                <h4 className='font-dm-sans font-normal text-base text-[#767676] leading-[30px] pb-[30px]'>Hello <b>admin</b> (not <b>admin</b>? <b>Log out</b> )</h4>
                <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>From your account dashboard you can view your <b>recent orders</b>, manage your <b>shipping and billing addresses</b>, and <b>edit your password and account details</b>.</p>
            </div>
        </div>
    </div>
    </Container>
    </section>
  )
}

export default MyAccountPage