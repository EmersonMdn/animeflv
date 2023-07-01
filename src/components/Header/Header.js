import React from "react";

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <div className="header__title">
          <p>animeflv</p>
        </div>

        <div className="header__menu">
          <span className="header__menu-menu">MENU</span>
          <span className="header__menu-wrapper">
            <i className="bx bx-menu"></i>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
