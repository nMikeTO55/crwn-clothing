import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context.jsx";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header" />
      <div className="header-block">
        <h2> I Am the checkout Page</h2>
        <div>
          {cartItems.map((cartItem) => {
            const { id, name, quantity } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span>decrement</span>
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
