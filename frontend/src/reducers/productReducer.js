import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";
//product reducer
export const productReducer = (state = { products: [] }, action) => {
  if (action.type === ALL_PRODUCT_REQUST) {
    return {
      loading: true,
      ...state,
    };
  } else if (action.type === ALL_PRODUCT_SUCCESS) {
    return {
      loading: false,
      products: action.payload.Products,
      productCount: action.payload.productCount,
      perPage: action.payload.perPage,
    };
  } else if (action.type === CLEAR_ERRORS) {
    return {
      ...state,
      error: null,
    };
  } else if (action.type === ALL_PRODUCT_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  } else {
    return state;
  }
};

// producte details Reducer
export const productDetailsReducer = (state = { product: {} }, action) => {
  if (action.type === PRODUCT_DETAILS_REQUST) {
    return {
      loading: true,
      product: [],
    };
  } else if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return {
      loading: false,
      product: action.payload.product,
    };
  } else if (action.type === CLEAR_ERRORS) {
    return {
      ...state,
      error: null,
    };
  } else if (action.type === PRODUCT_DETAILS_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  } else {
    return state;
  }
};
