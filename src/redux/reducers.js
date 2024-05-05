import { combineReducers } from 'redux';
import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes'


const initialSate = {
    isLoggedIn: false,
    userData: null,
}

const authReducer = (state = initialSate , action) =>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                userData: action.payload,
            };
        case LOGIN_FAILURE:
            return{
                isLoggedIn:false,
            }
        case LOGOUT:
            return initialSate;
        default:
            return state;
    }
}

export default combineReducers( { auth: authReducer} )