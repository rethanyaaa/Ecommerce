import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase"; // Make sure to import from the updated file
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Sign in the user
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // Signed in successfully
        console.log("Signed in", authUser);
        if (authUser) {
          navigate("/"); // Use the navigate function to redirect
        }
      })
      .catch((error) => alert(error.message));
  };

  // Register a new user
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // Successfully created a new user
        console.log("Account created", authUser);
        if (authUser) {
          navigate("/"); // Use the navigate function to redirect
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>SIGN IN</h1>

        <form>
          <h4>E-mail</h4>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4>Password</h4>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
          />

          <button type="submit" onClick={signIn} className="login-signInButton">
            SIGN IN
          </button>
          <button
            type="submit"
            onClick={register}
            className="login-createAccountButton"
          >
            CREATE YOUR ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
