import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/userConstants'

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true, ...state}

        case USER_LOGIN_SUCCESS:
            return { loading: false, product: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        
        case USER_LOGOUT:
            return { loading: false, error: action.payload }
    
        default:
            return state
    }
}