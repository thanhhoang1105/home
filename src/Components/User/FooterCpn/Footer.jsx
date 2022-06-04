import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="bg-second">
                <div className="container">
                    <div className="row">
                        <div className="col_3 col-md-6">
                            <h3 className="footer-head">Products</h3>
                            <ul className="menu">
                                <li>
                                    <Link to="/"> Help center</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/">product help</Link>
                                </li>
                                <li>
                                    <Link to="/">warranty</Link>
                                </li>
                                <li>
                                    <Link to="/">order status</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col_3 col-md-6">
                            <h3 className="footer-head">services</h3>
                            <ul className="menu">
                                <li>
                                    <Link to="/">Help center</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/">product help</Link>
                                </li>
                                <li>
                                    <Link to="/">warranty</Link>
                                </li>
                                <li>
                                    <Link to="/">order status</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col_3 col-md-6">
                            <h3 className="footer-head">support</h3>
                            <ul className="menu">
                                <li>
                                    <Link to="/">Help center</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/">product help</Link>
                                </li>
                                <li>
                                    <Link to="/">warranty</Link>
                                </li>
                                <li>
                                    <Link to="/">order status</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col_3 col-md-6 col-sm-12">
                            <div className="contact">
                                <h3 className="contact-header">ATShop</h3>
                                <ul className="contact-socials">
                                    <li>
                                        <Link to="/">
                                            <i className="bx bxl-facebook-circle"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="bx bxl-instagram-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="bx bxl-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="bx bxl-twitter"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="subscribe">
                                <input
                                    type="email"
                                    placeholder="ENTER YOUR EMAIL"
                                />
                                <button>subscribe</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer  */}
        </div>
    )
}

export default Footer
