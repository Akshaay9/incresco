import React from "react";
import "./style.css";

function Paginate({ length = 0, setPaginateNumbers, paginateNumbers }) {
  if (length <= 1) return null;

  const paginateHandler = (num) => {
    setPaginateNumbers((e) => ({
      start: num * 12 - 12,
      end: num * 12,
    }));
    window.scrollTo(0, 0);
  };

  return (
    <div className="paginate">
      {Array.from(Array(Math.ceil(length)).keys()).map((ele, i) => (
        <button
          className={
            paginateNumbers.end === (ele + 1) * 12 ? "btn-selected" : ""
          }
          onClick={() => paginateHandler(ele + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Paginate;
