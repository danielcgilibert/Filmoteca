import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () =>{
    dispatch(startGoogleLogin());
  }
  return (
    <div className="login__main animate__animated animate__fadeIn">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          name="u"
          placeholder="Email"
          required="required"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__input"
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              className="login btn btn-primary btn-block btn-large"
            >
              <i className="bi bi-box-arrow-in-right"></i> Login
            </button>
          </div>
          <div className="col-md-6">
          <Link to="/auth/register"> 

          <button
              type="button"
              className="register btn btn-primary btn-block btn-large"

            >
                        <i className="bi bi-person-plus"></i> Register 

            </button>

          
          
          
          
          </Link>

          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12">
            <button 
            type="button" 
            className="btn btn-primary btn-block btn-large"
            onClick={handleGoogleLogin}
            >
              Login with Google <i className="bi bi-google"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
