import React from 'react'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
import CheckOutForm from '../components/CheckOutForm'
import Container from '../components/Container'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  let productinfo = useSelector((state)=>state.product.cartItem)
  let {totalPrice, totalQuntity} = productinfo.reduce((ecc,item)=>{
    ecc.totalPrice += item.price * item.qun
    ecc.totalQuntity += item.qun
    return ecc
  },{totalPrice:0,totalQuntity:0})
  return (
    <section>
        <Container>
        <PageHeaderReuseable title='Checkout' prev='Home' next='Checkout' />
        <div className="">
            <p className='font-dm-sans font-normal text-base leading-[30px]'>Have a coupon? <span className='font-bold cursor-pointer'>Click here to enter your code</span></p>
        </div>
        <CheckOutForm totalPrice={totalPrice} totalQuntity={totalQuntity} />
        </Container>
        {/* <div className="">
          <h2>qun:{totalQuntity}</h2>
          <h2>subtotal:{totalPrice}</h2>
        </div> */}
    </section>
  )
}

export default CheckoutPage