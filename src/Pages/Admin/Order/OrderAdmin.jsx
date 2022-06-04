import React from 'react'
import { useSelector } from 'react-redux'
// import { message } from 'antd'
import { Link } from 'react-router-dom'

import Formatter from '../../../Components/More/Formatter'

const OrderAdmin = () => {
    const { listOrders } = useSelector(state => state.getAllOrdersAdmin)

    // for (let i = 0; i < listOrders.length; i++) {
    //     const subtotal = listOrders[i].totalPrice
    //     const shippingCharges = 100000
    //     const totalAllPrice = subtotal + shippingCharges
    // }

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Danh sách đơn hàng</h2>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Trạng Thái</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Tiền</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            {/* Table Data */}
                            <tbody>
                                {listOrders.map(order => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>
                                            <b>
                                                {order.orderStatus ===
                                                'Processing'
                                                    ? 'Đang xác nhận'
                                                    : order.orderStatus ===
                                                      'Shipped'
                                                    ? 'Đang giao hàng'
                                                    : 'Đã giao hàng'}
                                            </b>
                                        </td>
                                        <td>{order.orderItems.length}</td>
                                        <td>
                                            {/* {Formatter.format(order.totalPrice)} */}
                                            {Formatter.format(order.totalPrice)}
                                        </td>
                                        <td className="text-end">
                                            <div className="actions">
                                                <Link
                                                    to={`/admin/order/${order._id}`}
                                                    className="text-success"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                    className="text-danger"
                                                    to="#"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderAdmin
