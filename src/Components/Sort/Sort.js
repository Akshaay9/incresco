import React from "react";
import { useSelector } from "react-redux";
import { getAllFilterCategory } from "../../utils/productUtils";
import "./sort.css";

function Sort() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="sort">
      {/*  sort by price */}
      <div>
        <select name="" id="">
          <option value="" disabled selected hidden>
            sort by price
          </option>
          <option value="price_low_to_high">price low to high</option>
          <option value="price_high_to_low">price high to low</option>
        </select>
      </div>
      {/*  sort by rating */}
      <div>
        <select name="" id="">
          <option value="" disabled selected hidden>
            sort by rating
          </option>
          {Array.from(Array(5).keys()).map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
      {/*  sort by year */}
      <div>
        <select name="" id="">
          <option value="" disabled selected hidden>
            sort by year
          </option>
          {getAllFilterCategory(products, "year").map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
      <button>clear sort </button>
    </div>
  );
}

export default Sort;
