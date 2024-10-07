import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./slice/ProductSlice";
const ProductsDetailsHeader = ({ info }) => {
  let dispatch = useDispatch();
  let handleAddToCart = (productiem) => {
    dispatch(addToCart({ ...productiem, qun: 1 }));
  };
  return (
    <>
      <div className="py-[20px] mb-[100px] border-[1px] border-[#F0F0F0] ">
        <Container>
          <div className="lg:flex sm:flex justify-between items-center">
            <div className="flex items-center lg:justify-normal sm:justify-normal justify-between gap-x-[54px] ">
              <div className="">
                <h3 className="font-dm-sans font-semibold text-[25px] text-[#2B2B2B] leading-[36px]">
                  Product
                </h3>
              </div>
              <div className="flex items-center gap-x-[22px] ">
                <div className="">
                  <h4 className="font-dm-sans font-normal text-[#767676] text-[16px] leading-[20px]">
                    <del> ${info.price}</del>
                  </h4>
                </div>
                <div className="">
                  <h3 className="font-dm-sans font-semibold text-[20px] text-[#2B2B2B] leading-[26px]">
                    ${info.discountPercentage}
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/cartpage">
                <button
                  onClick={() => handleAddToCart(info)}
                  className="bg-black text-white py-[16px] px-[60px] font-dm-sans font-semibold text-[14px] leading-[19px] "
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductsDetailsHeader;
