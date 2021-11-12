import React from "react";
import { useSelector } from "react-redux";
import { filterProducts, searchFilter, sortProducts } from "./filterproducts";
import IndividualProduct from "./IndividualProduct";
import "./products.css";

function Products() {
  const { products, sortData, filterData, searchInput } = useSelector(
    (state) => state.products
  );

  let sortedProducts = sortProducts(products, sortData);
  let filteredProducts = filterProducts(sortedProducts, filterData);
  let searchedData = searchFilter(filteredProducts, searchInput);

  return (
    <div>
      <div className="product-grid">
        {searchedData.length > 0 &&
          searchedData.map((ele) => <IndividualProduct ele={ele} />)}
      </div>
    </div>
  );
}

export default Products;
