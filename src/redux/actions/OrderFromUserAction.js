import {
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_REQUEST, ORDER_DELIVER_SUCCESS,
  ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_FROM_USER_FAIL,
  ORDER_FROM_USER_REQUEST,
  ORDER_FROM_USER_SUCCESS
} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const OrderFromUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_FROM_USER_REQUEST })
    const { data } = await Axios.get('/admin/order', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: ORDER_FROM_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ORDER_FROM_USER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getOrderDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST })
    const { data } = await Axios.get(`/admin/order/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deliverOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type:  ORDER_DELIVER_REQUEST})
    const { data } = await Axios.get(``, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: ORDER_DELIVER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


