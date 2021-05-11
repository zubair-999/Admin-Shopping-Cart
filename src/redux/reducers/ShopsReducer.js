import {
  SHOP_PRODUCT_FAIL,
  SHOP_PRODUCT_REQUEST, SHOP_PRODUCT_SUCCESS,
  SHOPS_GET_FAIL,
  SHOPS_GET_REQUEST, SHOPS_GET_SUCCESS
} from "../constants/Constants";


export const ShopReducer = (state={shops:[]}, action) => {
  switch (action.type) {
    case SHOPS_GET_REQUEST:
      return { loading: true }
    case SHOPS_GET_SUCCESS:
      return { loading: false, shops: action.payload }
    case SHOPS_GET_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const ShopProductReducer = (state={products:[]}, action) => {
  switch (action.type) {
    case SHOP_PRODUCT_REQUEST:
      return { loading: true }
    case SHOP_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload }
    case SHOP_PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
