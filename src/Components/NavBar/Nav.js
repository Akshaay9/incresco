import React from "react";
import Search from "../Search/Search";
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://static.cure.fit/assets/images/curefit-v-man.svg"
          alt=""
        />
      </div>
      <div className="nav_left">
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
