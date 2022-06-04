import axios from 'axios'
import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS,
    ORDER_DETAIL_FAIL,
    GET_ADMIN_ORDERS_REQUEST,
    GET_ADMIN_ORDERS_SUCCESS,
    GET_ADMIN_ORDERS_FAILURE,
    GET_ADMIN_ORDERS_DETAIL_REQUEST,
    GET_ADMIN_ORDERS_DETAIL_SUCCESS,
    GET_ADMIN_ORDERS_DETAIL_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE
} from '../Constants/OrderConstants'

// Create Order User
export const createOrder = order => async dispatch => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/v1/order/new', order, config)

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

// My Orders
export const myOrder = () => async dispatch => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST })

        const { data } = await axios.get('/api/v1/orders/me')

        dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders })
    } catch (error) {
        dispatch({
            type: MY_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get Order Details
export const getOrderDetails = id => async dispatch => {
    try {
        dispatch({ type: ORDER_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/v1/order/${id}`)

        dispatch({ type: ORDER_DETAIL_SUCCESS, payload: data.order })
    } catch (error) {
        dispatch({
            type: ORDER_DETAIL_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get all orders Admin
export const getAllOrdersAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_ORDERS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/orders')

        dispatch({ type: GET_ADMIN_ORDERS_SUCCESS, payload: data.orders })
    } catch (error) {
        dispatch({ type: GET_ADMIN_ORDERS_FAILURE, payload: error })
    }
}

// Get order details Admin
export const getOrderDetailsAdmin = id => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_ORDERS_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/v1/order/${id}`)

        dispatch({ type: GET_ADMIN_ORDERS_DETAIL_SUCCESS, payload: data.order })
    } catch (error) {
        dispatch({ type: GET_ADMIN_ORDERS_DETAIL_FAILURE, payload: error })
    }
}

// Update order status Admin
export const updateOrderStatusAdmin = (id, status) => async dispatch => {
    try {
        dispatch({ type: UPDATE_ORDER_STATUS_REQUEST })

        const { data } = await axios.put(`/api/v1/admin/order/${id}`, {
            status
        })

        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: data.order })
    } catch (error) {
        dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error })
    }
}
