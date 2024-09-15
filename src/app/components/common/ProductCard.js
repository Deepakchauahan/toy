"use client"
import Image from "next/image";
import Toy1 from "../../assets/product/toy.jpg";
import {  FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const ProductCard = () => {
    const[fav,setFav] = useState(false)
  return (
    <div className="product-card w-14">
      <div className="product-image">
        <button className="wishlist" type="button" onClick={()=>{setFav(!fav)}}>
          <FaHeart color={fav ? "#b80c0c":"#c2c2c2"} />
        </button>
        <span className="product-bage">BestSeller</span>
        <Link href={"#!"}>
          <Image src={Toy1} alt="" />
        </Link>
      </div>
      <h3>
        <Link href={"#!"}>
          FOOFII Big Size Cutest & Super Quality Teddy Bear A Per FOOFII Big
          Size Cutest & Super Quality Teddy Bear
        </Link>
      </h3>
      <p className="price">
          <span className="sell-price">₹359</span>
          <span className="mrp-price">₹2,549</span>
          <span className="disc-price">85% off</span>
      </p>
      <span className="product-bage-bottom">Hot deal</span>
      <button className="add-card button-outline">Add to cart</button>
    </div>
  );
};

export default ProductCard;
