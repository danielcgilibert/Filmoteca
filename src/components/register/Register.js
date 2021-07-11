import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerEmailPassword } from "../../actions/auth";

export const Register = () => {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerEmailPassword(emailRegister, passwordRegister));
  };

  return (
    <div className="login__main animate__animated animate__fadeIn">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          name="u"
          placeholder="Email"
          required="required"
          onChange={(e) => setEmailRegister(e.target.value)}
        />
        <input
          className="login__input"
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          onChange={(e) => setPasswordRegister(e.target.value)}
        />

        <button
          type="submit"
          className="register btn btn-primary btn-block btn-large"
        >
          Registrar
        </button>
      </form>

      <Link to="/auth/login">

        <button
          type="button"
          className="register mt-2 btn btn-primary btn-block btn-large"
        >
          wait i have an account...
        </button>
      </Link>
    </div>
  );
};
