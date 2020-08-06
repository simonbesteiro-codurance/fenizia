import React, { useState, useEffect } from "react";
import "./Login.css";
import { login, logout, loginWithGoogle } from "../actions/authActions";
import authStore from "../stores/authStore";
import Profile from "./Profile";
import TextInput from "./TextInput";

function Login() {
  const [isLogged, setIsLogged] = useState(authStore.isLogged());
  const [user, setUser] = useState(authStore.getUserProfile());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    authStore.addChangeListener(onAuthChange);

    return () => authStore.removeChangeListener(onAuthChange);
  }, [isLogged, user]);
  function onFieldChange(value, setValue) {
    setValue(value);
  }
  function onAuthChange() {
    setIsLogged(authStore.isLogged());
    setUser(authStore.getUserProfile());
  }

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
                  <TextInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={email}
                    onChange={(event) =>
                      onFieldChange(event.target.value, setEmail)
                    }
                  />
                  <span data-placeholder=""></span>
                </div>

                <div data-validate="Enter password">
                  <TextInput
                    type="password"
                    name="pass"
                    placeholder="Password"
                    value={password}
                    onChange={(event) =>
                      onFieldChange(event.target.value, setPassword)
                    }
                  />
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
