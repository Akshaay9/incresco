import React from "react";
import { useSelector } from "react-redux";
import IndividualProduct from "./IndividualProduct";
import "./products.css";

function Products() {
  const { products, sortData, filterData } = useSelector(
    (state) => state.products
  );

  return (
    <div>
      <div className="product-grid">
        {products.map((ele) => (
          <IndividualProduct ele={ele} />
        ))}
      </div>
    </div>
  );
}

export default Products;
