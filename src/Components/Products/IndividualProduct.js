import React from "react";
import "./products.css";

function IndividualProduct({ ele }) {
  return (
    <div className="product">
      <img src={ele?.searchImage} alt="" />
      <h5>{ele?.productName}</h5>
      <div className="product-line">
        <p className="product-brand">{ele.brand}</p>
        <p>
          {Math.floor(ele.rating)}
          <i class="fas fa-star"></i>
        </p>
      </div>

      <div className="price">
        <h4>Rs.{ele.price}</h4>
        <p>Rs.{ele.mrp}</p>
        <p>{ele.discountDisplayLabel}</p>
      </div>
    </div>
  );
}

export default IndividualProduct;
