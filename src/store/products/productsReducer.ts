import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productsType';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

interface reduxAction {
  type: string;
  payload: any;
}
const productsReducer = (state = initialState, action: reduxAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {...state, loading: true};
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, error: action.payload, products: []};
    case FETCH_PRODUCTS_FAILURE:
      return {...state, loading: false, error: '', products: action.payload};
    default:
      return state;
  }
};
export default productsReducer;
