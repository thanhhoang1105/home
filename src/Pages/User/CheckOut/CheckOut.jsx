import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'

import { CREATE_ORDER_RESET } from '../../../Redux/Constants/OrderConstants'
import { createOrder } from '../../../Redux/Actions/OrderActions'
import Loading from '../../../Components/More/Loader'
import Formatter from '../../../Components/More/Formatter'
import cashIcon from '../../../Assets/Icons/payment_cash.png'
import ewalletIcon from '../../../Assets/Icons/payment_ewallet.png'

import './checkoutCpn.scss'

const CheckOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(state => state.getUser)

    const { cartItems } = useSelector(state => state.cart)

    const { orderItem, error, loading } = useSelector(
        state => state.createOrder
    )

    const [provinces, setProvinces] = useState({})
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [paymentInfo, setPaymentInfo] = useState({})

    useEffect(() => {
        const fetchProvinces = async () => {
            const dataProvince = await (
                await fetch('https://provinces.open-api.vn/api/?depth=3')
            ).json()
            setProvinces(dataProvince)
        }
        fetchProvinces()
    }, [])

    const [formData, setFormData] = useState({
        address: user?.address,
        district: '',
        email: user?.email,
        name: user?.name,
        phoneNo: user?.phoneNo,
        province: '',
        ward: ''
    })

    let totalAllPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    const subtotal = totalAllPrice
    const shippingCharges = 0
    const totalPrice = subtotal + shippingCharges

    const order = {
        shippingInfo: formData,
        orderItems: cartItems,
        user: user,
        paymentInfo: paymentInfo,
        itemsPrice: subtotal,
        shippingPrice: shippingCharges,
        totalPrice: totalPrice
    }

    useEffect(() => {
        if (error) {
            message.error(error)
        }
        if (orderItem) {
            message.success('Đặt hàng thành công')
            window.location.href = '/'
            dispatch({ type: CREATE_ORDER_RESET })
        }
    }, [dispatch, error, orderItem, navigate])

    const handleCityChange = e => {
        let provinceName = e.target.value
        setFormData({ ...formData, province: provinceName })
        let districtsObj = Object.values(provinces).filter(
            item => item.name === provinceName
        )[0].districts
        setDistricts(Object.values(districtsObj))
        let wardsObj = Object.values(districtsObj)[0].wards
        setWards(Object.values(wardsObj))
    }

    const submitHandler = e => {
        e.preventDefault()

        dispatch(createOrder(order))
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="checkout_container">
                    <div className="checkout_row">
                        <div className="column mb-60">
                            <div>
                                <form
                                    onSubmit={submitHandler}
                                    className="checkout row mb-60"
                                    style={{ margin: '0' }}
                                >
                                    <div className="column">
                                        <div className="customer_details">
                                            <h3>Thông tin nhận hàng</h3>
                                            <div className="field-wrapper">
                                                <div className="form-row">
                                                    <label htmlFor="fullname">
                                                        Họ và tên
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="billing_fullname"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                name: e.target
                                                                    .value
                                                            })
                                                        }
                                                        value={formData.name}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="phonenumber">
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        className="input-text"
                                                        name="billing_phonenumber"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                phoneNo:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                        value={formData.phoneNo}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="email">
                                                        Địa chỉ email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="input-text"
                                                        name="billing_email"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                email: e.target
                                                                    .value
                                                            })
                                                        }
                                                        value={formData.email}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="city">
                                                        Tỉnh/Thành phố
                                                    </label>
                                                    <select
                                                        type="text"
                                                        className="input-text"
                                                        id="city"
                                                        name="billing_city"
                                                        onChange={
                                                            handleCityChange
                                                        }
                                                        value={
                                                            formData.province
                                                        }
                                                    >
                                                        <option value="">
                                                            Chọn tỉnh/thành phố
                                                        </option>
                                                        {Object.values(
                                                            provinces
                                                        ).map((item, i) => (
                                                            <option key={i}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="district">
                                                        Quận/Huyện
                                                    </label>
                                                    <select
                                                        type="text"
                                                        id="district"
                                                        className="input-text"
                                                        name="billing_district"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                district:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                        value={
                                                            formData.district
                                                        }
                                                    >
                                                        <option value="">
                                                            Chọn quận/huyện
                                                        </option>
                                                        {Object.values(
                                                            districts
                                                        ).map((item, i) => (
                                                            <option key={i}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="ward">
                                                        Xã/Phường/thị trấn
                                                    </label>
                                                    <select
                                                        type="text"
                                                        id="ward"
                                                        className="input-text"
                                                        name="billing_ward"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                ward: e.target
                                                                    .value
                                                            })
                                                        }
                                                        value={formData.ward}
                                                    >
                                                        <option value="">
                                                            Chọn xã/phường/thị
                                                        </option>
                                                        {Object.values(
                                                            wards
                                                        ).map((item, i) => (
                                                            <option key={i}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="address">
                                                        Địa chỉ
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="billing_address"
                                                        placeholder="Địa chỉ"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                address:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                        value={formData.address}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message_box color-info">
                                            <ol>
                                                <li>
                                                    Quý khách vui lòng kiểm tra
                                                    lại kỹ một lần nữa{' '}
                                                    <strong>
                                                        Thông tin giao hàng
                                                    </strong>{' '}
                                                    trước khi bấm nút{' '}
                                                    <strong>Đặt hàng.</strong>
                                                </li>
                                                <li>
                                                    Nhân viên Shop sẽ xác nhận
                                                    đơn hàng trong vòng tối đa 4
                                                    giờ làm việc (không kể Chủ
                                                    nhật và Ngày lễ).
                                                </li>
                                            </ol>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Điện thoại đặt hàng
                                                        nhanh: 1800.6879 (miễn
                                                        cước)
                                                    </li>
                                                    <li>
                                                        Email:
                                                        cskh@shoeshop.com.vn
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <h3>Chi tiết đơn hàng</h3>
                                        <table className="shop_table">
                                            <thead>
                                                <tr>
                                                    <th className="th">
                                                        Sản phẩm
                                                    </th>
                                                    <th className="th">
                                                        Số lượng
                                                    </th>
                                                    <th className="th">
                                                        Tạm tính
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map(
                                                    (
                                                        {
                                                            name,
                                                            quantity,
                                                            price
                                                        },
                                                        i
                                                    ) => (
                                                        <tr key={i}>
                                                            <td>{name}</td>
                                                            <td>{quantity}</td>
                                                            <td>
                                                                {Formatter.format(
                                                                    price *
                                                                        quantity
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>
                                                        <b>Tạm tính</b>
                                                    </td>
                                                    <td>-</td>
                                                    <td>
                                                        {Formatter.format(
                                                            cartItems.reduce(
                                                                (a, c) =>
                                                                    a +
                                                                    c.price *
                                                                        c.quantity,
                                                                0
                                                            )
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Giao hàng</b>
                                                    </td>
                                                    <td>-</td>
                                                    <td>Miễn phí</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Tổng</b>
                                                    </td>
                                                    <td>-</td>
                                                    <td>
                                                        {Formatter.format(
                                                            totalAllPrice
                                                        )}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>

                                        <div className="checkout-payment">
                                            <ul className="payment_method">
                                                <li>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            name="payment_method"
                                                            id="payment_cod"
                                                            value="COD"
                                                            onChange={e =>
                                                                setPaymentInfo(
                                                                    'COD'
                                                                )
                                                            }
                                                        />
                                                        <label htmlFor="payment_cod">
                                                            Thanh toán sau khi
                                                            nhận hàng (COD)
                                                        </label>
                                                    </div>

                                                    <div>
                                                        <img
                                                            src={cashIcon}
                                                            alt="cash"
                                                            height="32"
                                                            width="64"
                                                        />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            name="payment_method"
                                                            id="payment_ewallet"
                                                            value="eWallet"
                                                            onChange={e =>
                                                                setPaymentInfo(
                                                                    'eWallet'
                                                                )
                                                            }
                                                        />
                                                        <label htmlFor="payment_ewallet">
                                                            Thanh toán bằng ví
                                                            điện tử
                                                        </label>
                                                    </div>

                                                    <div>
                                                        <img
                                                            src={ewalletIcon}
                                                            height="32"
                                                            width="64"
                                                            alt="vnpay"
                                                        />
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="payment_box">
                                                <p>
                                                    Tất cả đơn hàng từ Shoe Shop
                                                    đều hỗ trợ thử sản phẩm
                                                    trước khi thanh toán. <br />
                                                    Nếu không vừa size hoặc
                                                    không ưng ý, vui lòng gửi
                                                    trả lại nhân viên giao nhận
                                                    mà không phát sinh thêm bất
                                                    kỳ chi phí nào.
                                                </p>
                                            </div>
                                            <button
                                                type="submit"
                                                className="place-order button"
                                            >
                                                Đặt hàng
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CheckOut
