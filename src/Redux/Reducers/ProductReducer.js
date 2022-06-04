import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_RESET,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
    GET_ADMIN_PRODUCTS_FAILURE,
    GET_ADMIN_PRODUCTS_RESET,
    GET_ADMIN_PRODUCT_DETAIL_REQUEST,
    GET_ADMIN_PRODUCT_DETAIL_SUCCESS,
    GET_ADMIN_PRODUCT_DETAIL_FAILURE,
    GET_ADMIN_PRODUCT_DETAIL_RESET,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_RESET
} from '../Constants/ProductConstants'

//Get Products User
export const getProductsReducer = (
    state = { products: [], isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
                totalPages: action.payload.totalPages
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case GET_PRODUCTS_RESET:
            return {
                ...state,
                isLoading: false,
                error: null,
                products: []
            }
        default:
            return state
    }
}

export const getProductDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload.product
            }
        case PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

// Get all products Admin
export const getAllProductsAdminReducer = (
    state = { listProducts: [] },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listProducts: action.payload,
                totalPages: action.payload.totalPages
            }
        case GET_ADMIN_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_PRODUCTS_RESET:
            return {
                ...state,
                isLoading: false,
                listProducts: []
            }
        default:
            return state
    }
}

//Get product detail admin
export const getProductDetailAdminReducer = (
    state = { product: {}, success: false },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                product: action.payload
            }
        case GET_ADMIN_PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_PRODUCT_DETAIL_RESET:
            return {
                ...state,
                isLoading: false,
                product: {}
            }
        default:
            return state
    }
}

// Create product Admin
export const createProductAdminReducer = (
    state = { isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                product: action.payload
            }
        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CREATE_PRODUCT_RESET:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        default:
            return state
    }
}

//Update product Admin
export const updateProductAdminReducer = (
    state = { product: {}, isUpdate: false },
    action
) => {
    switch (action.type) {
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdate: true,
                product: action.payload
            }
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isLoading: false,
                isUpdate: false,
                error: null
            }
        default:
            return state
    }
}

// Delete product Admin
export const deleteProductAdminReducer = (
    state = { isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                product: action.payload
            }
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isLoading: false,
                success: false,
                error: null
            }
        default:
            return state
    }
}
