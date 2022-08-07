import React from 'react';
import '../scss/app.scss';
import '../scss/components/_header.scss';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <a href="/">
          <div className="header__logo">
            <img
              width="60"
              src="https://cdn-icons-png.flaticon.com/512/599/599995.png"
              alt="Pizza logo"></img>
            <div>
              <h1>Pet Project</h1>
              <p>Example</p>
            </div>
          </div>
        </a>

        <div className="header__cart">
          <a className="button button--cart" href="/cart">
            <span>0 ₽</span>
            <div className="button__delimiter"></div>

            <span>0</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
