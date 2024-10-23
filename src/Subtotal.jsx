import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // Mock data for demo purposes (replace with actual values as needed)
  const totalMRP = getBasketTotal(basket);
  const discountOnMRP = 2023;
  const shippingFee = 79;
  const platformFee = 0; // Assuming platform fee is free

  return (
    <div className="subtotal">
      <h3 className="subtotal-title">PRICE DETAILS ({basket.length} items)</h3>

      <div className="subtotal-priceDetail">
        {/* Total MRP */}
        <CurrencyFormat
          renderText={(value) => (
            <p className="subtotal-item">
              <span>Total MRP</span>
              <span>{value}</span>
            </p>
          )}
          decimalScale={2}
          value={totalMRP}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

        {/* Discount on MRP */}
        <CurrencyFormat
          renderText={(value) => (
            <p className="subtotal-item">
              <span>Discount on MRP</span>
              <span className="subtotal-discount">-{value}</span>
            </p>
          )}
          decimalScale={2}
          value={discountOnMRP}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

        {/* Coupon Discount */}
        <p className="subtotal-item">
          <span>Coupon Discount</span>
          <span className="subtotal-applyCoupon">Apply Coupon</span>
        </p>

        {/* Platform Fee */}
        <CurrencyFormat
          renderText={(value) => (
            <p className="subtotal-item">
              <span>Platform Fee</span>
              <span>{value}</span>
            </p>
          )}
          decimalScale={2}
          value={platformFee}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

        {/* Shipping Fee */}
        <CurrencyFormat
          renderText={(value) => (
            <p className="subtotal-item">
              <span>Shipping Fee</span>
              <span>
                {value} <strong>FREE</strong>
              </span>
            </p>
          )}
          decimalScale={2}
          value={shippingFee}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </div>

      {/* Total Amount */}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="subtotal-total">Total Amount: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button className="subtotal-button" onClick={() => navigate("/payment")}>
        PLACE ORDER
      </button>
    </div>
  );
}

export default Subtotal;
