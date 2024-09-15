import BannerMain from "../components/BannerMain";
import CartPrice from "../components/CartPrice";
import CartCard from "../components/common/CartCard";

const Cart = () => {
  return (
    <main>
      <section className="section cart-main">
        <div className="container">
          <div className="flex-main">
            <div className="section-inner cart-product">
              {Array.from(Array(6)).map((product, index) => (
                <CartCard />
              ))}
            </div>

            <div className="section-inner price-detail">
              <h3>Price details</h3>
              <CartPrice />
            </div>
          </div>
        </div>
      </section>
      <BannerMain />
    </main>
  );
};

export default Cart;
