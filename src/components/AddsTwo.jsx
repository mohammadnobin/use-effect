import React from 'react'
import Container from './Container'
import addsTwo from '../assets/AdsTwo.png'

const AddsTwo = () => {
  return (
    <section className='lg:py-[129px] py-5'>
        <Container>
            <img className='w-full' src={addsTwo} alt="" />
        </Container>
    </section>
  )
}

export default AddsTwo