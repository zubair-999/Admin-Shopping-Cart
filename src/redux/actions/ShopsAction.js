import {
  SHOP_PRODUCT_FAIL,
  SHOP_PRODUCT_REQUEST,
  SHOP_PRODUCT_SUCCESS,
  SHOPS_GET_FAIL,
  SHOPS_GET_REQUEST,
  SHOPS_GET_SUCCESS
} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const ShopsAction = () => async (dispatch) => {
  try {
    dispatch({ type: SHOPS_GET_REQUEST })
    const { data } = await Axios.get('/admin/getShops', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: SHOPS_GET_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SHOPS_GET_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const ShopProductAction = (id) => async (dispatch) => {
  debugger;
  try {
    dispatch({ type: SHOP_PRODUCT_REQUEST })
    const { data } = await Axios.get(`/admin/shop/product/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: SHOP_PRODUCT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SHOP_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
