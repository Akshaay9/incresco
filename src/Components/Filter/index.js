import React, { useState } from "react";
import "./filter.css";
import Filters from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  selectAllFilter,
} from "../../features/products/productSlice";
import { getAllFilterCategory } from "../../utils/productUtils";

function Index() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const selectAllFilterHandler = () => {
    let data = {
      gender: "Men",
      category: getAllFilterCategory(products, "category"),
      brand: getAllFilterCategory(products, "brand"),
    };
    dispatch(selectAllFilter(data));
  };

  const [showFilter, setShowFilter] = useState(false);

  const hideFilter = () => {
    setShowFilter((ele) => false);
  };
  const showFilterHandler = () => {
    setShowFilter((ele) => true);
  };

  return (
    <>
      <button className="filter-btn" onClick={() => showFilterHandler()}>
        show filter
      </button>
      <div className={`filter ${showFilter ? "showFilter" : ""}`}>
        <h4 className="heading">FILTERS</h4>
        <i class="fas fa-backward" onClick={() => hideFilter()}></i>

        <button onClick={() => dispatch(clearFilter())}>clear All</button>
        <button onClick={() => selectAllFilterHandler()}>Select All</button>
        <Filters />
      </div>
    </>
  );
}

export default Index;
