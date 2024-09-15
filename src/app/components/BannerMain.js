import Image from "next/image";
import Link from "next/link";
import BannerImage from "../assets/banner/banner-bg.png"

const BannerMain = () => {
  return (
    <section className="section upper-banner">
      <div className="container">
        <div className="section-inner">
            <Image src={BannerImage} alt="banner-image"/>
          <h3 className="main-title">India's Most Toy's Seller</h3>
          <div className="connect">
            <p>
              Connect Us: <Link href={"#!"}>+91 000000000</Link>
            </p>
            <p>
              Email Us: <Link href={"#!"}>toys@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMain;
