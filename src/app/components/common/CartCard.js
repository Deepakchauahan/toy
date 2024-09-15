import Image from "next/image";
import Toy1 from "../../assets/product/toy.jpg";
import Link from "next/link";

const CartCard = () => {
  return (
    <div className="product-card">
      <Link href={"#!"}>
        <Image src={Toy1} alt="" />
      </Link>
      <div className="side-data">
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
        <div className="btn-data">
          <button>-</button>1<button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
