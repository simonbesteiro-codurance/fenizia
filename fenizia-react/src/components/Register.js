import React, { useState } from "react";
import { signIn } from "../actions/authActions";
import TextInput from "./TextInput";
import "./Register.css";
import authStore from "../stores/authStore";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState(authStore.getSignError());
  const [path, setPath] = useState("/login");
  function onFieldChange(value, setValue) {
    setValue(value);
  }
  function signInchecker(email, password) {
    signIn(email, password);
    console.log(signInError);
    // fetch(signIn(email, password))
    //   .then((response) => {
    //     console.log("sign in worked");
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error));
  }
  return (
    <>
      <main className="register-container">
        <div className="register-container__wrap">
          <span>Register</span>
          <div>
            <TextInput
              type="text"
              name="username"
              placeholder="mail"
              value={email}
              onChange={(event) => onFieldChange(event.target.value, setEmail)}
            />
          </div>
          <div>
            <TextInput
              type="password  "
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) =>
                onFieldChange(event.target.value, setPassword)
              }
            />
          </div>
          <div>
            <button
              className="register-container__wrap__btn"
              onClick={() => signInchecker(email, password)}
            >
              Sign in
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
export default Register;
