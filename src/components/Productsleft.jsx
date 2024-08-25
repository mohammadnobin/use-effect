import React, { useContext, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ApiData } from "./ContextApi";

const Productsleft = ({dataFromChild}) => {
   let data = useContext(ApiData)
   let [categroy, setCategory] = useState([])
   let [cateFilter, setCateFilter] = useState([])
  let [cshow, setCshow] = useState(true);

  useEffect(()=>{
    dataFromChild(cateFilter)
  },[cateFilter,dataFromChild])

  let handleclick = () => {
    setCshow(!cshow);
  };
  
  let handleAllProducts= () => {
    setCateFilter('')
  }


  useEffect(()=>{
      setCategory([...new Set(data.map((item) => item.category))]);
  },[data])

  const handleCategory = (citem) => {
    const categoryFilter = data.filter((item) => item.category === citem);
    setCateFilter(categoryFilter);
  };
  return (
    <>
      <div className="col-span-3">
        <div className="sticky top-[150px] ">
          <div
          onClick={handleclick}
          className="flex justify-between items-center pb-[35px] cursor-pointer"
        >
          <h3 className="font-dm-sans font-bold text-xl leading-[26px]  ">
            Shop by Category
          </h3>
          {cshow ? (
            <span>
              <FaMinus />
            </span>
          ) : (
            <span>
              <FaPlus />
            </span>
          )}
        </div>
        {cshow && (
          <div className="pb-[53px]">
            <ul>
              <li onClick={handleAllProducts} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">All Products

              <span>
                  <FaPlus />
                </span>
              </li>
              {categroy.map((item,i)=>(

              <li onClick={()=>handleCategory(item)} key={i} className="cursor-pointer flex justify-between items-center py-[20px] border-[#F0F0F0]  border-b-2 text-[#767676] font-dm-sans font-normal text-base leading-[30px]">
                {item}
                <span>
                  <FaPlus />
                </span>
              </li>
              ))}
            </ul>
          </div>
        )}
        </div>
        
      </div>
    </>
  );
};

export default Productsleft;