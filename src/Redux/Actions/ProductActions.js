import axios from 'axios'
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
    GET_ADMIN_PRODUCTS_FAILURE,
    GET_ADMIN_PRODUCT_DETAIL_REQUEST,
    GET_ADMIN_PRODUCT_DETAIL_SUCCESS,
    GET_ADMIN_PRODUCT_DETAIL_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from '../Constants/ProductConstants'

//get all products User
export const getProducts =
    (keyword = '', currentPage, category) =>
    async dispatch => {
        try {
            dispatch({
                type: GET_PRODUCTS_REQUEST
            })

            let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`

            if (category) {
                link = `/api/v1/products?category=${category}`
            }

            // console.log('keyword successfully', keyword)
            // console.log('Category successfully', category)
            const { data } = await axios.get(link)

            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_PRODUCTS_FAILURE,
                payload: error.response.data.message
            })
        }
    }

//get product detail
export const getProductDetail = id => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_DETAIL_REQUEST
        })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Get all products Admin
export const getAllProductsAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_PRODUCTS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/products')

        dispatch({ type: GET_ADMIN_PRODUCTS_SUCCESS, payload: data.products })
    } catch (error) {
        dispatch({ type: GET_ADMIN_PRODUCTS_FAILURE, payload: error })
    }
}

//get product detail admin
export const getProductDetailAdmin = id => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_PRODUCT_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: GET_ADMIN_PRODUCT_DETAIL_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({ type: GET_ADMIN_PRODUCT_DETAIL_FAILURE, payload: error })
    }
}

// Create product Admin
export const createProductAdmin = createProductInfo => async dispatch => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST })

        const { data } = await axios.post(
            '/api/v1/admin/product/new',
            createProductInfo
        )

        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.product })
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error })
    }
}

//Update product Admin
export const updateProductAdmin = (id, updateProductInfo) => async dispatch => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST })

        const { data } = await axios.put(
            `/api/v1/admin/product/${id}`,
            updateProductInfo
        )

        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.product })
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error })
    }
}

// Delete product Admin
export const deleteProductAdmin = productId => async dispatch => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST })

        const { data } = await axios.delete(
            `/api/v1/admin/product/${productId}`
        )

        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.product })
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error })
    }
}
