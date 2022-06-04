import React, { useEffect } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { message } from 'antd'

import Formatter from '../../../More/Formatter'
import Loading from '../../../More/Loader'

const LatestOrderAdmin = props => {
    const { listOrders, error, loading } = props

    useEffect(() => {
        if (error) {
            message.error(error)
        }
    }, [error])
    return (
        <div className="card-body">
            <h4 className="card-title">Danh Sách Đơn Đặt Hàng</h4>
            {loading ? (
                <Loading />
            ) : (
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            {listOrders.map(order => (
                                <tr key={order._id}>
                                    <td>
                                        <b>{order.shippingInfo.name}</b>
                                    </td>
                                    <td>{order.shippingInfo.email}</td>
                                    <td>
                                        {Formatter.format(order.totalPrice)}
                                    </td>
                                    <td>{order.paymentInfo}</td>
                                    <td>
                                        {moment(order.createdAt).format('llll')}
                                    </td>
                                    <td className="d-flex justify-content-end align-item-center">
                                        <Link
                                            to={`/admin/order/${order._id}`}
                                            className="text-success"
                                        >
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default LatestOrderAdmin
