
export const sortProducts = (products, sortData) => {
  if (products === []) return [];
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

  if (year !== "") {
    sortedData = sortedData.filter((ele) => Number(ele.year) === Number(year));
  }

  return sortedData;
};
