import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Rate, message } from 'antd'
import moment from 'moment'

import Formatter from '../../../Components/More/Formatter'
import { getOrderDetails } from '../../../Redux/Actions/OrderActions'
import './style.css'
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

const TrackingOrderDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { order, success } = useSelector(state => state.getOrderDetail)

    const [value, setValue] = useState(1)

    const subtotal = order?.totalPrice
    const shippingCharges = 0
    const totalAllPrice = subtotal + shippingCharges

    useEffect(() => {
        if (!success) {
            dispatch(getOrderDetails(id))
        }
    }, [dispatch, id, success])

    const handleUpdateReview = value => {}

    // console.log('order', order)

    return (
        <section className="content-main" style={{ maxWidth: '1200px' }}>
            <form /* onSubmit={submitHandler} */>
                <div className="content-header">
                    <h2 className="content-title">Đơn Hàng</h2>
                </div>
                <div className="mb-4">
                    <div className="">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className="Order-top_details">
                                    <div className="Order-top-left">
                                        Địa Chỉ Nhận Hàng:{' '}
                                        {order?.shippingInfo?.address},{' '}
                                        {order?.shippingInfo?.ward},
                                        {order?.shippingInfo?.district},{' '}
                                        {order?.shippingInfo?.province},{' '}
                                    </div>
                                    <div className="Order-top-right">
                                        <div className="Order-top-right-item">
                                            Số điện thoại:{' '}
                                            {order?.shippingInfo?.phoneNo}
                                        </div>
                                    </div>
                                </div>
                                <div className="Order-bottom_details">
                                    <div className="Order-bottom-left_details">
                                        <div className="Order-bottom-left-item_details">
                                            Tên: {order?.shippingInfo?.name}
                                        </div>
                                        <div className="Order-bottom-left-item_details">
                                            Email: {order?.shippingInfo?.email}
                                        </div>
                                    </div>
                                    <div className="Order-bottom-right_details">
                                        <div className="Order-bottom-right-item_details">
                                            Thời gian tạo:{' '}
                                            {/* {moment(order.createdAt).format(
                                                'llll'
                                            )} */}
                                        </div>
                                        <div className="Order-bottom-right-item_details">
                                            Thời gian đánh giá:{' '}
                                            {/* {moment(order.deliveredAt).format(
                                                'llll'
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="Order-top">
                                    <div className="Order-top-left">
                                        ID: {order?._id}
                                    </div>
                                    <div className="Order-top-right">
                                        <div className="Order-top-right-item">
                                            {/* {order.orderStatus === 'Processing'
                                                ? 'Chờ xác nhận'
                                                : order.orderStatus ===
                                                  'Shipped'
                                                ? 'Đang giao hàng'
                                                : 'Đã giao hàng'} */}
                                        </div>
                                        <div className="Order-top-right-center"></div>
                                        <div className="Order-top-right-item">
                                            ĐÁNH GIÁ
                                        </div>
                                    </div>
                                </div>
                                {order?.orderItems?.map((item, index) => (
                                    <div className="Order-center" key={index}>
                                        <div className="Order-center-left">
                                            <div className="Order-center-left-item">
                                                <img
                                                    src={item?.image}
                                                    className="Order-center-Image"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="Order-center-left-item">
                                                <div className="Order-center-left-item-name">
                                                    {item?.name}
                                                </div>
                                                <div className="Order-center-left-item-categories">
                                                    phân loại đèn
                                                </div>
                                                <div className="Order-center-left-item-quality">
                                                    x{item?.quantity}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Order-center-right">
                                            <div className="Order-center-right-item">
                                                {Formatter.format(item?.price)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="Order-bottom">
                                    <div className="Order-bottom-left">
                                        <div className="Order-bottom-left-item">
                                            Tổng tiền hàng
                                        </div>
                                        <div className="Order-bottom-left-item">
                                            Phí vận chuyển
                                        </div>
                                        <div className="Order-bottom-left-item">
                                            Tổng số tiền
                                        </div>
                                        <div className="Order-bottom-left-item">
                                            Phương thức Thanh toán
                                        </div>
                                    </div>
                                    <div className="Order-bottom-right">
                                        <div className="Order-bottom-right-item">
                                            {Formatter.format(
                                                order?.totalPrice
                                            )}
                                        </div>
                                        <div className="Order-bottom-right-item">
                                            {Formatter.format(shippingCharges)}
                                        </div>
                                        <div className="Order-bottom-right-item">
                                            {Formatter.format(totalAllPrice)}
                                        </div>
                                        <div className="Order-bottom-right-item">
                                            Thanh toán khi nhận hàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className="Order-top_details_button">
                                    <div className="Order-top-right-item_button">
                                        <span>
                                            <Rate
                                                tooltips={desc}
                                                onChange={setValue}
                                                value={value}
                                            />
                                            {value ? (
                                                <span className="ant-rate-text">
                                                    {desc[value - 1]}
                                                </span>
                                            ) : (
                                                ''
                                            )}
                                        </span>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handleUpdateReview(order._id)
                                            }
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default TrackingOrderDetail
