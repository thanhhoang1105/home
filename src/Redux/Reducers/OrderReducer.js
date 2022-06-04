import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_RESET,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS,
    ORDER_DETAIL_FAIL,
    GET_ADMIN_ORDERS_REQUEST,
    GET_ADMIN_ORDERS_SUCCESS,
    GET_ADMIN_ORDERS_FAILURE,
    GET_ADMIN_ORDERS_RESET,
    GET_ADMIN_ORDERS_DETAIL_REQUEST,
    GET_ADMIN_ORDERS_DETAIL_SUCCESS,
    GET_ADMIN_ORDERS_DETAIL_FAILURE,
    GET_ADMIN_ORDERS_DETAIL_RESET,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_RESET
} from '../Constants/OrderConstants'

//create order
export const createOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orderItem: action.payload
            }
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_ORDER_RESET:
            return {
                ...state,
                orderItem: false
            }
        default:
            return state
    }
}

//my orders
export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case MY_ORDERS_REQUEST:
            return {
                loading: true
            }
        case MY_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case MY_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//order detail
export const orderDetailsReducer = (
    state = { order: {}, success: false },
    action
) => {
    switch (action.type) {
        case ORDER_DETAIL_REQUEST:
            return {
                loading: true
            }

        case ORDER_DETAIL_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }

        case ORDER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Get all orders Admin
export const getAllOrdersAdminReducer = (
    state = { listOrders: [] },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listOrders: action.payload
            }
        case GET_ADMIN_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_ORDERS_RESET:
            return {
                ...state,
                isLoading: false,
                listOrders: []
            }
        default:
            return state
    }
}

//get order details Admin
export const getOrderDetailsAdminReducer = (
    state = { order: {}, success: false },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_ORDERS_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_ORDERS_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                order: action.payload
            }
        case GET_ADMIN_ORDERS_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_ORDERS_DETAIL_RESET:
            return {
                ...state,
                isLoading: false,
                order: {}
            }
        default:
            return state
    }
}

// Update order status Admin
export const updateOrderStatusAdminReducer = (
    state = { order: {}, updateSuccess: false },
    action
) => {
    switch (action.type) {
        case UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                updateSuccess: true,
                order: action.payload
            }
        case UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_ORDER_STATUS_RESET:
            return {
                ...state,
                isLoading: false,
                updateSuccess: false,
                order: {}
            }
        default:
            return state
    }
}
