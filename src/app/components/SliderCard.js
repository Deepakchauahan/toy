"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./common/ProductCard";
import Slider from "react-slick";


const SliderCard = () => {
   const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className="section slider-card">
      <div className="container">
        <div className="section-inner">
          <div className="header-slider-card">
            <h3 className="main-title">Featured Toy's</h3>
            <Link href={"#!"} className="button-bg">
              <FaArrowRightLong />
            </Link>
          </div>
           <Slider {...settings} >
          {Array.from(Array(6)).map((product,index)=>(
            <ProductCard key={index}/>
          ))}
            </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderCard;
