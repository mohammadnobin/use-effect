import React from 'react'

const CheckOutForm = (props) => {
  return (
    <div className='pt-[119px] pb-[129px]'>
      <h2 className='pb-[42px] font-dm-sans font-bold text-[39px] text-[#262626] leading-[50px]  '>
        Billing Details
      </h2>
      <div className="lg:w-3/4">
        <form action="">
          <div className="grid grid-cols-2 gap-x-[ 39px]">
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>First Name *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='First Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Last Name</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Last Name' required />
            </div>
          </div>
          <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Companye Name (optional)</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Company Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Country *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Company Name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Street Address *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='House number and street name' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Town/City *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='Town/City' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>County (optional)</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="text" placeholder='County' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Post Code *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="tel" placeholder='Post Code' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Phone *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="tel" placeholder='Phone' required />
            </div>
            <div className="">
              <h3 className='font-dm-sans font-bold text-[16px] text-[#262626] leading-[23px] pb-[10px] pt-[23px]'>Email Address *</h3>
              <input className='w-full border-transparent border-b-[#F0F0F0] border-[1px] focus-visible:outline-none' type="email" placeholder='Email' required />
            </div>
            <div className="py-[129px]">
            <h2 className='pb-[42px] font-dm-sans font-bold text-[39px] text-[#262626] leading-[50px]  '>
            Additional Information
                </h2>
                <h4 className='font-dm-sans font-bold text-base leading-[23px]'>Other Notes (optional)</h4>
                <p className='pt-[10px] pb-[82px] font-dm-sans font-normal text-sm leading-[18px] border-transparent border-b-[#F0F0F0] border-[1px]'>Notes about your order, e.g. special notes for delivery.</p>
            </div>
            <div className="">
            <h2 className='pb-[48px] font-dm-sans font-bold text-[39px] text-[#262626] leading-[50px]  '>
            Your Order
                </h2>
                <table className='lg:w-[640px] w-full text-left border-[#F0F0F0] border-[1px]'>
                  <tbody>
                  <tr>
                    <th className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-bold text-base text-[#262626] leading-[23px]'>Product</th>
                    <td className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-normal text-base leading-[30px]'>Total</td>
                  </tr>
                  <tr>
                    <th className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-bold text-base text-[#262626] leading-[23px]'>Product name x {props.totalQuntity}</th>
                    <td className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-normal text-base leading-[30px]'>{props.totalPrice.toFixed(2)} $</td>
                  </tr>
                  <tr>
                    <th className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-bold text-base text-[#262626] leading-[23px]'>Subtotal</th>
                    <td className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-normal text-base leading-[30px]'>{props.totalPrice.toFixed(2)} $</td>
                  </tr>
                  <tr>
                    <th className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-bold text-base text-[#262626] leading-[23px]'>Total</th>
                    <td className='border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] font-dm-sans font-normal text-base leading-[30px]'>{props.totalPrice.toFixed(2)} $</td>
                  </tr>
                  </tbody>
                </table>
                <div className="mt-[60px] p-[24px] border-b-[#F0F0F0] border-[1px] ">
                  <div className="flex gap-x-[6px] items-center pb-[14px]">
                  <input type="radio" required/>
                  <h4 className='font-dm-sans font-bold text-base leading-[23px]'>Bank</h4>
                  </div>
                  <p className='pt-[29px] pb-[17px] pl-[26px] font-dm-sans font-bold text-sm leading-[18px] text-[#767676] bg-[#F7F8F9] relative after:absolute after:contents-[""] after:top-[-12px]  after:left-[40px] after:z-20 after:w-0 after:h-0 after:border-l-[9px] after:border-l-transparent after:border-r-[9px] after:border-r-transparent after:border-b-[14px] after:border-b-[#F7F8F9]  '>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
                  <div className="flex gap-x-[6px] items-center pt-[26px] pb-[15px]">
                  <input type="radio" required/>
                  <h4 className='font-dm-sans font-bold text-base leading-[23px]'>Bank</h4>
                  </div>
                  <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <b className='text-black'>privacy policy</b>.</p>
                    <button className='mt-[24px] mb-[6px] py-[16px] px-[45px] font-dm-sans font-bold text-sm text-white leading-[18px] bg-[#262626]' type='submit'>Proceed to Bank</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CheckOutForm  
