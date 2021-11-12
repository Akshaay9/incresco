import React, { useState } from "react";
import Search from "../Search/Search";
import "./Nav.css";

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://static.cure.fit/assets/images/curefit-v-man.svg"
          alt=""
        />
      </div>
      <div className="mobile">
        <div
          className={`ham ${modalOpen ? "bend" : ""}`}
          onClick={() => setModalOpen((e) => !e)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`nav_left ${modalOpen ? "" : "close-nav"}`}>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home and Living</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="input">
        <Search />
      </div>
      <div className="nav_right">
        <ul>
          <li>
            <i class="fas fa-user"></i>
          </li>
          <li>
            <i class="fas fa-cart-arrow-down"></i>
          </li>
          <li>
            <i class="fas fa-heart"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
