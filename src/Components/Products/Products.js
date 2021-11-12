import React from "react";
import { useSelector } from "react-redux";
import { filterProducts, sortProducts } from "./filterproducts";
import IndividualProduct from "./IndividualProduct";
import "./products.css";

function Products() {
  const { products, sortData, filterData } = useSelector(
    (state) => state.products
  );

  let sortedProducts = sortProducts(products, sortData);

  let filteredProducts = filterProducts(sortedProducts, filterData);

  return (
    <div>
      <div className="product-grid">
        {filteredProducts.length > 0 &&
          filteredProducts.map((ele) => <IndividualProduct ele={ele} />)}
      </div>
    </div>
  );
}

export default Products;
