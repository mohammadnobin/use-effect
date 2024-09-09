import React from "react";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../slice/ProductSlice";
import Swal from "sweetalert2";


const ProductCart = (props) => {
  let dispatch = useDispatch()
  let handleAddToCart = (productiem)=>{
    // dispatch(addToCart({...productiem, qun:1}))
    try {
      dispatch(addToCart({...productiem, qun:1}))
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your items has been add to cart",
          showConfirmButton: false,
          timer: 1500
      });
  }
  catch (err) {
      Swal.fire({
          position: "top-end",
          icon: "error",
          title: " product  cart not add  ",
          showConfirmButton: false,
                timer: 1500
            })
  }
}
  return (
    <>
      <div className="group flex  flex-col !w-[90%] mx-auto lg:!ml-[20px]">
       
        <div className="relative bg-[#f2f2f2] mb-[24px] ">
          <div className="absolute top-[20px] left-[20px]">
            <h4 className="py-[9px] px-[32px] bg-black text-white">
               - {props.discount} %
            </h4>
          </div>
          <Link to={`/shoppage/${props.id}`}>
          <img className="w-full" src={props.thumbnail} alt="" />
          </Link>
          <div className="absolute text-right bg-[#FFFFFF] w-full duration-500 ease-in-out transition-all bottom-0 h-0 group-hover:h-[160px] overflow-hidden right-0  pr-[31px] ">
            <div className="py-[30px] ">
              <div className="">
                <button>
                  <ul className="flex items-center gap-[15px]">
                    <li>
                      <h4 className="font-dm-sans font-normal text-base leading-5 text-[#767676] hover:font-bold hover:text-[#262626] transition-all ease-in-out duration-200 ">
                        Add to Wish List
                      </h4>
                    </li>
                    <li>
                      <FaHeart />
                    </li>
                  </ul>
                </button>
              </div>
              <div className="py-[21px]">
                <button>
                  <ul className="flex items-center gap-[15px]">
                    <li>
                    <h4 className="font-dm-sans font-normal text-base leading-5 text-[#767676] hover:font-bold hover:text-[#262626] transition-all ease-in-out duration-200 ">
                    Compare
                      </h4>
                    </li>
                    <li>
                      <TfiReload />
                    </li>
                  </ul>
                </button>
              </div>
              <div className="">
                      {/* <Link to="/cartpage" > */}
                <button>
                  <ul className="flex items-center gap-[15px] ">
                    <li onClick={()=>handleAddToCart(props)}>
                      <h4 className="font-dm-sans font-normal text-base leading-5 text-[#767676] hover:font-bold hover:text-[#262626] transition-all ease-in-out duration-200 ">
                        Add to Cart
                      </h4>
                    </li>
                    <li>
                      <FaShoppingCart />
                    </li>
                  </ul>
                </button>
                      {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <h4 className="font-dm-sans font-bold text-xl leading-[26px] text-[#262626]">
            {props.title}
          </h4>
          <h6 className="font-dm-sans font-normal text-base leading-[30px] text-[#767676] ">
            ${props.price}
          </h6>
        </div>
        <div className="mt-auto">
          <h6 className="mt-[15px] font-dm-sans font-normal text-base leading-[30px] text-[#767676] ">
            Black
          </h6>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
