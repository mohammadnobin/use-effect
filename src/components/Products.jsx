import React, { useState } from "react";
import Container from "./Container";
import Productsleft from "./Productsleft";
import ProductsRight from "./pagination/ProductsRight";
import PageHeaderReuseable from "./reuseable/PageHeaderReuseable";

const Products = () => {
  let [cateFilter, setCateFilter] = useState([])
  let [brandFilter, setbrandFilter] = useState([])
  let handleData= (data)=>{
  }
  let dataFromChild = (productLeftdata)=>{
    setCateFilter(productLeftdata)
  }
  let dataFromChidBrand = (productLefBrandtdata)=>{
    setbrandFilter(productLefBrandtdata)
  }
 return (
    <section id="" className="pb-[140px]">

      <Container>
        <PageHeaderReuseable title="Products" prev="Home" next="Products" />
        <div className="lg:grid grid-cols-12 gap-x-[39px]">
            <Productsleft dataFromChild={dataFromChild} dataFromChidBrand={dataFromChidBrand} />
            <ProductsRight onChilData={handleData} cateFilter={cateFilter} brandFilter={brandFilter} />
        </div>
      </Container>
    </section>
  );
};
export default Products;
