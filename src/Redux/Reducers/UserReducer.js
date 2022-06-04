import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAILURE,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_AVATAR_REQUEST,
    USER_UPDATE_AVATAR_SUCCESS,
    USER_UPDATE_AVATAR_FAILURE,
    USER_UPDATE_PASSWORD_REQUEST,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PASSWORD_FAILURE,
    USER_UPDATE_PASSWORD_RESET,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAILURE,
    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAILURE,
    GET_ADMIN_USER_REQUEST,
    GET_ADMIN_USER_SUCCESS,
    GET_ADMIN_USER_FAILURE,
    GET_ADMIN_USER_RESET
} from '../Constants/UserConstants'

//user
export const userReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
        case USER_LOAD_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
        case USER_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false
            }
        case USER_LOGIN_FAILURE:
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case USER_LOAD_FAILURE:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case USER_LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//User Detail
export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Update User
export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
        case USER_UPDATE_AVATAR_REQUEST:
        case USER_UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_UPDATE_PROFILE_SUCCESS:
        case USER_UPDATE_AVATAR_SUCCESS:
        case USER_UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case USER_UPDATE_PROFILE_FAILURE:
        case USER_UPDATE_AVATAR_FAILURE:
        case USER_UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case USER_UPDATE_PROFILE_RESET:
        case USER_UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated: false
            }
        default:
            return state
    }
}

export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FORGOT_PASSWORD_REQUEST:
        case USER_RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case USER_FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            }

        case USER_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload
            }

        case USER_FORGOT_PASSWORD_FAILURE:
        case USER_RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Get all users Admin
export const getAllUsersAdminReducer = (
    state = { listUsers: [], isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listUsers: action.payload
            }
        case GET_ADMIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_USER_RESET:
            return {
                ...state,
                isLoading: false,
                listUsers: []
            }
        default:
            return state
    }
}
