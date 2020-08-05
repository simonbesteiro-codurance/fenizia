import React from "react";
import "./Login.css";
import logo__fenizia from "../img/logo__fenizia.svg";
function Login() {
  return (
    <div className="login-main-container">
      <div className="login-main-container__wrap">
        <form className="login-wrap__form">
          <span>
            <img
              src="https://image.flaticon.com/icons/svg/1000/1000946.svg"
              className="login-wrap__form__logo"
            />
          </span>

          <span className="login100-form-title p-b-34 p-t-27">Log in</span>

          <div
            className="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <input
              className="input100"
              type="text"
              name="username"
              placeholder="Username"
            />
            <span className="focus-input100" data-placeholder=""></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="Password"
            />
            <span className="focus-input100" data-placeholder=""></span>
          </div>

          <div className="contact100-form-checkbox">
            <input
              className="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="remember-me"
            />
            <label className="label-checkbox100" for="ckb1">
              Remember me
            </label>
          </div>

          <div className="login-wrap__form__btn">
            <button className="login100-form-btn">Login</button>
          </div>

          <div className="text-center p-t-90">
            <a className="txt1" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
