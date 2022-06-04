import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message, Select } from 'antd'

import {
    getAllProductsAdmin,
    deleteProductAdmin
} from '../../../Redux/Actions/ProductActions'

const { Option } = Select

const ProductAdmin = () => {
    const dispatch = useDispatch()

    const { listProducts } = useSelector(state => state.getAllProductsAdmin)

    const { listCategories } = useSelector(state => state.getAllCategoriesAdmin)
    console.log('listCategories', listCategories)

    const { success } = useSelector(state => state.deleteProductAdmin)

    useEffect(() => {
        if (success) {
            message.success('Xóa thành công')
            dispatch(getAllProductsAdmin())
            dispatch({ type: 'DELETE_PRODUCT_RESET' })
        }
    }, [success, dispatch])

    const handleDelete = id => {
        dispatch(deleteProductAdmin(id))
    }
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Danh sách sản phẩm</h2>
                <div>
                    <Link to={`/admin/product/new`} className="btn btn-primary">
                        Thêm mới sản phẩm
                    </Link>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white ">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto ">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="form-control p-2"
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <Select
                                defaultValue="Chọn danh mục"
                                style={{
                                    width: '100%'
                                }}
                                // onChange={e => setCategory(e)}
                            >
                                {listCategories.map((item, index) => (
                                    <Option key={index} value={item.name}>
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <Select
                                defaultValue="Lọc"
                                style={{
                                    width: '100%'
                                }}
                                // onChange={e => setCategory(e)}
                            >
                                <Option>Latest added</Option>
                                <Option>Cheap first</Option>
                                <Option>Most viewed</Option>
                            </Select>
                        </div>
                    </div>
                </header>

                <div className="card-body">
                    <div className="row">
                        {/* Products */}
                        {listProducts.map((product, index) => (
                            <div
                                className="col-md-6 col-sm-6 col-lg-3 mb-4"
                                key={index}
                            >
                                <div className="card card-product-grid shadow-sm">
                                    {product.images.map((img, index) => (
                                        <Link
                                            to=""
                                            className="img-wrap"
                                            key={index}
                                        >
                                            <img src={img.url} alt="Product" />
                                        </Link>
                                    ))}

                                    <div className="info-wrap">
                                        <Link
                                            to="#"
                                            className="title text-truncate"
                                        >
                                            {product.name}
                                        </Link>
                                        <div className="price mb-2">
                                            ${product.price}
                                        </div>
                                        <div className="row">
                                            <Link
                                                to={`/admin/product/${product._id}`}
                                                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                                            >
                                                <i className="fas fa-pen"></i>
                                            </Link>
                                            <Link
                                                to=""
                                                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                                                onClick={() =>
                                                    handleDelete(product._id)
                                                }
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <nav
                        className="float-end mt-4"
                        aria-label="Page navigation"
                    >
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">
                                    Previous
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default ProductAdmin
