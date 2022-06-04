import React from 'react'

import Formatter from '../../../More/Formatter'

const TopTotalAdmin = props => {
    const { orders, products } = props
    let totalSale = 0
    if (orders) {
        orders.map(order => (totalSale = totalSale + order.totalPrice))
    }
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fas fa-usd-circle"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng Doanh Số</h6>{' '}
                            <span>
                                {Formatter.format(totalSale.toFixed(0))}
                            </span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-success fas fa-bags-shopping"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng Đơn Hàng</h6>
                            {orders ? (
                                <span>{orders.length}</span>
                            ) : (
                                <span>0</span>
                            )}
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-warning">
                            <i className="text-warning fas fa-shopping-basket"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng Sản Phẩm</h6>
                            {products ? <span>5</span> : <span>0</span>}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default TopTotalAdmin
