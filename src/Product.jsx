import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">₹{price}</p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <button className="add-to-cart-btn" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
