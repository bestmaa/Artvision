import "./App.css";
import Header from "./componet/layout/Header/Header";
import Footer from "./componet/layout/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componet/Home/Home.js";
import ProductDetails from "./componet/Product/ProductDetails.js";
import ProductsPage from "./componet/Product/ProductsPage.js";
import Search from './componet/Product/Search.js'
import Login from './componet/User/Login.js'
import Registration from './componet/User/Registration.js'
import Profile from './componet/User/Profile.js'
import UpdateProfile from './componet/User/UpdateProfile.js'
import UpdatePassword from './componet/User/UpdatePassword.js'
import ForgotPassword from './componet/User/ForgotPassword.js'
import store from './store'
import { loadUser } from "./action/userAction";
import UserOptions from './componet/layout/Header/UserOptions.js'
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const {user, isAuthenticated}=useSelector(state=>state.user)
  useEffect(() => {
    store.dispatch(loadUser())
  }, []) 
  return (
    <>
      <BrowserRouter>
      {isAuthenticated && <UserOptions user={user} />} 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:keyword" element={<ProductsPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/account" element={isAuthenticated ? <Profile />:<Login />} />
          <Route path="/me/update" element={isAuthenticated ? <UpdateProfile />:<Login />} />
          <Route path="/password/update" element={isAuthenticated ? <UpdatePassword />:<Login />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
