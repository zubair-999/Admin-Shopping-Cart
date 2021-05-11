import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAIL, LOGOUT_USER } from "../constants/Constants"
import Axios from '../../axios/Axios'
export const signin = ({ email, password }, callback) => async (dispatch) => {
    try {
        dispatch({ type: SIGNIN_REQUEST })
        const { data } = await Axios.post('/admin/login', { ...email, ...password })
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('token', data.token);
        callback()

    } catch (error) {
        dispatch({
            type: SIGNIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}
export const logout = (callback) => (dispatch) => {
    localStorage.removeItem('token')
    dispatch({ type: LOGOUT_USER })
    callback();
}
