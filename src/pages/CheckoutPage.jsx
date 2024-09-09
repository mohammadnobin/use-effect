import React from 'react'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
import CheckOutForm from '../components/CheckOutForm'
import Container from '../components/Container'

const CheckoutPage = () => {
  return (
    <section>
        <Container>
        <PageHeaderReuseable title='Checkout' prev='Home' next='Checkout' />
        <div className="">
            <p className='font-dm-sans font-normal text-base leading-[30px]'>Have a coupon? <span className='font-bold cursor-pointer'>Click here to enter your code</span></p>
        </div>
        <CheckOutForm />
        </Container>
    </section>
  )
}

export default CheckoutPage