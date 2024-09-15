import Image from "next/image";
import Cat1 from "../assets/category/1.jpg";
import Cat2 from "../assets/category/2.jpg";
import Cat3 from "../assets/category/3.jpg";
import Cat4 from "../assets/category/4.jpg";
import Link from "next/link";

const ShopByCategory = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-inner">
          <h3 className="main-title">Shop By Category</h3>
          <ul className="cat">
            <li>
              <Link href={"#!"}>
                <Image src={Cat1} alt="" />
                <h5 >0 to 3 Years</h5>
              </Link>
            </li>
             <li>
              <Link href={"#!"}>
                <Image src={Cat2} alt="" />
                <h5 >3 to 6 Years</h5>
              </Link>
            </li>
             <li>
              <Link href={"#!"}>
                <Image src={Cat3} alt="" />
                <h5 >6 to 10 Years</h5>
              </Link>
            </li>
             <li>
              <Link href={"#!"}>
                <Image src={Cat4} alt="" />
                <h5 >Grown up</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
