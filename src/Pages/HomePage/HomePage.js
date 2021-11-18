import React, { useEffect } from "react";
import Nav from "../../Components/NavBar/Nav";
import Filter from "../../Components/Filter/index";
import Sort from "../../Components/Sort/Sort";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/products/productSlice";
import Products from "../../Components/Products/Products";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(`https://demo7303877.mockable.io/`));
  }, []);

  return (
    <>
      <Nav />
      <Filter />
      <Sort />
      <Products />
    </>
  );
}

export default HomePage;
