import { FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <Link href={"#!"} className="logo">Logo</Link>
          <div className="menus">
            <Link href={"#!"}>All</Link>
            <Link href={"#!"}>Boys</Link>
            <Link href={"#!"}>Girls</Link>
            <Link href={"#!"}>Latest</Link>
            <Link href={"#!"}> Popular</Link>
          </div>
          <div className="menus-right">
            <Link href={"#!"}>Login</Link>
            <Link href={"#!"} className="cart">
              <FaCartArrowDown />
              <span className="product-count">1</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
