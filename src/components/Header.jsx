import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeProduct } from "./slice/ProductSlice";
import { ApiData } from "./ContextApi";

let Header = () => {
  let data = useContext(ApiData)
  let cartInfo = useSelector((state) => state.product.cartItem);
  let [category,setCatagory] = useState([])
  let [activeIndex, setActiveIndex] = useState(-1)
  let [catagorishow, setCatagorishow] = useState(false);
  let [cartshow, setCartshow] = useState(false);
  let [usershow, setUsershow] = useState(false);
  let [searchInfo, setSearchInfo] = useState("")
  let [searchFilter, setsearceFilter] = useState([])
  let catagoriRef = useRef();
  let cartRef = useRef();
  let userRef = useRef();
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let subTotal = cartInfo.reduce((total, item) => total + (item.price * item.qun), 0)
  useEffect(() => {
    setCatagory([...new Set(data.map((item) => item.category))]);
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
  },[data]);
  let handlecartpage = ()=>{
    navigate("/cartpage")
    setCartshow(false)
  }
  let handlechange = (e)=>{
    setSearchInfo(e.target.value)
    if (e.target.value === "") {
      setsearceFilter([])
    }else{
      let searchOne = data.filter((item)=>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setsearceFilter(searchOne)
    }
  }
  let handleSearchProduct = (id)=>{
    navigate(`/shoppage/${id}`)
    setsearceFilter([])
    setSearchInfo("")
  }

  const handleKeyDown = (e)=>{
    if(searchFilter.length > 0){
      if(e.key === "ArrowDown"){
        setActiveIndex((prevIndex) => prevIndex < searchFilter.length -1 ? prevIndex +1 : prevIndex)
      }else if(e.key === "ArrowUp"){
        setActiveIndex((prevIndex) =>( prevIndex > 0 ? prevIndex - 1 : prevIndex))
      }else if(e.key === "Enter" && activeIndex >=0){
        handleSearchProduct(searchFilter[activeIndex].id)
      }
    }
  }

  const handleCategory = (citem) => {
    // const categoryFilter = data.filter((item) => item.category === citem);
    // setCateFilter(categoryFilter);
    navigate(`/shoppage?category=${encodeURIComponent(citem)}`);
  };

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
                <ul onClick={()=>setCatagorishow(false)}>
                  {category.map((item,i)=>(
                    <li onClick={()=>handleCategory(item)} key={i} className="font-dm-sans text-[#b1adad] font-normal text-base hover:pl-[31px] pl-[21px] py-[16px] duration-500 cursor-pointer hover:text-white ease-in-out border-b-2 border-[#6b6969]">
                      <Link to='/shoppage'>
                      {item}
                    </Link>
                      </li>
                  ))}
                </ul>
              </div>
            )}
            </div>
          </div>
          <div className="w-2/4">
            <div className="relative">
              <input value={searchInfo} onKeyDown={handleKeyDown} onChange={handlechange} className="w-full h-[50px] placeholder:text-[#C4C4C4] text-black lg:pl-3 pl-1" type="text" placeholder="Search Products" />
              <div className="absolute top-[50%] translate-y-[-50%] right-2 lg:right-5">
                <FaSearch className="cursor-pointer" />
              </div>
              {searchFilter.length > 0 && 
              <div className="absolute z-50 top-[52px] overflow-y-scroll left-0 lg:h-[400px] h-[250px] w-full p-[20px] bg-[#F5F5F3] scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-[#F5F5F3] cursor-pointer">
                {searchFilter.map((item,i)=>(
                  <div key={i} onClick={()=>handleSearchProduct(item.id)} className={`lg:flex items-center gap-x-[100px] lg:pl-[150px] ${i === activeIndex ? "bg-gray-200" : ""}`}>
                  <div className="w-[80px] lg:block hidden">
                    <img className="w-full" src={item.thumbnail} alt="" />
                  </div>
                  <div className="">
                    <h2 className="font-dm-sans font-normal text-base ">{item.title}</h2>
                  </div>
                  </div>
                ))}
              </div>
            }
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-2 lg:gap-5">
              <div ref={userRef} className="relative flex">
                <FaUser className="text-xl cursor-pointer" onClick={() => setUsershow(prev => !prev)} />
                <MdOutlineArrowDropDown className="text-xl cursor-pointer" />
                {usershow && (
                  <div className="absolute z-50 top-9 right-0 text-center w-[200px]">
                    <Link  to='/Myaccountpage'>
                    <button onClick={()=>setUsershow(false)} className="w-[196px] py-[16px] bg-white hover:bg-black duration-500 hover:text-white text-black font-dm-sans font-bold text-base mb-1">My Account</button>
                    </Link>
                    <Link to='/loginpage'>
                    <button onClick={()=>setUsershow(false)} className="w-[196px] py-[16px] bg-white hover:bg-black duration-500 hover:text-white text-black font-dm-sans font-bold text-base">Log Out</button>   
                    </Link>
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
                  <div    className="absolute border-[1px] border-[#dfdfdb] z-50 top-7 w-[350px] right-[-25px] lg:right-0 lg:w-[360px] bg-white">
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
                        <button onClick={handlecartpage} className="lg:py-[16px] py-2 px-5 lg:px-[41px] border-black border-2 hover:bg-black hover:text-white duration-500">View Cart</button>
                        <Link to='/checkoutpage'>
                        <button onClick={()=>setCartshow(false)} className="lg:py-[16px] py-2 px-5 lg:px-[41px] border-black border-2 hover:bg-black hover:text-white duration-500">Checkout</button>
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