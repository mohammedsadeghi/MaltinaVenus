import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productsType';
import {getProducts} from '../../services/CrudService';
import {Dispatch} from 'redux';

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
}
function fetchProductsSuccess(products: object[], pages: object[]) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      products: products,
      pages: pages,
    },
  };
}
function fetchProductsFail(error: string) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
}

export const fetchProducts = (query: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest());
    getProducts(query)
      .then(res => {
        if (res.status === 202) {
          setTimeout(() => {
            fetchProducts(res.data.query);
          }, res.data.after);
        } else {
          const products = res.data.products;
          const pages = res.data.pages;
          dispatch(fetchProductsSuccess(products, pages));
        }
      })
      .catch(error => {
        dispatch(fetchProductsFail(error.message));
      });
  };
};
