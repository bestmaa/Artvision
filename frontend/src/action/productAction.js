import axios from "axios";
import { HOSTURL } from "../constants/GlobalVar";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const getProduct = (keyword="",currentPage=1,price=[0,50000],category,ratings=0) => async (dispatch) => {
  
  try {
    dispatch({ type: ALL_PRODUCT_REQUST });
    
    let link=`${HOSTURL}/api/v1/getallproduct?name=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
    if(category){
      link=`${HOSTURL}/api/v1/getallproduct?name=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;

    }
    const {data}   = await axios.get(link);
    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
    

  } catch (error) {
    console.log("error",error)
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
// get  producte detail action
export const getProductDetails = (id) => async (dispatch) => {
  
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUST });
    const {data}   = await axios.get(`${HOSTURL}/api/v1/product/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    

  } catch (error) {
    console.log("error",error)
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// error clear
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

