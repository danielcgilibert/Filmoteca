import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { searchMovie } from "../../actions/movies";
import { ModalSearch } from "../modalSearch/ModalSearch";

export const NavBar = () => {
  const { name, photo } = useSelector((state) => state.auth);
  const [searchInput, setSearchInput] = React.useState("")
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {search} = useSelector(state => state.mv)
  const shortName = name && name.split(" ");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovie(searchInput))
    setIsOpen(true)
    setSearchInput("");
  }

  return (
    <>
      {modalIsOpen&&<ModalSearch search={search} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />}

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="navbar-brand px-4">
            <img
              src="https://fibabc.abc.es/wp-content/uploads/sites/23/2017/10/file-video-icon.png"
              width="40"
              height="40"
            />{" "}
          </div>

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
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-list-4"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div>
                <div class="container h-100">
                  <div class="d-flex justify-content-center h-100">
                    <form onSubmit={handleSearch}  class="searchbar" >
                      <input
                        class="search_input"
                        type="text"
                        name=""
                        placeholder="Search..."
                        required
                        minlength="1"
                        value={searchInput  }
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                      <a class="search_icon">
                        <i class="bi bi-search"></i>
                      </a>
                    </form>
                  </div>
                </div>
              </div>

              <div class="dropdown d-flex">
                <button
                  class="btn bg-custom  dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={
                      photo
                        ? photo
                        : "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                    }
                    width="40"
                    height="40"
                    class="rounded-circle m-2"
                  />

                  {name ? shortName[0] : name}
                </button>

                <ul
                  class="dropdown-menu animate__animated animate__fadeIn"
                  aria-labelledby="dropdownMenu2"
                >
                  <li>
                    <button class="dropdown-item" type="button">
                      <i class="bi bi-person-lines-fill"></i> Profile
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      <i class="bi bi-star-fill"></i> Favorites
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      class="dropdown-item"
                      type="button"
                    >
                      <i class="bi bi-door-open-fill"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
