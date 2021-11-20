import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter, filterByGender } from "../../features/products/productSlice";

import { getAllFilterCategory } from "../../utils/productUtils";

function GenderFilter() {
  const {
    products,
    filterData: { category, brand, gender },
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getAllGenderCategories = useMemo(() => {
    if (products.length === 0) return [];
    let data = getAllFilterCategory(products, "gender");
    return data;
  }, [products]);

  const getAllBrandCategories = useMemo(() => {
    if (products.length === 0) return [];
    let data = getAllFilterCategory(products, "brand");
    return data;
  }, [products]);

  const getAllCategories = useMemo(() => {
    if (products.length === 0) return [];
    let data = getAllFilterCategory(products, "category");
    return data;
  }, [products]);

  return (
    <>
      <div className="individual-filter">
        <h4 className="heading">Gender</h4>

        {getAllGenderCategories.map((ele) => (
          <div className="checkboxes">
            <label>
              <input
                type="radio"
                name="group1"
                value={ele}
                checked={gender === ele}
                onClick={(e) =>
                  dispatch(
                    filterByGender({
                      filterCategory: "gender",
                      filterValue: e.target.value,
                    })
                  )
                }
              />
              <span>{ele}</span>
            </label>
            <br />
          </div>
        ))}
      </div>
      <div className="individual-filter">
        <h4 className="heading">Category</h4>
        {getAllCategories.map((ele, i) => (
          <div className="checkboxes">
            <input
              type="checkbox"
              id={`category${i}`}
              checked={category.includes(ele)}
              onClick={(e) =>
                dispatch(
                  filter({
                    filterCategory: "category",
                    filterValue: ele,
                  })
                )
              }
            />
            <label htmlFor="" for={`category${i}`}>
              {ele}
            </label>
          </div>
        ))}
      </div>
      <div className="individual-filter">
        <h4 className="heading">Brand</h4>
        {getAllBrandCategories.map((ele, i) => (
          <div className="checkboxes">
            <input
              type="checkbox"
              id={`brand${i}`}
              checked={brand.includes(ele)}
              onClick={(e) =>
                dispatch(
                  filter({
                    filterCategory: "brand",
                    filterValue: ele,
                  })
                )
              }
            />
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
