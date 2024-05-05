import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes"


export const loginSuccess = (userData) =>({
    type: LOGIN_SUCCESS,
    payload: userData,
    setStatus: true,
});

export const loginFailure = () =>({
    type: LOGIN_FAILURE,
    setStatus:false,
})

export const logout =() =>({
    type : LOGOUT,
})