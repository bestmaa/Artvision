import React, { useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import { getProduct,clearErrors } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, productCount, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error,alert]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="top-banner">
            <Link to={"demo"}>go to demo</Link>
            <p>Welcome to ArtVision</p>
            <h1>FIND AMAZING ART BELOW</h1>
            <a href="#main-container">
              <button>Scroll &#65086;</button>
            </a>
          </div>
          <h2 className="productHeading">Featured Art</h2>
          <div className="main-container" id="main-container">
            {products &&
              products.map((product, key) => (
                <ProductCard data={product} key={key} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
