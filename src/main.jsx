// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import App component
import "./index.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
 

// Ensure you use createRoot from React DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter> {/* Wrap App inside BrowserRouter */}
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
