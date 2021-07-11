import React from "react";

export const Login = () => {
  return (
    <div class="login__main">
      <h1>Login</h1>
      <form method="post">
        <input
          className="login__input"
          type="text"
          name="u"
          placeholder="Username"
          required="required"
        />
        <input
          className="login__input"
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />
        <div className="row">
          <div class="col-md-6">
            <button type="submit" class="login btn btn-primary btn-block btn-large">
            <i class="bi bi-box-arrow-in-right"></i> Login
            </button>
          </div>
          <div class="col-md-6">
            <button type="submit" class="register btn btn-primary btn-block btn-large">
            <i class="bi bi-person-plus"></i> Register
            </button>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary btn-block btn-large">
              Login with Google <i class="bi bi-google"></i>
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
};
