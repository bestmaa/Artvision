import React from "react";
import { Link } from "react-router-dom";
import "./loginAndSearchCss.css";

function LoginAndSearchBtn() {
  return (
    <div className="mainLoginAndSearch">
      <div className="loginAndSerach">
        <div>
          <Link to="/login">
            <img className="iconImg" src="https://img.icons8.com/ios-filled/25/000000/login-rounded-right.png" />
          </Link>
        </div>
        <div>
        <Link to="/search">
          <img className="iconImg" src="https://img.icons8.com/ios-filled/25/000000/search--v1.png" />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginAndSearchBtn;
