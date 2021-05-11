import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAIL, LOGOUT_USER } from "../constants/Constants";

export const SigninReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { loading: true }
        case SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload, authentication: true }
        case SIGNIN_FAIL:
            return { loading: false, error: action.payload, authentication: false }
        case LOGOUT_USER:
            return {}
        default:
            return state;
    }
};
