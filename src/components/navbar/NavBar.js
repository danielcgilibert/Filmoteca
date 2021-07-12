import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const NavBar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <h4 class="navbar-brand">
           Welcome {name}
        </h4>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="bi bi-justify"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
            <li class="nav-item mx-5">
              <NavLink
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Home
              </NavLink>
            </li>

            <li class="nav-item mx-2">
              <NavLink
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Top films
              </NavLink>
            </li>

            
          </ul>

          <div class="d-flex">
            
            <button onClick={handleLogout} class=" login__input" type="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
