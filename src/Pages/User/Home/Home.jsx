import React from 'react'
import Product from '../../../Components/User/ProductCpn/Product'

import Slider from '../../../Components/User/Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider />
            <div className="products">
                <div className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Latest product</h2>
                        </div>
                        <Product />
                        <div className="section-footer">
                            <a href="./products" className="btn-flat btn-hover">
                                view all
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BestSelling /> */}
        </div>
    )
}

export default Home
