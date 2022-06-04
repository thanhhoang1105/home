import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_RESET,
    GET_ADMIN_CATEGORIES_REQUEST,
    GET_ADMIN_CATEGORIES_SUCCESS,
    GET_ADMIN_CATEGORIES_FAILURE,
    GET_ADMIN_CATEGORIES_RESET,
    GET_ADMIN_CATEGORY_DETAIL_REQUEST,
    GET_ADMIN_CATEGORY_DETAIL_SUCCESS,
    GET_ADMIN_CATEGORY_DETAIL_FAILURE,
    GET_ADMIN_CATEGORY_DETAIL_RESET,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_RESET,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAILURE,
    UPDATE_CATEGORY_RESET,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
    DELETE_CATEGORY_RESET
} from '../Constants/CategoryConstants'

//Get Categories User
export const getCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CATEGORIES_RESET:
            return {
                ...state,
                isLoading: false,
                error: null,
                categories: []
            }
        default:
            return state
    }
}
// Get all categories Admin
export const getAllCategoriesAdminReducer = (
    state = { listCategories: [] },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listCategories: action.payload,
                totalPages: action.payload.totalPages
            }
        case GET_ADMIN_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_CATEGORIES_RESET:
            return {
                ...state,
                isLoading: false,
                listCategories: []
            }
        default:
            return state
    }
}

// Get category detail Admin
export const getCategoryDetailAdminReducer = (
    state = { categoryDetail: {} },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_CATEGORY_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_CATEGORY_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categoryDetail: action.payload
            }
        case GET_ADMIN_CATEGORY_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_CATEGORY_DETAIL_RESET:
            return {
                ...state,
                isLoading: false,
                categoryDetail: {}
            }
        default:
            return state
    }
}

// Create category Admin
export const createCategoryAdminReducer = (
    state = { createSuccess: false, isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                createSuccess: true,
                category: action.payload
            }
        case CREATE_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CREATE_CATEGORY_RESET:
            return {
                ...state,
                isLoading: false,
                createSuccess: false,
                error: null
            }
        default:
            return state
    }
}

// Update category Admin
export const updateCategoryAdminReducer = (
    state = { updateSuccess: false, isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                updateSuccess: true,
                category: action.payload
            }
        case UPDATE_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_CATEGORY_RESET:
            return {
                ...state,
                isLoading: false,
                updateSuccess: false,
                error: null
            }
        default:
            return state
    }
}

// Delete category Admin
export const deleteCategoryAdminReducer = (
    state = { deleteSuccess: false, isLoading: false, error: null },
    action
) => {
    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deleteSuccess: true,
                category: action.payload
            }
        case DELETE_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_CATEGORY_RESET:
            return {
                ...state,
                isLoading: false,
                deleteSuccess: false,
                error: null
            }
        default:
            return state
    }
}
