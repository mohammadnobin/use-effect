import React from 'react'
import Container from '../components/Container'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
import products from '../assets/products.png'
import AboutCartReuseable from '../components/reuseable/AboutCartReuseable'

const AboutPage = () => {
  return (
    <section className='mb-[131px]'>
    <Container>
      <PageHeaderReuseable title='About' next='About' prev='Home' />
      <div className="lg:grid gap-x-[40px] grid-cols-2">
        <div className=""><img className='w-full' src={products} alt="products" /></div>
        <div className=""><img className='w-full'  src={products} alt="products" /></div>
      </div>
      <div className="mt-[128px] mb-[118px]">
        <h3 className='font-dm-sans font-normal text-[39px] text-[#262626] leading-[52px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
      </div>
      <div className="lg:grid grid-cols-3 gap-x-[40px] ">
        <AboutCartReuseable title="Our Vision " paregraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." /> 
        <AboutCartReuseable title="Our Story " paregraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." /> 
        <AboutCartReuseable title=" Our Brands" paregraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." /> 
      </div>
    </Container>
    </section>
  )
}

export default AboutPage