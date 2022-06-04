import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'
import Product from '../../../Components/User/ProductCpn/Product'

import { getProducts } from '../../../Redux/Actions/ProductActions'
const Products = () => {
    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.getCategories)

    const { products, error, totalPages } = useSelector(
        state => state.getProducts
    )

    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('')
    const [keyword] = useState('')

    useEffect(() => {
        if (error) {
            message.error(error)
        }
        dispatch(getProducts(keyword, currentPage, category))
    }, [dispatch, keyword, currentPage, category, error])

    const decreaseNavigator = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const increaseNavigator = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="bg-main">
            <div className="container-1">
                <div className="box_1">
                    <div className="breadcumb">
                        <Link to="/">home</Link>
                        <span>
                            <i className="bx bxs-chevrons-right"></i>
                        </span>
                        <Link to="/products">all products</Link>
                    </div>
                </div>
                <div className="box_1">
                    <div className="row">
                        <div className="col-2-5 filter-col" id="filter-col">
                            <div className="box filter-toggle-box">
                                <button
                                    className="btn-flat btn-hover"
                                    id="filter-close"
                                >
                                    close
                                </button>
                            </div>
                            <div className="box_1">
                                <span className="filter-header">
                                    Categories
                                </span>
                                <ul
                                    className="filter-list"
                                    style={{ paddingLeft: '0' }}
                                >
                                    <li>
                                        <Link
                                            to=""
                                            onClick={() => setCategory('')}
                                        >
                                            All Products
                                        </Link>
                                    </li>
                                    {categories.map(category => (
                                        <li
                                            key={category._id}
                                            onClick={() =>
                                                setCategory(category.name)
                                            }
                                        >
                                            <Link to={`/products/`}>
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-9-5 col-md-12">
                            <div className="box filter-toggle-box">
                                <button
                                    className="btn-flat btn-hover"
                                    id="filter-toggle"
                                >
                                    filter
                                </button>
                            </div>
                            <div className="box-1">
                                <div className="row" id="products">
                                    <Product />
                                </div>
                            </div>
                            <div className="box_1">
                                <ul className="pagination">
                                    <li>
                                        <Link to="" onClick={decreaseNavigator}>
                                            <i className="bx bxs-chevron-left"></i>
                                        </Link>
                                    </li>
                                    {/* {navigator.map((nav, i) => (
                                        <li
                                            key={i}
                                            className={
                                                navigator.indexOf(nav) === -1 ? 'active' : ''

                                            }
                                        >
                                            <Link to="" onClick={() => setNavigator(nav)}>
                                                {nav}
                                            </Link>
                                        </li>
                                    ))} */}
                                    <li>
                                        <Link to="" className="active_nav">
                                            1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" onClick={increaseNavigator}>
                                            <i className="bx bxs-chevron-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
