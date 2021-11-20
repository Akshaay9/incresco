export const sortProducts = (products, sortData) => {
  console.log("ran roduct sort");
  if (products === undefined || products === []) return [];
  let { price, rating, year } = sortData;
  let sortedData = JSON.parse(JSON.stringify(products));

  //   sort by price
  if (price !== "") {
    if (price === "price_low_to_high") {
      sortedData = sortedData.sort((a, b) => Number(a.price) - Number(b.price));
    } else {
      sortedData = sortedData.sort((b, a) => Number(a.price) - Number(b.price));
    }
  }

  //sort rating
  if (rating !== "") {
    sortedData = sortedData.filter((ele) =>
      Number(Math.floor(ele.rating) === Number(Math.floor(rating)))
    );
  }
  //sort by year
  if (year !== "") {
    sortedData = sortedData.filter((ele) => Number(ele.year) === Number(year));
  }

  return sortedData;
};

// filter products
export const filterProducts = (products, filterData) => {
  console.log("ran filter products");
  if (products === undefined || products === []) return [];
  let filteredData = JSON.parse(JSON.stringify(products));
  let { gender, category, brand } = filterData;

  /// gender filter
  if (gender !== "") {
    filteredData = filteredData.filter(
      (ele) =>
        ele.gender.toString().toLowerCase() === gender.toString().toLowerCase()
    );
  }

  // category filter
  if (category.length > 0) {
    filteredData = filteredData.filter((ele) =>
      category.some((e) => e === ele.category)
    );
  }

  // brand filter
  if (brand.length > 0) {
    filteredData = filteredData.filter((ele) =>
      brand.some((e) => e === ele.brand)
    );
  }

  return filteredData;
};

/// filter by search
export const searchFilter = (products, searchData) => {
  console.log("ran search products");
  if (products === undefined || products === []) return [];
  let searchedproducts = JSON.parse(JSON.stringify(products));

  if (searchData !== "") {
    searchedproducts = searchedproducts.filter((ele) => {
      return (
        ele.product
          .toString()
          .toLowerCase()
          .includes(searchData.toString().toLowerCase()) ||
        ele.productName
          .toString()
          .toLowerCase()
          .includes(searchData.toString().toLowerCase())
      );
    });
  }

  return searchedproducts;
};
