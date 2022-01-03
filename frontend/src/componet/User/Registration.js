import React, { useEffect, useRef, useState } from "react";
import login from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, userRegister } from "../../action/userAction.js";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader.js";
import { Link, useNavigate} from "react-router-dom";

function Registration() {
  const { error, loading,isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerTab = useRef(null);
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(userRegister(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if(isAuthenticated){
      navigate('/account')
    }
  }, [error, dispatch,isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form
          className={login.signUpForm}
          ref={registerTab}
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div className={login.row}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={registerDataChange}
            />
          </div>
          <div className={login.row}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div className={login.row}>
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
            />
          </div>

          <div className={login.imageAndUpload}>
            <img src={avatarPreview} alt="Avatar Preview" />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={registerDataChange}
            />
          </div>
          <div className={login.row}>
            <input type="submit" value="Register" className={login.signUpBtn} />
          </div>
          
                  <Link to="/login" className={login.forget} style={{textAlign:"center",display:"block"}}> 
                    Login
                  </Link>
        </form>
      )}
    </>
  );
}

export default Registration;
