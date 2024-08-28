import React from 'react'
import PageHeaderReuseable from './reuseable/PageHeaderReuseable'

const ProductsDetailsTop = ({info}) => {
  return (
    <>
    <PageHeaderReuseable title="Products" prev="Home"  next="Products" />
      <div className="">
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] ">
        {info.images?.map((item, i)=>(
          <div key={i} className="bg-[#f2f2f2]">
            <img className='w-full' src={item} alt="" />
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default ProductsDetailsTop