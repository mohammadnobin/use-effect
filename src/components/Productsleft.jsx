import React, { useContext, useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import ProductleftcatebrancolorResuable from "./reuseable/ProductleftcatebrancolorResuable";

const Productsleft = ({dataFromChild,dataFromChidBrand}) => {
   let data = useContext(ApiData)
   let [categroy, setCategory] = useState([])
   let [brand, setBrand] = useState([])
   let [cateFilter, setCateFilter] = useState([])
   let [brandFilter, setBrandFilter] = useState([])
  let [cshow, setCshow] = useState(true);
  let [cshowa, setCshowa] = useState(true);
  useEffect(()=>{
    dataFromChild(cateFilter)
    dataFromChidBrand(brandFilter)
  },[cateFilter,dataFromChild,brandFilter,dataFromChidBrand])

  let handleclick = () => {
    setCshow(!cshow);
  };
  let handleclicka = () => {
    setCshowa(!cshowa);
  };
  
  let handleAllProducts= () => {
    setCateFilter('')
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
    setCateFilter(branFilter);
  };
  return (
    <>
      <div className="col-span-3">
        <ProductleftcatebrancolorResuable title='Shop by Category' handleclick={handleclick} cshow={cshow} categroy={categroy} handleAllProducts={handleAllProducts} handleCategory={handleCategory} />
        <ProductleftcatebrancolorResuable title='Shop by Color' handleclick={handleclicka} cshow={cshowa} categroy={brand} handleCategory={handlebrand} />
      </div>
    </>
  );
};

export default Productsleft;