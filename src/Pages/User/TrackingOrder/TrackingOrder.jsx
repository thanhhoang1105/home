import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, message } from 'antd'
import { Link } from 'react-router-dom'

import Formatter from '../../../Components/More/Formatter'
import Loading from '../../../Components/More/Loader'
const { Column } = Table

const TrackingOrder = () => {
    const dispatch = useDispatch()

    const { orders, loading, error } = useSelector(state => state.myOrder)

    useEffect(() => {
        // if(!orders) {
        //     dispatch({type: 'MY_ORDER_REQUEST'})
        // }
        if (error) {
            message.error(error)
        }
    })

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Table dataSource={orders}>
                    <Column title="ID" dataIndex="_id" key="_id" />
                    <Column
                        title="Trạng Thái"
                        dataIndex="orderStatus"
                        key="orderStatus"
                        // render={orderStatus =>
                        //     orderStatus === 'Processing' ? (
                        //         <span style={{ color: 'red' }}>Chờ xử lý</span>
                        //     ) : orderStatus === 'Shipped' ? (
                        //         <span style={{ color: 'green' }}>
                        //             Đang giao hàng
                        //         </span>
                        //     ) : (
                        //         <span style={{ color: 'blue' }}>
                        //             Đã giao hàng
                        //         </span>
                        //     )
                        // }
                    />
                    <Column
                        title="Số Lượng"
                        dataIndex="orderItems"
                        key="orderItems"
                        render={orderItems => orderItems.length}
                    />
                    <Column
                        title="Tổng Tiền"
                        dataIndex="totalPrice"
                        key="totalPrice"
                        render={totalPrice => Formatter.format(totalPrice)}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <Link to={`/order/${record._id}`}>Xem</Link>
                            </Space>
                        )}
                    />
                </Table>
            )}
        </>
    )
}

export default TrackingOrder
