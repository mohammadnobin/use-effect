import React, { useContext } from "react";
import Container from "./Container";
import Slider from "react-slick";
import { FaLongArrowAltLeft,FaLongArrowAltRight  } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import ProductCart from "./reuseable/ProductCart";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute top-[50%] translate-y-[-50%] right-[19px] z-50 text-white p-[20px] bg-[#c7c7c7] rounded-full text-2xl cursor-pointer ' onClick={onClick}>

      <FaLongArrowAltRight />
      </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute top-[50%] translate-y-[-50%] left-[20px] z-50 text-white p-[20px] cursor-pointer bg-[#c7c7c7] rounded-full text-2xl  ' onClick={onClick}>
           <FaLongArrowAltLeft />
      </div>
  );
}

const NewArrivals = () => {
  let data = useContext(ApiData)
  var settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          arrows:false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  };


  return (
    <section className="">
      <Container>
        <div className="lg:mb-[48px] mb-6 ">
          <h2 className="font-dm-sans text-center lg:text-left font-bold text-[39px] leading-[50px] text-[#262626] ">
            New Arrivals
          </h2>
        </div>
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCart key={item.id} discount={item.discountPercentage} thumbnail={item.thumbnail} title={item.title} price={item.price} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;
