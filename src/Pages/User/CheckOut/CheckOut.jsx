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
            message.success('?????t h??ng th??nh c??ng')
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
                                            <h3>Th??ng tin nh???n h??ng</h3>
                                            <div className="field-wrapper">
                                                <div className="form-row">
                                                    <label htmlFor="fullname">
                                                        H??? v?? t??n
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
                                                        S??? ??i???n tho???i
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
                                                        ?????a ch??? email
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
                                                        T???nh/Th??nh ph???
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
                                                            Ch???n t???nh/th??nh ph???
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
                                                        Qu???n/Huy???n
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
                                                            Ch???n qu???n/huy???n
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
                                                        X??/Ph?????ng/th??? tr???n
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
                                                            Ch???n x??/ph?????ng/th???
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
                                                        ?????a ch???
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="input-text"
                                                        name="billing_address"
                                                        placeholder="?????a ch???"
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
                                                    Qu?? kh??ch vui l??ng ki???m tra
                                                    l???i k??? m???t l???n n???a{' '}
                                                    <strong>
                                                        Th??ng tin giao h??ng
                                                    </strong>{' '}
                                                    tr?????c khi b???m n??t{' '}
                                                    <strong>?????t h??ng.</strong>
                                                </li>
                                                <li>
                                                    Nh??n vi??n Shop s??? x??c nh???n
                                                    ????n h??ng trong v??ng t???i ??a 4
                                                    gi??? l??m vi???c (kh??ng k??? Ch???
                                                    nh???t v?? Ng??y l???).
                                                </li>
                                            </ol>
                                            <div>
                                                <ul>
                                                    <li>
                                                        ??i???n tho???i ?????t h??ng
                                                        nhanh: 1800.6879 (mi???n
                                                        c?????c)
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
                                        <h3>Chi ti???t ????n h??ng</h3>
                                        <table className="shop_table">
                                            <thead>
                                                <tr>
                                                    <th className="th">
                                                        S???n ph???m
                                                    </th>
                                                    <th className="th">
                                                        S??? l?????ng
                                                    </th>
                                                    <th className="th">
                                                        T???m t??nh
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
                                                        <b>T???m t??nh</b>
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
                                                        <b>Giao h??ng</b>
                                                    </td>
                                                    <td>-</td>
                                                    <td>Mi???n ph??</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>T???ng</b>
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
                                                            Thanh to??n sau khi
                                                            nh???n h??ng (COD)
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
                                                            Thanh to??n b???ng v??
                                                            ??i???n t???
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
                                                    T???t c??? ????n h??ng t??? Shoe Shop
                                                    ?????u h??? tr??? th??? s???n ph???m
                                                    tr?????c khi thanh to??n. <br />
                                                    N???u kh??ng v???a size ho???c
                                                    kh??ng ??ng ??, vui l??ng g???i
                                                    tr??? l???i nh??n vi??n giao nh???n
                                                    m?? kh??ng ph??t sinh th??m b???t
                                                    k??? chi ph?? n??o.
                                                </p>
                                            </div>
                                            <button
                                                type="submit"
                                                className="place-order button"
                                            >
                                                ?????t h??ng
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
