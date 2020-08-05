import React, { useState, useEffect } from "react";
import "./Login.css";
import { login, logout } from "../actions/authActions";
import authStore from "../stores/authStore";

function Login() {
  const email = "simonbesteiro@gmail.com";
  const password = "123456";

  const [isLogged, setIsLogged] = useState(authStore.isLogged());
  const [user, setUser] = useState(authStore.getUserProfile);

  useEffect(() => {
    authStore.addChangeListener(onAuthChange);
    return () => authStore.removeChangeListener(onAuthChange);
  }, [isLogged, user]);

  function onAuthChange() {
    setIsLogged(authStore.isLogged());
    setUser(authStore.getUserProfile());
  }
  return (
    <div className="login-main-container">
      <div className="login-main-container__wrap">
        <form className="login-wrap__form">
          <span>
            <img
              src="https://image.flaticon.com/icons/svg/1000/1000946.svg"
              className="login-wrap__form__logo"
              alt="login"
            />
          </span>
          {!isLogged && (
            <>
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

              <div className="login-wrap__form__btn">
                <button onClick={() => login(email, password)}>Login</button>
              </div>
            </>
          )}
          {isLogged && (
            <div className="login-wrap__form__btn">
              <p> Welcome {user && user.email}</p>
              <button onClick={() => logout()}>Logout</button>
            </div>
          )}

          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
