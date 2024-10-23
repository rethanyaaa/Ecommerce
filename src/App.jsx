import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase"; // Import the correct auth object
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run when the app component loads...
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>", authUser);

      if (authUser) {
        // The user just logged in / was already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Clean up subscription
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Navbar /> {/* Navbar will receive the updated user state */}
      <Routes>
      <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
