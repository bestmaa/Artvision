import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function $$(sel) {
  return document.querySelector(sel);
}

function Navbar() {
  const [icon, seticon] = useState({ menu: 1, icon: <h1>&#9776;</h1> });
  function ShowMenu() {
    $$(".menuicon").style.width = "100%";
    $$(".menuicon").style.height = "100vh";
    $$(".menuicon").style.borderTopRightRadius = "0%";
    $$(".menuicon").style.borderBottomLeftRadius = "0%";
    $$(".menuitem").style.display = "block";
    seticon({ menu: 2, icon: <h1>&#x274C;</h1> });
  }
  function HideMenu() {
    seticon({ menu: 1, icon: <h1>&#9776;</h1> });
    $$(".menuitem").style.display = "none";
    $$(".menuicon").style.width = "5vmax";
    $$(".menuicon").style.height = "5vmax";
    $$(".menuicon").style.borderTopRightRadius = "50%";
    $$(".menuicon").style.borderBottomLeftRadius = "50%";
  }
  useEffect(() => {
    $$(".menuicon h1").onclick = function () {
      if (icon.menu == 1) {
        ShowMenu()
      } else {
        HideMenu()
      }
    };
  }, [icon]);
  return (
    <>
      <nav className="menuicon">
        {icon.icon}
        <div className="menuitem">
          <h2>ArtVision </h2>
          <div className="menuname">
            <Link to="/" onClick={HideMenu}>Home</Link>
            <Link to="/products" onClick={HideMenu}>Products</Link>
            <Link to="/products" onClick={HideMenu}>Contact</Link>
            <Link to="/products" onClick={HideMenu}>About</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
