import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerEmailPassword, removeError } from "../../actions/auth";

export const Register = () => {
  const [emailRegister, setEmailRegister] = useState("");
  const [nameRegister, setNameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerEmailPassword(emailRegister, passwordRegister, nameRegister));
  };

  useEffect(() => {
    return () => {
      dispatch(removeError());
    }
  }, [dispatch])

  return (
    <>
      <div className="login__main animate__animated animate__fadeIn">
        
        { msgError && <div className="animate__animated animate__bounceIn alert alert-danger text-center" role="alert">
          <i className="bi bi-bell"></i> {msgError}
        </div>}

        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="login__input"
            type="text"
            name="u"
            placeholder="name"
            required="required"
            onChange={(e) => setNameRegister(e.target.value)}
          />
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
    </>
  );
};
