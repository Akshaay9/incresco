import React from "react";
import { useSelector } from "react-redux";
import { filterProducts, searchFilter, sortProducts } from "./filterproducts";
import IndividualProduct from "./IndividualProduct";
import "./products.css";
import emptyCartSVG from "../../assets/svg/emptyCart.svg";
import loadingImG from "../../assets/svg/loading.svg";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorBoundry/ErrorBoundry";

function Products() {
  const { loading, products, sortData, filterData, searchInput } = useSelector(
    (state) => state.products
  );

  // sorting, filtering and searching products
  let sortedProducts = sortProducts(products, sortData);
  let filteredProducts = filterProducts(sortedProducts, filterData);
  let searchedData = searchFilter(filteredProducts, searchInput);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="product-grid">
        {loading && <img src={loadingImG} alt="" className="loading" />}
        {!loading && searchedData.length === 0 && (
          <img className="emptyCart" src={emptyCartSVG} alt="" />
        )}
        {searchedData.length > 0 &&
          searchedData.map((ele) => <IndividualProduct ele={ele} />)}
      </div>
    </ErrorBoundary>
  );
}

export default Products;
