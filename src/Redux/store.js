import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    createOrderReducer,
    myOrdersReducer,
    orderDetailsReducer,
    getAllOrdersAdminReducer,
    getOrderDetailsAdminReducer,
    updateOrderStatusAdminReducer
} from './Reducers/OrderReducer'
import {
    getProductsReducer,
    getProductDetailReducer,
    getAllProductsAdminReducer,
    getProductDetailAdminReducer,
    createProductAdminReducer,
    updateProductAdminReducer,
    deleteProductAdminReducer
} from './Reducers/ProductReducer'
import {
    getCategoriesReducer,
    getAllCategoriesAdminReducer,
    getCategoryDetailAdminReducer,
    createCategoryAdminReducer,
    updateCategoryAdminReducer,
    deleteCategoryAdminReducer
} from './Reducers/CategoryReducer'

import {
    userReducer,
    userDetailsReducer,
    profileReducer,
    forgotPasswordReducer,
    getAllUsersAdminReducer
} from './Reducers/UserReducer'
import { cartReducer } from './Reducers/CartReducer'

const reducer = combineReducers({
    //User
    getUser: userReducer,
    getUserDetails: userDetailsReducer,
    updateProfile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    //products
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer,
    //Categories
    getCategories: getCategoriesReducer,
    //Order
    createOrder: createOrderReducer,
    myOrder: myOrdersReducer,
    getOrderDetail: orderDetailsReducer,
    //Cart
    cart: cartReducer,

    //Admin
    //Products
    getAllProductsAdmin: getAllProductsAdminReducer,
    getProductDetailAdmin: getProductDetailAdminReducer,
    createProductAdmin: createProductAdminReducer,
    updateProductAdmin: updateProductAdminReducer,
    deleteProductAdmin: deleteProductAdminReducer,
    //Orders
    getAllOrdersAdmin: getAllOrdersAdminReducer,
    getOrderDetails: getOrderDetailsAdminReducer,
    updateOrderStatusAdmin: updateOrderStatusAdminReducer,
    //Categories
    getAllCategoriesAdmin: getAllCategoriesAdminReducer,
    getCategoryDetailAdmin: getCategoryDetailAdminReducer,
    createCategoryAdmin: createCategoryAdminReducer,
    updateCategoryAdmin: updateCategoryAdminReducer,
    deleteCategoryAdmin: deleteCategoryAdminReducer,
    //User
    getAllUsersAdmin: getAllUsersAdminReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
