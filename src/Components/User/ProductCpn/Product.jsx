import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Formatter from '../../More/Formatter'

const { Meta } = Card

const Product = () => {
    const { products } = useSelector(state => state.getProducts)

    return (
        <div
            style={{
                display: 'flex',
                padding: '0px 0px 10px 0px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {products.reverse().map((product, i) => (
                <div style={{ padding: '0px 10px 20px 10px' }} key={i}>
                    <Link to={`/product/${product._id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 260
                            }}
                            cover={
                                <img
                                    alt={product.name}
                                    src={product.images[0].url}
                                    style={{
                                        height: '260px',
                                        objectFit: 'cover'
                                    }}
                                />
                            }
                        >
                            <Meta
                                title={product.name}
                                description={Formatter.format(product.price)}
                            />
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Product
