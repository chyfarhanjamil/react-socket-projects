import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";

export default function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Fake Twitter</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <LogIn />
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            className="infoInput"
            placeholder="First Name"
            type="text"
            name="firstname"
          />
          <input
            className="infoInput"
            placeholder="Last Name"
            type="text"
            name="lastname"
          />
        </div>
        <div>
          <input
            className="infoInput"
            placeholder="Username"
            type="text"
            name="username"
          />
        </div>
        <div>
          <input
            className="infoInput"
            placeholder="Password"
            type="text"
            name="password"
          />
          <input
            className="infoInput"
            placeholder="Confirm Password"
            type="text"
            name="confirmpass"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
