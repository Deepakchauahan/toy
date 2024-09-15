import BannerMain from "../components/BannerMain";
import ProductData from "../components/ProductData";
import ProductSlider from "../components/ProductSlider";

const Product = () => {
  return (
    <main>
      <section className="section product-main">
        <div className="container">
          <div className="section-inner">
            <ProductSlider />
            <ProductData />
          </div>
        </div>
      </section>
      <BannerMain />
    </main>
  );
};

export default Product;
