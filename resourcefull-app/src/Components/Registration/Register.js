import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../config/firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = (e) => {
    e.preventDefault()
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history("/dashboard");
  }, [user, loading, history]);
  return (
    <div className="register">
       <h3>Create Account</h3>
      <div className="social-container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="button" onClick={register}>
          Register
        </button>
        <span className="register_label">Register with Google</span>
        <button className="googleBg" onClick={signInWithGoogle}></button>
      </div>
    </div>

    // <form action="#">
    //   <h3>Create Account</h3>
    //   <div className="social-container">
    //     <a href="#3" className="social">
    //       <i className="fab fa-google-plus-g"></i>
    //     </a>
    //   </div>
    //   <span>or use your email for registration</span>
    //   <input type="text" placeholder="Name" />
    //   <input type="email" placeholder="Email" />
    //   <input type="password" placeholder="Password" />
    //   <button className="button">Sign Up</button>
    // </form>
  );
}
export default Register;
