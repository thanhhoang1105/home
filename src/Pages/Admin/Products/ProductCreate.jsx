import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message, Select, Input } from 'antd'

import { createProductAdmin } from '../../../Redux/Actions/ProductActions'
import Loading from '../../../Components/More/Loader'
import './productCreate.css'

const { Option } = Select
const { TextArea } = Input

const ProductCreate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { listCategories } = useSelector(state => state.getAllCategoriesAdmin)

    const { success, isLoading } = useSelector(
        state => state.createProductAdmin
    )

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')
    const [images, setImages] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1654019741/shoe/24-248253_user-profile-default-image-png-clipart-png-download_fwluw2.png'
    )

    useEffect(() => {
        if (success) {
            message.success('Thêm mới thành công')
            // navigate('/admin/products')
            window.location.href = '/admin/products'
        }
    }, [success, navigate])

    const updateProfileDataChange = e => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImages(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const submitHandler = e => {
        e.preventDefault()

        const createProductInfo = {
            name,
            description,
            price,
            stock,
            category,
            images
        }

        dispatch(createProductAdmin(createProductInfo))
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section
                    className="content-main"
                    style={{ maxWidth: '1200px' }}
                >
                    <form onSubmit={submitHandler}>
                        <div className="content-header">
                            <h2 className="content-title">Thêm mới sản phẩm</h2>
                        </div>

                        <div className="">
                            <div className="">
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="product_title"
                                                className="form-label"
                                            >
                                                Tên sản phẩm
                                            </label>
                                            <Input
                                                defaultValue={name}
                                                placeholder="Nhập tên sản phẩm"
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <div className="Product-content">
                                                <div className="Product-input">
                                                    <label
                                                        htmlFor="product_price"
                                                        className="form-label"
                                                    >
                                                        Giá sản phẩm
                                                    </label>
                                                    <Input
                                                        defaultValue={price}
                                                        placeholder="Nhập giá sản phẩm"
                                                        onChange={e =>
                                                            setPrice(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="Product-input">
                                                    <label
                                                        htmlFor="product_price"
                                                        className="form-label"
                                                    >
                                                        Số lượng sản phẩm
                                                    </label>
                                                    <Input
                                                        defaultValue={stock}
                                                        placeholder="Nhập số lượng sản phẩm"
                                                        onChange={e =>
                                                            setStock(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="Product-input">
                                                    <label
                                                        htmlFor="product_price"
                                                        className="form-label"
                                                    >
                                                        Danh mục
                                                    </label>
                                                    <Select
                                                        defaultValue="Chọn danh mục"
                                                        style={{
                                                            width: '100%'
                                                        }}
                                                        onChange={e =>
                                                            setCategory(e)
                                                        }
                                                    >
                                                        {listCategories.map(
                                                            (item, index) => (
                                                                <Option
                                                                    key={index}
                                                                    value={
                                                                        item.name
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </Option>
                                                            )
                                                        )}
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                                Mô tả sản phẩm
                                            </label>
                                            <TextArea
                                                rows={4}
                                                placeholder="Nhập mô tả sản phẩm"
                                                defaultValue={description}
                                                onChange={e =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="avatar">
                                            <div className="avatar-preview">
                                                <img
                                                    src={images}
                                                    alt="Avatar Preview"
                                                />
                                            </div>
                                            <div className="upload-preview">
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    accept="image/*"
                                                    style={{
                                                        width: '100%',
                                                        fontSize: '15px'
                                                    }}
                                                    onChange={
                                                        updateProfileDataChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Lưu
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            )}
        </>
    )
}

export default ProductCreate
