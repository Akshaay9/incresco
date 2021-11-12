import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSort, sort } from "../../features/products/productSlice";
import { getAllFilterCategory } from "../../utils/productUtils";
import "./sort.css";

function Sort() {
  const {
    products,
    sortData: { price, rating, year },
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="sort">
      <div>
        <select
          name=""
          id=""
          onChange={(e) =>
            dispatch(sort({ sortCategory: "price", sortValue: e.target.value }))
          }
        >
          <option value="" disabled selected={price === ""} hidden>
            sort by price
          </option>
          <option
            value="price_low_to_high"
            selected={price === "price_low_to_high"}
          >
            price low to high
          </option>
          <option
            value="price_high_to_low"
            selected={price === "price_high_to_low"}
          >
            price high to low
          </option>
        </select>
      </div>
      {/*  sort by rating */}
      <div>
        <select
          name=""
          id=""
          onChange={(e) =>
            dispatch(
              sort({ sortCategory: "rating", sortValue: e.target.value })
            )
          }
        >
          <option value="" disabled selected={rating === ""} hidden>
            sort by rating
          </option>
          {Array.from(Array(5).keys()).map((ele) => (
            <option value={ele} selected={rating === ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
      {/*  sort by year */}
      <div>
        <select
          name=""
          id=""
          onChange={(e) =>
            dispatch(sort({ sortCategory: "year", sortValue: e.target.value }))
          }
        >
          <option value="" disabled selected={year === ""} hidden>
            sort by year
          </option>
          {getAllFilterCategory(products, "year").map((ele) => (
            <option value={ele} selected={year === ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => dispatch(clearSort())}>clear sort </button>
    </div>
  );
}

export default Sort;
