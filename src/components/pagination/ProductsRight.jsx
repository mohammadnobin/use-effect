import React, { useContext,useEffect,useState } from "react";
import { FaList } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import ProductCart from "../reuseable/ProductCart";
import { ApiData } from "../ContextApi";
import Pagination from "./Pagination";

const ProductsRight = ({onChilData,cateFilter,brandFilter}) => {
  let data = useContext(ApiData)
  let [currentPage, setCurrentpage] = useState(1)
  let [parPage, setparpage] = useState(15)
  let [activeMulti,setActiveMulti] = useState("")
  let lastpage  = currentPage * parPage
  let firstPage = lastpage - parPage
  let allPage = data.slice(firstPage, lastpage)


  let [pagineShow, setPagineShow] = useState(true)
  let [currentFilter, setcurrentFilter] = useState(1)
  let [perFilter, setParFilter] = useState(6)
  let lastFilter = currentFilter * perFilter
  let firstFilter = lastFilter - perFilter
  let allFilter = cateFilter.slice(firstFilter,lastFilter)

  let filterNumber = []
  for (let i = 0; i < cateFilter.length / perFilter; i++) {
    filterNumber.push(i)
  }

  let paginate2 =(filterNumber)=>{
    setcurrentFilter(filterNumber + 1)
  }
   let next2 = ()=>{
    if (currentFilter < filterNumber.length) {
      setcurrentFilter((state)=> state  + 1)
    }
   }
   let prev2 = ()=>{
    if (currentFilter > 1) {
      setcurrentFilter((state)=> state - 1)
    }
   }

  useEffect(() => {
    onChilData(data);
    }, [data,onChilData,cateFilter,brandFilter]);
  let pageNumber = []
  for (let i = 0; i < data.length / parPage; i++) {
    pageNumber.push(i)
  }
  let paginate =(pageNumber)=>{
    setCurrentpage(pageNumber + 1)
  }
   let next = ()=>{
    if (currentPage < pageNumber.length) {
      setCurrentpage((state)=> state  + 1)
    }
   }
   let prev = ()=>{
    if (currentPage > 1) {
      setCurrentpage((state)=> state - 1)
    }
   }
   let handleShowShop = (e) => {
    setparpage(e.target.value)
    setParFilter(e.target.value)
   }
   let hanldleActive = ()=>{
    setActiveMulti("active")
   }
  return (
    <>
      <div className="col-span-9">
        <div className="lg:flex sm:flex justify-between items-center  mb-[60px]">
          <div className="w-1/2">
            <div className="flex items-center  gap-x-[15px] lg:ml-5">
              <div onClick={()=>setActiveMulti("")} className={`${activeMulti == "active" ? "" : "bg-black text-white "}" border-2 duration-300 ease-in-out cursor-pointer p-2 "`}>
                <BiSolidCategory className="text-[20px] " />
              </div>
              <div onClick={hanldleActive} className={`${activeMulti == "active" ? " bg-black text-white  " : ""} ' border-2 duration-300 ease-in-out cursor-pointer p-2 ' `}>
                <FaList className="text-[20px]" />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:justify-end justify-between mr-4 gap-x-5 lg:w-1/2">
            <div className="flex items-center">
              <label className="pr-[17px] font-dm-sans font-normal text-base leading-8 text-[#767676] ">
                Sort by:
              </label>
              <select className="border-[#F0F0F0] border-[1px]   lg:w-[239px] py-[5px] font-dm-sans font-normal text-base leading-8 text-[#767676] ">
                <option value="">20</option>
                <option value="">30</option>
              </select>
            </div>
            <div className="lg:w-[199px] flex items-center">
              <label className="pr-[17px] font-dm-sans font-normal text-base leading-8 text-[#767676] ">
                Show
              </label>
              <select onChange={handleShowShop} className="border-[#F0F0F0] border-[1px] lg:w-[139px] py-[5px] font-dm-sans font-normal text-base leading-8 text-[#767676]">
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
              </select>
            </div>
          </div>
        </div>
        {cateFilter.length > 0 ?
        <>
                 <div className={`${activeMulti == "active" ? "lg:w-1/3" : "grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-y-[50px]"}  `}>
                 {allFilter.map((item,i) => (
                   <ProductCart
                   key={i}
                     discount={item.discountPercentage}
                     thumbnail={item.thumbnail}
                     title={item.title}
                     price={item.price}
                     id={item.id}
                   />
                 ))}
               </div>
               {pagineShow ? cateFilter.length > 6 && 
               <div className="flex justify-between items-center mt-[50px]">
        <Pagination pageNumber={filterNumber} paginate={paginate2} next={next2} prev={prev2} currentPage={currentFilter} />
        <div className="">
          <h4 className="font-dm-sans text-sm leading-[30px] font-normal text-[#767676]">Products from 1 to 6 of 30</h4>
        </div>
         </div>
         :
         <div className=""></div>   
               }
        </>
         :
         <>
        <div className={`${activeMulti == "active" ? "lg:w-1/3" : "grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-y-[50px]"} `}>
          {allPage.map((item,i) => (

            <ProductCart
            key={i}
              discount={item.discountPercentage}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
         <div className="lg:flex justify-between items-center mt-[50px]">
        <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage} />
        <div className="">
          <h4 className="font-dm-sans text-sm leading-[30px] font-normal text-[#767676] lg:text-right text-center">Products from 1 to 6 of 30</h4>
        </div>
         </div>
         </>
         }
      </div>
    </>
  );
};

export default ProductsRight;


