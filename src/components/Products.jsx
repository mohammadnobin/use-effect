import React, { useState } from "react";
import Container from "./Container";
import Productsleft from "./Productsleft";
import ProductsRight from "./pagination/ProductsRight";
import PageHeaderReuseable from "./reuseable/PageHeaderReuseable";

const Products = () => {
  let [cateFilter, setCateFilter] = useState([])
  let [brandFilter, setBrandFilter] = useState([])


  let dataFromChild = (productLeftdata)=>{
    setCateFilter(productLeftdata)
  }
  let dataFrombrand = (productLefbrandtdata)=>{
    setBrandFilter(productLefbrandtdata)
  }

 return (
    <section id="" className="pb-[140px]">

      <Container>
        <PageHeaderReuseable title="Products" prev="Home" next="Products" />
        <div className="lg:grid grid-cols-12 gap-x-[39px]">
            <Productsleft dataFromChild={dataFromChild} dataFrombrand={dataFrombrand} />
            <ProductsRight cateFilter={cateFilter} brandFilter={brandFilter} />
        </div>
      </Container>
    </section>
  );
};
export default Products;
