import React, { useState } from "react";
import { signIn } from "../actions/authActions";
import TextInput from "./TextInput";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [path, setPath] = useState("/login");
  function onFieldChange(value, setValue) {
    setValue(value);
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
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) =>
                onFieldChange(event.target.value, setPassword)
              }
            />
          </div>
          <div>
            <a href={path}>
              <button
                className="register-container__wrap__btn"
                onClick={() => signIn(email, password)}
              >
                Sign in
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
export default Register;
