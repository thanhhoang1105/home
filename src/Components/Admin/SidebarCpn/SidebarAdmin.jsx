import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    const exact = true

    return (
        <div>
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <Link to="/admin" className="brand-wrap">
                        <img
                            src="https://res.cloudinary.com/shopecommerceonline/image/upload/v1653458631/shoe/logo_gpk8xd.jpg"
                            style={{ height: '46' }}
                            className="logo"
                            alt="Dashboard"
                        />
                    </Link>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted fas fa-stream"></i>
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <NavLink
                                className={navData =>
                                    navData.isActive
                                        ? 'active menu-link'
                                        : 'none'
                                }
                                to="/admin/"
                                exact={`${exact}`}
                            >
                                <i className="icon fas fa-home"></i>
                                <span className="text">Trang Chủ</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={navData =>
                                    navData.isActive
                                        ? 'active menu-link'
                                        : 'none'
                                }
                                to="/admin/products"
                            >
                                <i className="icon fas fa-shopping-bag"></i>
                                <span className="text">Sản Phẩm</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={navData =>
                                    navData.isActive
                                        ? 'active menu-link'
                                        : 'none'
                                }
                                to="/admin/categories"
                            >
                                <i className="icon fas fa-list"></i>
                                <span className="text">Danh Mục</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={navData =>
                                    navData.isActive
                                        ? 'active menu-link'
                                        : 'none'
                                }
                                to="/admin/orders"
                            >
                                <i className="icon fas fa-bags-shopping"></i>
                                <span className="text">Đơn Hàng</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={navData =>
                                    navData.isActive
                                        ? 'active menu-link'
                                        : 'none'
                                }
                                to="/admin/users"
                            >
                                <i className="icon fas fa-user"></i>
                                <span className="text">Tài Khoản</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={navData =>
                                    navData.isActive
                                        ? 'active menu-link'
                                        : 'none'
                                }
                                to="/admin/slides"
                            >
                                <i className="icon fas fa-store-alt"></i>
                                <span className="text">Slides</span>
                            </NavLink>
                        </li>
                    </ul>
                    <br />
                    <br />
                </nav>
            </aside>
        </div>
    )
}

export default SidebarAdmin
