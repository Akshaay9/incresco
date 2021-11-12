import React from "react";
import "./filter.css";
import Filters from "./Filter";

function index() {
  return (
    <>
      <div className="filter">
        <h4 className="heading">FILTERS</h4>
        <button>clear All</button>
        <button>Select All</button>
        <Filters />
      </div>
    </>
  );
}

export default index;
