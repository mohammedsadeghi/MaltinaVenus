/* eslint-disable prettier/prettier */
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from './productsType';
import { getProducts } from '../../services/CrudService';
import { Dispatch } from 'redux';

function fetchProductsRequest() {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    };
}
function fetchProductsSuccess(products: Array<object>) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
}
function fetchProductsFail(error: object) {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
}

export const fetchProducts = (query: string) => {
    return (dispatch: Dispatch) => {
        dispatch(fetchProductsRequest());
        getProducts(query).then(res => {
            if (res.status === 202) {
                fetchProducts(query);
            } else {
                const products = res.data;
                dispatch(fetchProductsSuccess(products));
            }
        }).catch(error => {
            dispatch(fetchProductsFail(error.message));
        });
    };
};
