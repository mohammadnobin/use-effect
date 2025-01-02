import React, { useContext, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import ProductleftcatebrancolorResuable from "./reuseable/ProductleftcatebrancolorResuable";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useLocation } from "react-router-dom";

const Productsleft = ({dataFromChild,dataFrombrand}) => {
    const location = useLocation();
   let data = useContext(ApiData)
   let [categroy, setCategory] = useState([])
   let [brand, setBrand] = useState([])
   let [cateFilter, setCateFilter] = useState([])
   let [brandFilter, setBrandFilter] = useState([])
  let [cshow, setCshow] = useState(true);
  let [cshowa, setCshowa] = useState(false);
  let [pricehowa, setpricehowa] = useState(false);
  let [high,setHigh] = useState()
  let [low,setLow] = useState()
  useEffect(()=>{
    dataFromChild(cateFilter)
    dataFrombrand(brandFilter)

  },[cateFilter,dataFromChild,dataFrombrand,brandFilter])

  let handleclick = () => {
    setCshow(!cshow);
  };
  let handleclicka = () => {
    setCshowa(!cshowa);
  };
  
  let handleAllProducts= () => {
    setCateFilter('')
    setBrandFilter('')
  }


  useEffect(()=>{
      setCategory([...new Set(data.map((item) => item.category))]);
      setBrand([...new Set(data.map((item) => item.brand))]);
  },[data])

  const handleCategory = (citem) => {
    const categoryFilter = data.filter((item) => item.category === citem);
    setCateFilter(categoryFilter);
  };
  const handlebrand = (bitem) => {
    const branFilter = data.filter((item) => item.brand === bitem);
    setBrandFilter(branFilter);
    setCateFilter('')
  };

  let handlelprice=(value)=>{
    setLow(value.low)
    setHigh(value.high)
    let pricefilter = data.filter((item)=>item.price > value.low && item.price < value.high)
    setCateFilter(pricefilter)
  }

   useEffect(() => {
    const getCategoryFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('category');
    };

    const category = getCategoryFromQuery();
    if (data) {
        if (category) {
            const filtered = data.filter((product) => product.category === category);
            setCateFilter(filtered);
        } else {
          setCateFilter(data);
        }}
      }, [data, location]);


  return (
    <>
      <div className="col-span-3">
        <ProductleftcatebrancolorResuable title='Shop by Category' handleclick={handleclick} cshow={cshow} categroy={categroy} handleAllProducts={handleAllProducts} handleCategory={handleCategory} allproducts='All Products' />
        <ProductleftcatebrancolorResuable title='Shop by Brand' handleclick={handleclicka} cshow={cshowa} categroy={brand} handleCategory={handlebrand} />
        <div className="">
        <div
         onClick={()=>setpricehowa(!pricehowa)}
          className="flex justify-between items-center pb-[35px] cursor-pointer"
        >
          <h3 className="font-dm-sans font-bold text-xl leading-[26px]  ">
          Shop by Price
          </h3>
          {pricehowa ? (
            <span>
             <IoMdArrowDropup className='text-[26px]' />
            </span>
          ) : (
            <span>
       <IoMdArrowDropdown className='text-[26px]' />
            </span>
          )}
        </div>

          <h3  className="font-dm-sans font-bold text-xl leading-[26px]  "></h3>
          {pricehowa &&
          <ul>
            <li onClick={()=>handlelprice({low:0,high:9.99})} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">$0.00 - $9.99
            <span>
                  <FaPlus />
                </span>
            </li>
            <li onClick={()=>handlelprice({low:10,high:19.99})} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">$10.00 - $19.99  <span>
                  <FaPlus />
                </span></li>
            <li onClick={()=>handlelprice({low:20,high:29.99})} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">$20.00 - $29.99  <span>
                  <FaPlus />
                </span></li>
            <li onClick={()=>handlelprice({low:30,high:39.99})} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">$30.00 - $39.99  <span>
                  <FaPlus />
                </span></li>
            <li onClick={()=>handlelprice({low:40,high:10000})} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">$40.00 - $69.99  <span>
                  <FaPlus />
                </span></li>
          </ul>
          }
        </div>
      </div>
    </>
  );
};

export default Productsleft;