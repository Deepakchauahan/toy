"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../assets/banner/1.png";
import Image2 from "../assets/banner/2.png";
import Image from "next/image";

const BannerSlider = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="section">
      <div className="container">
        <Slider {...settings} className="banner-silder">
          <Image src={Image1} alt="" />
          <Image src={Image2} alt="" />
          <Image src={Image1} alt="" />
          <Image src={Image2} alt="" />
        </Slider>
      </div>
    </section>
  );
};

export default BannerSlider;
