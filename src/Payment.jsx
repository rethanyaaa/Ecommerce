import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import PaymentSubtotal from "./PaymentSubtotal";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment-page">
      {/* Left Section - Address Section */}
      <div className="payment-container">
        <div className="payment-left">
          <h3 className="payment-title">Select Delivery Address</h3>
          <div className="address-box">
            <div className="address-header">
              <div className="address-details">
                <div className="address-name-tag">
                  <h4 className="address-name">Rethanya</h4>
                  <span className="address-tag">HOME</span>
                </div>
              </div>
            </div>
            <div className="address-body">
              <p>Site no-61A, Maruthi Nagar, Thoppampatti</p>
              <p>Coimbatore, Tamil Nadu - 641017</p>
              <p>Mobile: 6379069391</p>
              <p>Pay on Delivery available</p>
            </div>
            <div className="address-actions">
              <button className="address-btn">Remove</button>
              <button className="address-btn">Edit</button>
            </div>
          </div>
          <button className="add-new-address-btn">+ Add New Address</button>
        </div>

        {/* Right Section - Price Details */}
        <div className="payment-right">
          <PaymentSubtotal />
        </div>
      </div>
    </div>
  );
}

export default Payment;
