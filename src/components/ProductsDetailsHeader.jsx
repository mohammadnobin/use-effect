import React from 'react'
import Container from './Container';
const ProductsDetailsHeader = () => {
    return (
        <>
            <div className="py-[20px] mb-[100px] border-[1px] border-[#F0F0F0] ">
                <Container>
                    <div className="lg:flex sm:flex justify-between items-center">
                        <div className="flex items-center lg:justify-normal sm:justify-normal justify-between gap-x-[54px] ">
                            <div className="">
                                <h3 className='font-dm-sans font-semibold text-[25px] text-[#2B2B2B] leading-[36px]'>Product</h3>
                            </div>
                            <div className="flex items-center gap-x-[22px] ">

                                <div className="">
                                    <h4 className='font-dm-sans font-normal text-[#767676] text-[16px] leading-[20px]'><del>$88.00</del></h4>
                                </div>
                                <div className="">
                                    <h3 className='font-dm-sans font-semibold text-[20px] text-[#2B2B2B] leading-[26px]'>$44.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className='bg-black text-white py-[16px] px-[60px] font-dm-sans font-semibold text-[14px] leading-[19px] '>Add to Cart</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductsDetailsHeader