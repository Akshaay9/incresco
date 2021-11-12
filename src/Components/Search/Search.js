import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByText } from "../../features/products/productSlice";


function Search() {
  const [input, setInput] = useState("");
  let timerID = useRef(null);
  const dispatch = useDispatch();

  const debounce = (value) => {
    clearTimeout(timerID.current);
    setInput((ele) => value);
    timerID.current = setTimeout(() => {
      dispatch(searchByText(value));
    }, 700);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search for products"
        value={input}
        onChange={(e) => debounce(e.target.value)}
      />
    </>
  );
}

export default Search;
