import {
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_REQUEST, ORDER_DELIVER_RESET, ORDER_DELIVER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS,
  ORDER_FROM_USER_FAIL,
  ORDER_FROM_USER_REQUEST,
  ORDER_FROM_USER_SUCCESS
} from "../constants/Constants";

export const OrderFromUserReducer = (state={orderFromUser:[]}, action) => {
  switch (action.type) {
    case ORDER_FROM_USER_REQUEST:
      return { loading: true }
    case ORDER_FROM_USER_SUCCESS:
      return { loading: false, orderFromUser: action.payload }
    case ORDER_FROM_USER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const OrderDetailsReducer = (
  state = { loading: true, products: [], contact_info: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      }
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const OrderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      }
    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_DELIVER_RESET:
      return {}
    default:
      return state
  }
}

