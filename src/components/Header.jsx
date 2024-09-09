import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "./slice/ProductSlice";

let Header = () => {
  let cartInfo = useSelector((state) => state.product.cartItem);
  let [catagorishow, setCatagorishow] = useState(false);
  let [cartshow, setCartshow] = useState(false);
  let [usershow, setUsershow] = useState(false);
  let catagoriRef = useRef();
  let cartRef = useRef();
  let userRef = useRef();
  let dispatch = useDispatch()
  let subTotal = cartInfo.reduce((total, item) => total + (item.price * item.qun), 0);

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (catagoriRef.current && !catagoriRef.current.contains(e.target)) {
        setCatagorishow(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartshow(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUsershow(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <section id="header" className="bg-[#F5F5F3] py-[25px] lg:px-7 md:px-7 sm:px-0 px-7">
      <Container>
        <div className="flex items-center lg:gap-4">
          <div className="w-1/4 relative">
            <div ref={catagoriRef} className="flex items-center">
              <HiOutlineBars3BottomLeft className="text-[28px] cursor-pointer" onClick={() => setCatagorishow(prev => !prev)} />
              <h4 className="text-[#262626] font-dm-sans font-normal text-base leading-[18px] hidden lg:block">Shop by Category</h4>
            {catagorishow && (
              <div className="absolute top-10 lg:top-7 left-0 w-[300px] z-10 bg-[#262626]">
                <ul>
                  <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Accesories</li>
                  <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Furniture</li>
                  <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Electronics</li>
                  <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Clothes</li>
                  <li className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">Bags</li>
                </ul>
              </div>
            )}
            </div>
          </div>
          <div className="w-2/4">
            <div className="relative">
              <input className="w-full h-[50px] placeholder:text-[#C4C4C4] text-black lg:pl-3 pl-1" type="text" placeholder="Search Products" />
              <div className="absolute top-[50%] translate-y-[-50%] right-2 lg:right-5">
                <FaSearch className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-2 lg:gap-5">
              <div ref={userRef} className="relative flex">
                <FaUser className="text-xl cursor-pointer" onClick={() => setUsershow(prev => !prev)} />
                <MdOutlineArrowDropDown className="text-xl cursor-pointer" />
                {usershow && (
                  <div className="absolute z-50 top-9 right-0 text-center w-[200px]">
                    <button className="w-[196px] py-[16px] bg-white hover:bg-black duration-500 hover:text-white text-black font-dm-sans font-bold text-base mb-1">My Account</button>
                    <button className="w-[196px] py-[16px] bg-white hover:bg-black duration-500 hover:text-white text-black font-dm-sans font-bold text-base">Log Out</button>
                  </div>
                )}
              </div>
              <div ref={cartRef} className="relative">
                <div onClick={() => setCartshow(prev => !prev)} className="cursor-pointer">
                <FaShoppingCart className="text-xl "  />
                {cartInfo.length > 0 && (
                  <div className="absolute top-[-15px] left-[15px] bg-gray-500 rounded-full h-[25px] w-[25px] text-center text-white">
                    {cartInfo.length}
                  </div>
                )}
                </div>
                {cartInfo.length > 0 ?
                <>
                {cartshow && (
                  <div  className="absolute border-[1px] border-[#dfdfdb] z-50 top-7 w-[350px] right-[-25px] lg:right-0 lg:w-[360px] bg-white">
                    {cartInfo.map((item,i)=>(
                    <div key={i} className="flex items-center mb-2 justify-between py-[20px] pr-[15px] bg-[#F5F5F3]">
                      <div className="w-[80px]">
                        <img src={item.thumbnail} alt="thumbnail" />
                      </div>
                      <div className="w-[60%]">
                        <h4 className="font-bold font-dm-sans text-base leading-[18px] py-2">{item.title}</h4>
                        <p className="font-bold font-dm-sans text-base leading-[18px]">{item.price}</p>
                      </div>
                      <button  onClick={()=>dispatch(removeProduct(i))}>
                        <RiCloseLargeFill className="cursor-pointer" />
                      </button>
                    </div>
                    ))}
                    <div className="p-[20px]">
                      <div className="pb-[13px]">
                        <h4 className="font-dm-sans pb-[13px] text-[18px] leading-[18px]">Subtotal: <span className="font-bold">${subTotal.toFixed(2)}</span></h4>
                      </div>
                      <div className="flex justify-around">
                        <Link to="/cartpage">
                        <button onClick={()=> setCartshow(false)} className="lg:py-[16px] py-2 px-5 lg:px-[41px] border-black border-2 hover:bg-black hover:text-white duration-500">View Cart</button>
                        </Link>
                        <Link to='checkoutpage'>
                        <button onClick={()=> setCartshow(false)} className="lg:py-[16px] py-2 px-5 lg:px-[41px] border-black border-2 hover:bg-black hover:text-white duration-500">Checkout</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                </>
                :
                <></>
                 }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;

// onClick={()=> setCartshow(false)}
//   useEffect(()=>{
//     window.addEventListener("click",(e)=>{
//       if (catagoriRef.current.contains(e.target)) {
//         setcatagorishow(!catagorishow)
//       } else{
//         setcatagorishow(false)
//       }
//       if (cartRef.current.contains(e.target) == true) {
//         setcatrshow(!cartshow)
//       } else{
//         setcatrshow(false)
//       }
//       if (userRef.current.contains(e.target) == true) {
//         setusershow(!usershow)
//       } else{
//         setusershow(false)
//       }
//     });
//   },[catagorishow,cartshow,usershow]);