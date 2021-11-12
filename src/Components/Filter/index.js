import React from "react";
import "./filter.css";
import GenderFilter from "./Filter";

function index() {
  return (
    <>
      <div className="filter">
        <h4 className="heading">FILTERS</h4>
        <div className="checkboxes">
          <input type="checkbox" id="clearAll" />
          <label htmlFor="" for="clearAll">
            clear all
          </label>
        </div>
        <div className="checkboxes">
          <input type="checkbox" id="selectAll" />
          <label htmlFor="" for="selectAll">
            select all
          </label>
        </div>
        <GenderFilter />
      </div>
    </>
  );
}

export default index;
