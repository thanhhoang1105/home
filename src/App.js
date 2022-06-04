import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import store from './Redux/store'

import { getAllOrdersAdmin } from './Redux/Actions/OrderActions'
import {
    getProducts,
    getAllProductsAdmin
} from './Redux/Actions/ProductActions'
import {
    getCategories,
    getAllCategoriesAdmin
} from './Redux/Actions/CategoryActions'
import { loadUser, getAllUsersAdmin } from './Redux/Actions/UserActions'
import { myOrder } from './Redux/Actions/OrderActions'

import LayoutAdmin from './Layout/LayoutAdmin/LayoutAdmin'
import DashboardAdmin from './Pages/Admin/Dashboard/DashboardAdmin'
import ProductAdmin from './Pages/Admin/Products/ProductAdmin'
import OrderAdmin from './Pages/Admin/Order/OrderAdmin'
import OrderUpdate from './Pages/Admin/Order/OrderUpdate'
import ProductCreate from './Pages/Admin/Products/ProductCreate'
import ProductUpdate from './Pages/Admin/Products/ProductUpdate'
import CategoryAdmin from './Pages/Admin/Category/CategoryAdmin'
import UserAdmin from './Pages/Admin/User/UserAdmin'

import Loading from './Components/More/Loader'

import LayoutUser from './Layout/LayoutUser/LayoutUser'
import Home from './Pages/User/Home/Home'
import Products from './Pages/User/Products/Products'
import LoginSignup from './Pages/Auth/LoginSignup'
import DetailProduct from './Pages/User/DetailProduct/DetailProduct'
import Cart from './Pages/User/Cart/Cart'
import CheckOut from './Pages/User/CheckOut/CheckOut'
import Profile from './Pages/User/Profile/Profile'
import TrackingOrder from './Pages/User/TrackingOrder/TrackingOrder'
import TrackingOrderDetail from './Pages/User/TrackingOrderDetail/TrackingOrderDetail'

function App() {
    useEffect(() => {
        //get User
        store.dispatch(loadUser())
        //get Products User
        store.dispatch(getProducts())
        //get categories User
        store.dispatch(getCategories())
        //get my Order
        store.dispatch(myOrder())

        //get all orders admin
        store.dispatch(getAllOrdersAdmin())
        //get all products admin
        store.dispatch(getAllProductsAdmin())
        //get all categories admin
        store.dispatch(getAllCategoriesAdmin())
        //get all users admin
        store.dispatch(getAllUsersAdmin())
    }, [])

    return (
        <Routes>
            <Route path="/home" element={<LayoutUser />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<DetailProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<TrackingOrder />} />
                <Route path="/order/:id" element={<TrackingOrderDetail />} />
            </Route>

            <Route path="/admin" element={<LayoutAdmin />}>
                <Route index element={<DashboardAdmin />} />
                <Route path="/admin/products" element={<ProductAdmin />} />
                <Route path="/admin/product/new" element={<ProductCreate />} />
                <Route path="/admin/product/:id" element={<ProductUpdate />} />
                <Route path="/admin/orders" element={<OrderAdmin />} />
                <Route path="/admin/order/:id" element={<OrderUpdate />} />
                {/* <Route path="/admin/slides" element={<SlideAdminPage />} /> */}
                <Route path="/admin/users" element={<UserAdmin />} />
                <Route path="/admin/categories" element={<CategoryAdmin />} />
                {/* <Route path="/admin/reviews" element={<ReviewAdminPage />} />  */}
            </Route>

            <Route path="/load" element={<Loading />} />
            <Route path="/auth" element={<LoginSignup />} />
        </Routes>
    )
}

export default App
