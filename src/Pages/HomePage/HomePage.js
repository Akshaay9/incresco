import React from "react";
import Nav from "../../Components/NavBar/Nav";
import Filter from "../../Components/Filter/index";
import Sort from "../../Components/Sort/Sort";

function HomePage() {
  return (
    <div className="">
      <Nav />
      <Filter />
      <Sort />
    </div>
  );
}

export default HomePage;
