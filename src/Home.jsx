import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home__container">
      <header className="home__header">
        <h1>Welcome to Our E-commerce Store</h1>
        <p>Find the latest fashion, gadgets, and more!</p>
      </header>

      <div className="product-grid">
        <Product
          id="13465"
          image="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D"
          title="Stylish Men's Jacket"
          price={2999}
          rating={4}
        />
        <Product
          id="28756"
          image="https://plus.unsplash.com/premium_photo-1690205357200-425b3b64b54d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
          title="Elegant Women's Dress"
          price={2499}
          rating={4}
        />
        <Product
          id="32345"
          image="https://images.unsplash.com/photo-1517502474097-f9b30659dadb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
          title="Smart Watch"
          price={4999}
          rating={4}
        />
         
      </div>
    </div>
  );
};

export default Home;
