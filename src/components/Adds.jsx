import React from 'react'
import Container from './Container'
import Adds1 from '../assets/Adds1.png'
import Adds2 from '../assets/Adds2.png'
import Adds3 from '../assets/Adds3.png'

const Adds = () => {
  return (
    <section className='lg:pt-[174px] lg:pb-[128px] '>
        <Container>
            <div className="grid lg:grid-cols-2 gap-x-5">
                <div className="lg:mb-0 mb-3">
                    <img className='w-full' src={Adds1} alt="" />
                </div>
                <div className="">
                    <div className="lg:mb-10 mb-3">
                        <img className='w-full' src={Adds2} alt="" />
                    </div>
                    <div className="lg:mb-0 mb-3">
                        <img className='w-full' src={Adds3} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Adds