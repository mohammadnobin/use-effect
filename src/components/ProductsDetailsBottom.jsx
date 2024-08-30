import React from 'react';
import starfull from "../assets/starfull.png"
import star0 from "../assets/staremty.png"
import FromReuseable from './reuseable/FromReuseable';

const ProductsDetailsBottom = ({ info }) => {

  return (
    <>
      <div className="flex items-center gap-x-[62px] ">
        <div>
          <h4 className='font-dm-sans font-normal text-xl text-[#767676] leading-[29px]'>Description</h4>
        </div>
        <div>
          <h4 className='font-dm-sans font-bold text-xl text-[#262626] leading-[26px]'>Reviews ({info.reviews?.length || 0})</h4>
        </div>
      </div>
      <div className="border-b-[1px] border-[#F0F0F0] pb-[16px]">
        <p className='font-dm-sans font-normal text-sm text-[#767676] leading-[30px]'> {info.reviews?.length || 0} review for Product</p>
      </div>
      {info.reviews?.map((item, i) => (
        <div key={i} className="border-b-[1px] border-[#F0F0F0] mb-[53px] mt-[42px]">
          <div className="justify-between pt-[23px] pb-[14px] flex items-center">
            <div className="flex items-center gap-x-[37px]">
              <div>
                <h4 className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>{item.reviewerName}</h4>
              </div>
              <div className="flex items-center text-[gold]">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < item.rating ? (
                      <img className='w-[20px]' src={starfull} alt="Full star" />
                    ) : (
                      <img className='w-[20px]' src={star0} alt="Empty star" />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="font-dm-sans font-normal text-base text-[#767676] leading-[30px]">
              <h4>{item.date}</h4>
            </div>
          </div>
          <div className="font-dm-sans font-normal text-base text-[#767676] leading-[30px]">
            <h4>Email : {item.reviewerEmail}</h4>
          </div>
          <div className="pb-[15px]">
            <p className='font-dm-sans font-normal text-base text-[#767676] leading-[30px]'>{item.comment}</p>
          </div>
        </div>

      ))}
      <div className="lg:w-[780px]">
       <FromReuseable formTitle='Add a Review ' formItem='Review' formplaceholder='Your review here' />
      </div>
    </>
  );
};

export default ProductsDetailsBottom;
