import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Rate, message } from 'antd'

import { getProductDetail } from '../../../Redux/Actions/ProductActions'
import { addItemsToCart } from '../../../Redux/Actions/CartActions'
import Formatter from '../../../Components/More/Formatter'
import Loading from '../../../Components/More/Loader'

const DetailProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { product, error, loading } = useSelector(
        state => state.getProductDetail
    )

    useEffect(() => {
        if (error) {
            message.error(error)
        }
        dispatch(getProductDetail(id))
    }, [dispatch, error, id])

    // Increase quantity
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        if (product.stock <= quantity)
            return message.error('Số lượng sản phẩm không đủ')
        const qty = quantity + 1
        setQuantity(qty)
    }

    const decreaseQuantity = () => {
        if (1 >= quantity) return
        const qty = quantity - 1
        setQuantity(qty)
    }

    const addToCartHandler = () => {
        if (product.stock > 0) {
            dispatch(addItemsToCart(id, quantity))
            message.success('Thêm vào giỏ hàng thành công')
        } else {
            message.error(' Số lượng sản phẩm không đủ')
        }
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="detail-product-page">
                    <div className="bg-main">
                        <div className="container">
                            <div className="box_1">
                                <div className="breadcumb">
                                    <Link to="/">home</Link>
                                    <span>
                                        <i className="bx bxs-chevrons-right"></i>
                                    </span>
                                    <Link to="/products">all products</Link>
                                    <span>
                                        <i className="bx bxs-chevrons-right"></i>
                                    </span>
                                    <Link to="">{product.name}</Link>
                                </div>
                            </div>
                            <div className="row product-row">
                                <div className="col-5 col-md-12">
                                    <div
                                        className="product-img"
                                        id="product-img"
                                    >
                                        {product.images &&
                                            product.images.map((image, i) => (
                                                <img
                                                    src={image.url}
                                                    key={i}
                                                    alt={`${i} Slide`}
                                                />
                                            ))}
                                    </div>
                                    <div className="box_1">
                                        <div className="product-img-list">
                                            <div className="product-img-item">
                                                {/* <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                        /> */}
                                            </div>
                                            <div className="product-img-item">
                                                {/* <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                        /> */}
                                            </div>
                                            <div className="product-img-item">
                                                {/* <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                        /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7 col-md-12">
                                    <div className="product-info">
                                        <h1>{product.name}</h1>
                                        <div className="product-info-detail">
                                            <span className="product-info-detail-title">
                                                Brand:
                                            </span>
                                            <Link
                                                to=""
                                                className="product-info-detail-category"
                                            >
                                                {product.category}
                                            </Link>
                                        </div>
                                        <div className="product-info-detail">
                                            <span className="product-info-detail-title">
                                                Rated:
                                            </span>
                                            <Rate
                                                allowHalf
                                                disabled
                                                defaultValue={product?.ratings}
                                                style={{ padding: '0 10px' }}
                                            />
                                            ({product.numOfReviews} Reviews)
                                        </div>
                                        <p className="product-description">
                                            {product.description}
                                        </p>
                                        <div className="product-info-price">
                                            {Formatter.format(product.price)}
                                        </div>
                                        <div className="product-quantity-wrapper">
                                            <button
                                                className="product-quantity-btn"
                                                onClick={decreaseQuantity}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                readOnly
                                                value={quantity}
                                                className="product-quantity-input"
                                            />
                                            <button
                                                className="product-quantity-btn"
                                                onClick={increaseQuantity}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div
                                            // className="product-info-btn"
                                            style={{ display: 'flex' }}
                                        >
                                            <div
                                                style={{
                                                    padding: '0 10px 0 0'
                                                }}
                                            >
                                                <button className="btn-flat btn-hover">
                                                    Thêm Yêu thích
                                                </button>
                                            </div>
                                            <div
                                                style={{
                                                    padding: '0 0 0 10px'
                                                }}
                                            >
                                                <button
                                                    className="btn-flat btn-hover"
                                                    onClick={addToCartHandler}
                                                >
                                                    Thêm Giỏ Hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box_1">
                                <div className="box-header">description</div>
                                <div className="product-detail-description">
                                    <button
                                        className="btn-flat btn-hover btn-view-description"
                                        id="view-all-description"
                                    >
                                        view all
                                    </button>
                                    <div className="product-detail-description-content">
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-header">review</div>
                                <div>
                                    {product.reviews &&
                                        product.reviews.map((review, i) => (
                                            <div className="user-rate">
                                                <div className="user-info">
                                                    <div className="user-avt">
                                                        <img
                                                            src=""
                                                            key={i}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="user-name">
                                                        <span className="name">
                                                            {review.name}
                                                        </span>
                                                        <span className="rating">
                                                            <Rate
                                                                disabled
                                                                defaultValue={
                                                                    review.rating
                                                                }
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="user-rate-content">
                                                    {review.comment}
                                                </div>
                                            </div>
                                        ))}

                                    <div className="box-1">
                                        <ul className="pagination">
                                            <li>
                                                <Link to="">
                                                    <i className="bx bxs-chevron-left"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">1</Link>
                                            </li>
                                            <li>
                                                <Link to="">2</Link>
                                            </li>
                                            <li>
                                                <Link to="">3</Link>
                                            </li>
                                            <li>
                                                <Link to="">4</Link>
                                            </li>
                                            <li>
                                                <Link to="">5</Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <i className="bx bxs-chevron-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-header">
                                    related products
                                </div>
                                <div
                                    className="row"
                                    id="related-products"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DetailProduct
