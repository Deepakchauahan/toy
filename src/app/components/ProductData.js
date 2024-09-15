"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductData = () => {
  const [fav, setFav] = useState(false);

  return (
    <div className="product-data product-card">
      <h2 className="main-title">
        FOOFII Big Size Cutest & Super Quality Teddy Bear A Per FOOFII Big Size
        Cutest & Super Quality Teddy Bear{" "}
      </h2>
      <span className="product-bage-bottom">Hot deal</span>

      <p className="desc">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available
      </p>
      <p className="price product">
        <span className="sell-price">₹359</span>
        <span className="mrp-price">₹2,549</span>
        <span className="disc-price">85% off</span>
      </p>
      <div className="btn-data">
        <button>-</button>1<button>+</button>
      </div>
      <button
        className="wishlist"
        type="button"
        onClick={() => {
          setFav(!fav);
        }}
      >
        {/* <FaHeart color={fav ? "#b80c0c" : "#c2c2c2"} />{" "} */}
        <span> {fav ? "Add to wishlist" : "Added to wishlist"} </span>
      </button>
     <div className="perform-action">
       <button className="add-card button-bg">Add to Cart</button>
      <button className="add-card button-outline">Buy Now</button>
     </div>
    </div>
  );
};

export default ProductData;
