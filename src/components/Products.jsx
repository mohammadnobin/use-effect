import React, { useEffect, useState } from "react";
import Container from "./Container";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Productsleft from "./Productsleft";
import ProductsRight from "./pagination/ProductsRight";

const Products = () => {
  let [cateFilter, setCateFilter] = useState([])
  let handleData= (data)=>{
  }
  let dataFromChild = (productLeftdata)=>{
    setCateFilter(productLeftdata)
  }
 return (
    <section id="" className="pb-[140px]">

      <Container>
        <div className="pt-[124px] pb-[130px] ">
          <h2 className="font-dm-sans text-black pb-[11px] text-[49px] font-bold leading-[63.5px]">
            Products
          </h2>
          <div className="flex items-center gap-2">
            <p className="font-dm-sans text-base leading-[12px] font-normal text-black  ">
              <NavLink to="/">Home</NavLink>
            </p>
            <IoIosArrowBack className="text-[16px]" />
            <p className="font-dm-sans text-base leading-[12px] font-normal text-black  ">
              Products
            </p>
          </div>
        </div>
        <div className="lg:grid grid-cols-12 gap-x-[39px]">
            <Productsleft dataFromChild={dataFromChild} />
            <ProductsRight onChilData={handleData} cateFilter={cateFilter} />
        </div>
      </Container>
    </section>
  );
};
export default Products;
