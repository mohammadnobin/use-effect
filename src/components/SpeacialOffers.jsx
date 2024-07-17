import React from "react";
import ProductCart from "./reuseable/ProductCart";
import special1 from "../assets/special1.png";
import special2 from "../assets/special2.png";
import special3 from "../assets/special3.png";
import special4 from "../assets/special4.png";
import Container from "./Container";

const SpeacialOffers = () => {
  return (
    <section id="" className="pb-[106px]">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <ProductCart
            price="50"
            title="Bestseller"
            thumbnail={special1}
            discount="10"
          />
          <ProductCart
            price="50"
            title="Bestseller"
            thumbnail={special2}
            discount="10"
          />
          <ProductCart
            price="50"
            title="Bestseller"
            thumbnail={special3}
            discount="10"
          />
          <ProductCart
            price="50"
            title="Bestseller"
            thumbnail={special4}
            discount="10"
          />
        </div>
      </Container>
    </section>
  );
};

export default SpeacialOffers;
