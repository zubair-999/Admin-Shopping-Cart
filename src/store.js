import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {OrderFromUserReducer} from "./redux/reducers/OrderFromUserReducer";
import {SigninReducer} from "./redux/reducers/SigninReducer";
import {OrderDetailsReducer, OrderDeliverReducer} from './redux/reducers/OrderFromUserReducer'
import {ShopProductReducer, ShopReducer} from "./redux/reducers/ShopsReducer";


const userInfoFromStorage = localStorage.getItem('token')
const middleware = [thunk]
const initialState = {
   userSignin: { token: userInfoFromStorage },
  sidebarShow: 'responsive'
};
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const reducer = combineReducers({
  nav: changeState,
  userSignin: SigninReducer,
  OrderFromUser: OrderFromUserReducer,
  orderDetails: OrderDetailsReducer,
  orderDeliver: OrderDeliverReducer,
  Shops: ShopReducer,
  Products: ShopProductReducer,
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
