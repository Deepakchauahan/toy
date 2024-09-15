import BannerMain from "../components/BannerMain";
import CartPrice from "../components/CartPrice";
import CheckoutData from "../components/CheckoutData";

const Checkout = () => {
  return (
    <main>
      <section className="section cart-main">
        <div className="container">
          <div className="flex-main">
            <div className="section-inner cart-product">
             <CheckoutData/>
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

export default Checkout;
