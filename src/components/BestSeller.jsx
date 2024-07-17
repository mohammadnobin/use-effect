import React from 'react'
import Container from './Container'
import ProductCart from './reuseable/ProductCart'
import bestsell1 from '../assets/bestsell1.png'
import bestsell2 from '../assets/bestsell2.png'
import bestsell3 from '../assets/bestsell3.png'
import bestsell4 from '../assets/bestsell4.png'

const BestSeller = () => {
  return (
    <section id='Bestseller' className='mt-[100px] '>
        <Container>
            <div className="pb-[48px]">
                <h2 className='font-dm-sans text-center lg:text-left font-bold text-[39px] leading-[50px] text-[#262626] '>Our Bestsellers</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <ProductCart price="50" title="Bestseller" thumbnail={bestsell1} discount="10" />
                <ProductCart price="50" title="Bestseller" thumbnail={bestsell2} discount="10" />
                <ProductCart price="50" title="Bestseller" thumbnail={bestsell3} discount="10" />
                <ProductCart price="50" title="Bestseller" thumbnail={bestsell4} discount="10" />
            </div>
            </Container> 
    </section>
  )
}

export default BestSeller