import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import ProductCard from "../Home/ProductCard";
import { getProduct, clearErrors } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
let categories=["sketching","painting","watercolor"]
function ProductsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setprice] = useState([0, 50000]);
  const [category, setCategory] = useState("")
  const [ratings, setRatings] = useState(0)

  const keyword = params.keyword;
  const { loading, products, productCount, error, perPage } = useSelector(
    (state) => state.products
  );
  
  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price,category,ratings));
    
  }, [dispatch, keyword, currentPage, price,category,ratings]);
  useEffect(()=>{
  },[products])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} data={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={50000}
            />
            <div className="min-max">
              <div className="min">
                <p>Min</p>
                <input
                  type="number"
                  onChange={(e) => {
                    setprice([e.target.value, price[1]]);
                  }}
                  value={price[0]}
                />
              </div>
              <div className="max">
                <p>Max</p>
                <input
                  type="number"
                  onChange={(e) => {
                    setprice([price[0], e.target.value]);
                  }}
                  value={price[1]}
                />
              </div>
            </div>

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  
                  {category}
                </li>
              ))}
              {console.log(category)}
            </ul>
            
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {perPage < productCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={perPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProductsPage;
