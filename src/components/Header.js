import React, { Component } from "react";
import Register from './Register';

function Header() {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span>W</span>elcome
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href='<Register/>'</li>>REGISTER</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
