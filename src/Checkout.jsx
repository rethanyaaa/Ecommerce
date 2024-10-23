import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <h1>Your Shopping Basket</h1>

        {basket.map((item) => (
          <CheckoutProduct
            key={item.id} // Add a key prop for list rendering
            id={item.id}   // Use item.id
            title={item.title} // Use item.title
            image={item.image} // Use item.image
            price={item.price} // Use item.price
            rating={item.rating} // Use item.rating
          />
        ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
