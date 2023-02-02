import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
} from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import Register from "../Registration/Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [styleState, setStyleState] = useState(false);
  const [mailfield, setMailField] = useState(false);
  const [passwordfield, setPasswordField] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  const toogleStyleHandler = () => {
    setStyleState(!styleState);
  };

  const loginHandler = () => {
    if (!email) {
      console.log("Please enter email id and password");
      setMailField(true);
      return;
    } else {
      setMailField(false);
    }
    if (!password) {
      setPasswordField(true);
      return;
    } else {
      setPasswordField(false);
    }

    console.log("Custom", auth);
    setMailField(false);
    setPasswordField(false);
    logInWithEmailAndPassword(email, password);
  };
  return (
    // <div className="login">
    //   <div className="login__container">
    //     <input
    //       type="text"
    //       className="login__textBox"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="E-mail Address"
    //     />
    //     <input
    //       type="password"
    //       className="login__textBox"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button
    //       className="login__btn"
    //       onClick={() => logInWithEmailAndPassword(email, password)}
    //     >
    //       Login
    //     </button>
    //     <button className="login__btn login__google" onClick={signInWithGoogle}>
    //       Login with Google
    //     </button>
    //     <div>
    //       <Link to="/reset">Forgot Password</Link>
    //     </div>
    //     <div>
    //       Don't have an account? <Link to="/register">Register</Link> now.
    //     </div>
    //   </div>
    // </div>
    <>
      <h2>Resourcefull</h2>

      <div
        className={`container ${styleState ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <Register></Register>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h3>Sign in</h3>
            <div className="social-container">
              <button className="googleBg" onClick={signInWithGoogle}></button>
            </div>
            <h6>or use your account</h6>
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            {mailfield ? <span>Please enter email id</span> : null}
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {passwordfield ? <span>Please enter password</span> : null}
            <a href="#4">Forgot your password?</a>
            <button className="button" onClick={loginHandler}>
              Sign In
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost button"
                id="signIn"
                onClick={toogleStyleHandler}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost button"
                id="signUp"
                onClick={toogleStyleHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
