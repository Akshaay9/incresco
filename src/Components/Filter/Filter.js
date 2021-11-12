import React from "react";
import { useSelector } from "react-redux";
import { getAllFilterCategory } from "../../utils/productUtils";

function GenderFilter() {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <div className="individual-filter">
        <h4 className="heading">Gender</h4>
        {getAllFilterCategory(products, "gender").map((ele) => (
          <div className="checkboxes">
            <label>
              <input type="radio" name="group1" value={ele} />
              <span>{ele}</span>
            </label>
            <br />
          </div>
        ))}
      </div>
      <div className="individual-filter">
        <h4 className="heading">Category</h4>
        {getAllFilterCategory(products, "category").map((ele, i) => (
          <div className="checkboxes">
            <input type="checkbox" id={`category${i}`} />
            <label htmlFor="" for={`category${i}`}>
              {ele}
            </label>
          </div>
        ))}
      </div>
      <div className="individual-filter">
        <h4 className="heading">Brand</h4>
        {getAllFilterCategory(products, "brand").map((ele, i) => (
          <div className="checkboxes">
            <input type="checkbox" id={`brand${i}`} />
            <label htmlFor="" for={`brand${i}`}>
              {ele}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default GenderFilter;
