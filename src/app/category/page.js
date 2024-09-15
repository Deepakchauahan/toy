import BannerCategory from "../components/BannerCategory";
import BannerMain from "../components/BannerMain";
import ProductCard from "../components/common/ProductCard";

const Category = () => {
  return (
    <main>
      <BannerMain />
      <BannerCategory />
      <section className=" section cat-list">
        <div className="container">
          <div className="section-inner">
            {Array.from(Array(6)).map((product, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;
