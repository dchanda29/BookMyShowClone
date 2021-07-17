import React from "react";
import MovieNavbar from "../components/Navbar/movieNavbar.component";

// Components
// import Navbar from "../components/Navbar/navbar.component";
const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;