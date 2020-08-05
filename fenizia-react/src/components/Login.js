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

          <span>Log in</span>

          <div data-validate="Enter username">
            <input type="text" name="username" placeholder="Username" />
            <span data-placeholder=""></span>
          </div>

          <div data-validate="Enter password">
            <input type="password" name="pass" placeholder="Password" />
            <span data-placeholder=""></span>
          </div>

          <div>
            <input type="checkbox" name="remember-me" />
            <label>Remember me</label>
          </div>

          <div>
            <button>Login</button>
          </div>

          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
