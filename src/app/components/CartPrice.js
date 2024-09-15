const CartPrice = () => {
  return (
    <div className="cart-price">
      <div className="list-item price">
        <span>Price (2 items)</span>
        <span>₹1234</span>
      </div>
       <div className="list-item disc">
        <span>Discount</span>
        <span>-1234</span>
      </div>
      <div className="list-item del">
        <span>Delivery Charges</span>
        <span>₹100</span>
      </div>
       <div className="list-item total">
        <span>Total</span>
        <span>₹1234</span>
      </div>
      <button className="button-bg">Place Order</button>
    </div>
  );
};

export default CartPrice;
