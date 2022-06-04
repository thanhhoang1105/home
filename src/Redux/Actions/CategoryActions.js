import axios from 'axios'
import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_ADMIN_CATEGORIES_REQUEST,
    GET_ADMIN_CATEGORIES_SUCCESS,
    GET_ADMIN_CATEGORIES_FAILURE,
    GET_ADMIN_CATEGORY_DETAIL_REQUEST,
    GET_ADMIN_CATEGORY_DETAIL_SUCCESS,
    GET_ADMIN_CATEGORY_DETAIL_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAILURE,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE
} from '../Constants/CategoryConstants'

//Get Categories User
export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: GET_CATEGORIES_REQUEST
        })

        const { data } = await axios.get('/api/v1/categories')

        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            payload: data.categories
        })
    } catch (error) {
        dispatch({
            type: GET_CATEGORIES_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Get all categories Admin
export const getAllCategoriesAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_CATEGORIES_REQUEST })

        const { data } = await axios.get('/api/v1/categories')

        dispatch({
            type: GET_ADMIN_CATEGORIES_SUCCESS,
            payload: data.categories
        })
    } catch (error) {
        dispatch({ type: GET_ADMIN_CATEGORIES_FAILURE, payload: error })
    }
}

// Get category detail Admin
export const getCategoryDetailAdmin = id => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_CATEGORY_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/category/${id}`)

        dispatch({
            type: GET_ADMIN_CATEGORY_DETAIL_SUCCESS,
            payload: data.category
        })
    } catch (error) {
        dispatch({ type: GET_ADMIN_CATEGORY_DETAIL_FAILURE, payload: error })
    }
}

// Create category Admin
export const createCategoryAdmin = categoryInfo => async dispatch => {
    try {
        dispatch({ type: CREATE_CATEGORY_REQUEST })

        const { data } = await axios.post(
            '/api/v1/admin/category',
            categoryInfo
        )

        dispatch({
            type: CREATE_CATEGORY_SUCCESS,
            payload: data.category
        })
    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
    }
}

//Update category Admin
export const updateCategoryAdmin =
    (categoryId, categoryInfo) => async dispatch => {
        try {
            dispatch({ type: UPDATE_CATEGORY_REQUEST })

            const { data } = await axios.put(
                `/api/v1/admin/category/${categoryId}`,
                categoryInfo
            )

            dispatch({
                type: UPDATE_CATEGORY_SUCCESS,
                payload: data.category
            })
        } catch (error) {
            dispatch({ type: UPDATE_CATEGORY_FAILURE, payload: error })
        }
    }

//Delete category Admin
export const deleteCategoryAdmin = categoryId => async dispatch => {
    try {
        dispatch({ type: DELETE_CATEGORY_REQUEST })

        await axios.delete(`/api/v1/admin/category/${categoryId}`)

        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: categoryId
        })
    } catch (error) {
        dispatch({ type: DELETE_CATEGORY_FAILURE, payload: error })
    }
}
