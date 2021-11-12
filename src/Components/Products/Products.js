import React from "react";
import { useSelector } from "react-redux";
import { sortProducts } from "./filterproducts";
import IndividualProduct from "./IndividualProduct";
import "./products.css";

function Products() {
  const { products, sortData, filterData } = useSelector(
    (state) => state.products
  );

  let sortedProducts = sortProducts(products, sortData);

  return (
    <div>
      <div className="product-grid">
        {sortedProducts.map((ele) => (
          <IndividualProduct ele={ele} />
        ))}
      </div>
    </div>
  );
}

export default Products;
