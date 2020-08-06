import React, { useState, useEffect } from "react";
import "./Login.css";
import { login, logout, loginWithGoogle } from "../actions/authActions";
import authStore from "../stores/authStore";
import Profile from "./Profile";

function Login() {
  const email = "gilbe.cao@gmail.com";
  const password = "1234567";

  const [isLogged, setIsLogged] = useState(authStore.isLogged());
  const [user, setUser] = useState(authStore.getUserProfile());

  useEffect(() => {
    authStore.addChangeListener(onAuthChange);
    return () => authStore.removeChangeListener(onAuthChange);
  }, [isLogged, user]);

  function onAuthChange() {
    setIsLogged(authStore.isLogged());
    setUser(authStore.getUserProfile());
  }
  console.log(user);
  return (
    <>
      {!isLogged && (
        <>
          <div className="login-main-container">
            <div className="login-main-container__wrap">
              <div className="login-wrap__form">
                <span>
                  <img
                    src="https://image.flaticon.com/icons/svg/1000/1000946.svg"
                    className="login-wrap__form__logo"
                    alt="login"
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

                <div className="login-wrap__form__btn">
                  <button onClick={() => login(email, password)}>Login</button>
                  <img
                    src="https://www.drupal.org/files/issues/2020-01-26/google_logo.png"
                    onClick={() => loginWithGoogle(email, password)}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {!isLogged && (
        //<button onClick={() => login(email, password)}>Login</button>
      )}  */}
      {isLogged && (
        <>
          <button className="logout-btn" onClick={() => logout()}>
            Logout
          </button>
          <Profile />
        </>
      )}
    </>
  );
}

export default Login;
