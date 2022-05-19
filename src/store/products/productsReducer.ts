import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productsType';

const initialState = {
  loading: false,
  products: [],
  pages: [],
  error: '',
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {...state, loading: true};
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        products: action.payload.products,
        pages: action.payload.pages,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
        pages: [],
      };
    default:
      return state;
  }
};
export default productsReducer;
