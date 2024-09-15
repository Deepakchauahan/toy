"use client";
import Image1 from "../assets/product/toy.jpg";
import Image2 from "../assets/banner/2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProductSlider = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={Image1.src} alt="image1" />
        </div>
        <div>
          <img src={Image1.src} alt="image2" />
        </div>
        <div>
          <img src={Image1.src} alt="image3" />
        </div>
        <div>
          <img src={Image1.src} alt="image4" />
        </div>
        <div>
          <img src={Image1.src} alt="image5" />
        </div>
      </Carousel>
    </>
  );
};

export default ProductSlider;
