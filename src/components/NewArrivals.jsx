import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";

import { FaLongArrowAltLeft,FaLongArrowAltRight  } from "react-icons/fa";



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

  let [info, setinfo] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setinfo(response.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="">
      <Container>
        <div className="lg:mb-[48px] mb-6 ">
          <h2 className="font-dm-sans text-center lg:text-left font-bold text-[39px] leading-[50px] text-[#262626] ">
            New Arrivals
          </h2>
        </div>
        <Slider {...settings}>
          {info.map((item) => (
            <div key={item.id} className="group flex  flex-col !w-[90%] !ml-[20px]">
              <div className="relative bg-[#f2f2f2] mb-[24px] ">
                <div className="absolute top-[20px] left-[20px]">
                  <h4 className="py-[9px] px-[32px] bg-black text-white">
                    10% 
                  </h4>
                </div>
                <img className="w-full" src={item.thumbnail} alt="" />
                <div className="absolute text-right bg-[#FFFFFF] w-full duration-500 ease-in-out transition-all bottom-0 h-0 group-hover:h-[160px] overflow-hidden right-0  pr-[31px] ">
                  <div className="py-[30px] ">
                    <div className="">
                      <button>
                        <ul className="flex items-center gap-[15px]">
                        <li>
                          <h4 className="font-dm-sans font-normal text-base leading-5 text-[#767676] hover:font-bold hover:text-[#262626] transition-all ease-in-out duration-200 ">
                            Add to Wish List
                          </h4>
                        </li>
                        <li>
                          <FaHeart />
                        </li>
                      </ul>
                      </button>
                      
                    </div>
                    <div className="py-[21px]">
                      <button>
                        <ul className="flex items-center">
                        <li></li>
                        <li>
                          <TfiReload />
                        </li>
                      </ul>
                      </button>
                      
                    </div>
                    <div className="">
                      <button>
                         <ul className="flex items-center gap-[15px] ">
                        <li>
                          <h4 className="font-dm-sans font-normal text-base leading-5 text-[#767676] hover:font-bold hover:text-[#262626] transition-all ease-in-out duration-200 ">
                            Add to Cart
                          </h4>
                        </li>
                        <li>
                          <FaShoppingCart />
                        </li>
                      </ul>
                      </button>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <h4 className="font-dm-sans font-bold text-xl leading-[26px] text-[#262626]">
                  {item.title}
                </h4>
                <h6 className="font-dm-sans font-normal text-base leading-[30px] text-[#767676] ">
                  ${item.price}
                </h6>
              </div>
              <div className="mt-auto">
                <h6 className="mt-[15px] font-dm-sans font-normal text-base leading-[30px] text-[#767676] ">
                  Black
                </h6>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;
