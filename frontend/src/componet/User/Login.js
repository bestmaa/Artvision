import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginStyle from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../action/userAction.js";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  function loginSubmit(e) {
    e.preventDefault();
    dispatch(login(LoginEmail, LoginPassword));
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, error, alert, isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div id={loginStyle.loginform}>
            <h2 id={loginStyle.headerTitle}>Login</h2>
            <div>
              <form onSubmit={loginSubmit}>
                <div className={loginStyle.row}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={LoginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className={loginStyle.row}>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={LoginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div id="button" className={loginStyle.row}>
                  <Link to="/password/forgot" className={loginStyle.forget}>
                    Forget Password ?
                  </Link>
                  <hr />
                  <input
                    type="submit"
                    value="Login"
                    className={loginStyle.loginBtn}
                    style={{ cursor: "pointer !important" }}
                  />
                  <hr />
                  <Link to="/registration" className={loginStyle.forget}>
                    Registration
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
