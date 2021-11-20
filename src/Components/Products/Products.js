import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { filterProducts, searchFilter, sortProducts } from "./filterproducts";
import IndividualProduct from "./IndividualProduct";
import "./products.css";
import emptyCartSVG from "../../assets/svg/emptyCart.svg";
import loadingImG from "../../assets/svg/loading.svg";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorBoundry/ErrorBoundry";
import Paginate from "../Paginate/Paginate";
import { useEffect } from "react";

function Products() {
  const { loading, products, sortData, filterData, searchInput } = useSelector(
    (state) => state.products
  );

  const [paginateNumbers, setPaginateNumbers] = useState({
    start: 0,
    end: 12,
  });

  // sorting, filtering and searching products
  let sortedProducts = useMemo(() => {
    return sortProducts(products, sortData);
  }, [products, sortData]);

  let filteredProducts = useMemo(() => {
    return filterProducts(sortedProducts, filterData);
  }, [filterData, sortedProducts]);

  let searchedData = useMemo(() => {
    return searchFilter(filteredProducts, searchInput);
  }, [searchInput, filteredProducts]);

  useEffect(() => {
    setPaginateNumbers((e) => ({
      start: 0,
      end: 12,
    }));
  }, [products, sortData, filterData, searchInput]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <>
        <div className="product-grid">
          {loading && <img src={loadingImG} alt="" className="loading" />}
          {!loading && searchedData.length === 0 && (
            <img className="emptyCart" src={emptyCartSVG} alt="" />
          )}
          {searchedData.length > 0 &&
            searchedData
              .slice(paginateNumbers.start, paginateNumbers.end)
              .map((ele) => <IndividualProduct ele={ele} />)}
        </div>
        <Paginate
          length={searchedData.length / 12}
          setPaginateNumbers={setPaginateNumbers}
          paginateNumbers={paginateNumbers}
        />
      </>
    </ErrorBoundary>
  );
}

export default Products;
