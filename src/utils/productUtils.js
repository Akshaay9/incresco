// get category data based on input

export const getAllFilterCategory = (data, category) => {
 console.log("fun called ",category,data);
  if (data === undefined || data === []) return [];
  let filterdCategoryData = data.map((ele) => ele[category]);

  return filterdCategoryData.filter(
    (ele, index) => filterdCategoryData.indexOf(ele) === index
  );
};
