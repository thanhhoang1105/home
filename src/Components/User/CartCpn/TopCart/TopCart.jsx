import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiSubtractLine } from 'react-icons/ri'
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

import {
    addItemsToCart,
    removeItemsFromCart
} from '../../../../Redux/Actions/CartActions'
import Loading from '../../../More/Loader'
import Formatter from '../../../More/Formatter'
import './topCartCpn.scss'

const TopCart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cartItems } = useSelector(state => state.cart)

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        hanldeSetData(cartItems)
    }, [cartItems])

    const hanldeSetData = cart => {
        setTotalPrice(
            cart.reduce((total, item) => total + item.quantity * item.price, 0)
        )
        setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0))
    }

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1
        if (stock <= quantity) {
            return message.error('Product Stock Limited')
        }
        dispatch(addItemsToCart(id, newQty))
    }

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1
        if (1 >= quantity) {
            return
        }
        dispatch(addItemsToCart(id, newQty))
    }

    const handleRemoveItem = index => {
        // setLoading(true)
        dispatch(removeItemsFromCart(index))

        // SAVE LOCAL STORAGE
        const cart = JSON.parse(localStorage.getItem('cartItems'))
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
        cart.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(cart))
        // setIsLoading(true)
        hanldeSetData(cart)
        window.location.reload()
    }

    const handleNavigateProducts = () => {
        navigate('/products')
    }

    const handleNavigateCheckOut = () => {
        navigate('/checkout')
    }

    return (
        // <>
        //     {isLoading ? (
        //         <Loading />
        //     ) : (
        <div className="cart container">
            <h3 className="cart__heading">
                Gi??? h??ng <span>{cartItems?.length}</span>
            </h3>
            <div className="cart__title">
                <h4 className="cart__Item__1">S???n ph???m</h4>
                <h4>Gi??</h4>
                <h4>S??? l?????ng</h4>
                {/* <h4>Size</h4> */}
                <h4>T???ng</h4>
            </div>

            {cartItems.length > 0 ? (
                <>
                    <div className="cart__list">
                        {cartItems.map((item, index) => (
                            <div className="cart__item" key={index}>
                                <div className="cart__infor">
                                    <img
                                        src={item.image}
                                        className="cart__image"
                                        alt={item.name}
                                        // onClick={() => handleDetail(item.id)}
                                    />
                                    <h4
                                        className="cart__name"
                                        // onClick={() => handleDetail(item.id)}
                                    >
                                        {item.name}
                                    </h4>
                                </div>
                                <div className="cart__price cart__row">
                                    <h5 className="cart__note">Gi??:</h5>
                                    <span className="cart__price-number">
                                        {Formatter.format(item.price)}
                                    </span>
                                </div>
                                <div className="cart__quantity cart__row">
                                    <h5 className="cart__note">S??? l?????ng:</h5>
                                    <div className="cart__quantity-wrap">
                                        <RiSubtractLine
                                            className="cart__reduce cart__icon"
                                            onClick={() =>
                                                decreaseQuantity(
                                                    item.product,
                                                    item.quantity
                                                )
                                            }
                                        />
                                        <span className="cart__quantity-number">
                                            {item.quantity}
                                        </span>
                                        <AiOutlinePlus
                                            className="cart__increase cart__icon"
                                            onClick={() =>
                                                increaseQuantity(
                                                    item.product,
                                                    item.quantity,
                                                    item.stock
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                {/* <div className="cart__size cart__row">
                                    <h5 className="cart__note">Size: </h5>
                                    <span className="cart__size-nuumber">
                                        {item.size}
                                    </span>
                                </div> */}
                                <div className="cart__total cart__row">
                                    <h5 className="cart__note">T???ng:</h5>
                                    <span className="cart__total-number">
                                        {Formatter.format(
                                            item.price * item.quantity
                                        )}
                                    </span>
                                </div>
                                <div className="cart__total cart__row">
                                    <span className="cart__total-number">
                                        <AiFillDelete
                                            className="cart__icon"
                                            onClick={() =>
                                                handleRemoveItem(index)
                                            }
                                        />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="cart__total-wrap"
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <button
                            className="btn-flat btn-hover"
                            onClick={handleNavigateCheckOut}
                        >
                            Mua ngay
                        </button>
                    </div>
                </>
            ) : (
                <div className="cart__empty">
                    <h2 className="cart__mess">
                        Ch??a c?? s???n ph???m n??o trong gi??? h??ng!
                    </h2>
                    <button
                        className="cart__back"
                        onClick={handleNavigateProducts}
                    >
                        Quay tr??? l???i c???a h??ng
                    </button>
                </div>
            )}
        </div>
        //     )}
        // </>
    )
}

export default TopCart
