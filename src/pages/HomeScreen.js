import React from "react";
import { NavBar } from "../components/navbar/NavBar";

export const HomeScreen = () => {
  return (
    <>
              <NavBar />

    <div className="container">

      <div class="jumbotron">
        <h1 class="display-4 mt-5">HomeScreen</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
    </div>
    </>
  );
};
