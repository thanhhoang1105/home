import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import { logout } from '../../../Redux/Actions/UserActions'
import { getProducts } from '../../../Redux/Actions/ProductActions'

const Header = () => {
    const dispatch = useDispatch()

    const { user, error } = useSelector(state => state.getUser)

    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if (error) {
            message.error(error)
        }
        dispatch(getProducts(keyword))
    }, [dispatch, keyword, error])

    const handleLogout = () => {
        dispatch(logout())
        message.success('Đăng xuất thành công')
    }
    return (
        <div className="header">
            <header>
                <div className="mobile-menu bg-second">
                    <Link to="/" className="mb-logo">
                        NTShop
                    </Link>
                    <span className="mb-menu-toggle" id="mb-menu-toggle">
                        <i className="bx bx-menu"></i>
                    </span>
                </div>
                <div className="header-wrapper" id="header-wrapper">
                    <span
                        className="mb-menu-toggle mb-menu-close"
                        id="mb-menu-close"
                    >
                        <i className="bx bx-x"></i>
                    </span>
                    <div className="bg-second">
                        <div className="top-header container">
                            <ul className="devided">
                                <li>
                                    <Link to="/">+840123456789</Link>
                                </li>
                                <li>
                                    <Link to="/">atshop@mail.com</Link>
                                </li>
                            </ul>
                            <ul className="devided">
                                <li className="dropdown">
                                    <Link to="/">USD</Link>
                                    <i className="bx bxs-chevron-down"></i>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/">VND</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/">ENGLISH</Link>
                                    <i className="bx bxs-chevron-down"></i>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/">VIETNAMESE</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/orders">ORDER TRACKING</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-main">
                        <div className="mid-header container">
                            <Link to="/" className="logo">
                                NTShop
                            </Link>
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="search-input"
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <i className="bx bx-search-alt"></i>
                            </div>
                            <ul className="user-menu">
                                <li>
                                    <Link to="/">
                                        <i className="bx bx-heart"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cart">
                                        <i className="bx bx-cart"></i>
                                    </Link>
                                </li>
                                {user ? (
                                    <>
                                        <li>
                                            <Link to="/profile">
                                                <i className="bx bx-user-circle"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={handleLogout}>
                                                <i className="bx bx-log-in"></i>
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/auth">
                                                <i className="bx bx-user-circle"></i>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-second">
                        <div className="bottom-header container">
                            <ul className="main-menu">
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/products">products</Link>
                                </li>
                                {/* mega menu  */}
                                <li className="mega-dropdown">
                                    <a href="true">
                                        Shop
                                        <i className="bx bxs-chevron-down"></i>
                                    </a>
                                    <div className="mega-content">
                                        <div className="row">
                                            <div className="col_3 col_md_12">
                                                <div className="box_1">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col_3 col_md_12">
                                                <div className="box_1">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col_3 col_md_12">
                                                <div className="box_1">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col_3 col_md_12">
                                                <div className="box_1">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row img-row">
                                            <div className="col_3">
                                                <div className="box_1">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="col_3">
                                                <div className="box_1">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="col_3">
                                                <div className="box_1">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="col_3">
                                                <div className="box_1">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* end mega menu  */}
                                <li>
                                    <Link to="/">blog</Link>
                                </li>
                                <li>
                                    <Link to="/">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end bottom header  */}
                </div>
                {/* end main header  */}
            </header>
        </div>
    )
}

export default Header
