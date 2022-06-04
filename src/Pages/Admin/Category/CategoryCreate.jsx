import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message, Input } from 'antd'

import { createCategoryAdmin } from '../../../Redux/Actions/CategoryActions'

import Loading from '../../../Components/More/Loader'

function convertToSlug(Text) {
    return Text.toLowerCase()
        .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ')
        .replace(/^\s+|\s+$/gm, '')
        .replace(/\s+/g, '-')
}

const { TextArea } = Input

const CategoryCreate = () => {
    const dispatch = useDispatch()

    const [categoryName, setCategoryName] = useState('')
    const [categoryDescription, setCategoryDescription] = useState('')

    const { success, isLoading } = useSelector(
        state => state.createCategoryAdmin
    )

    useEffect(() => {
        if (success) {
            message.success('Thêm danh mục thành công')
            setCategoryName('')
            setCategoryDescription('')
        }
    }, [success])

    const handleSubmitCreateCategory = e => {
        e.preventDefault()
        const categoryInfo = {
            name: categoryName,
            slug: convertToSlug(categoryName),
            description: categoryDescription
        }
        dispatch(createCategoryAdmin(categoryInfo))
    }
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="col-md-12 col-lg-4">
                    <form onSubmit={handleSubmitCreateCategory}>
                        <div className="mb-4">
                            <label
                                htmlFor="category_name"
                                className="form-label"
                            >
                                Tên danh mục
                            </label>
                            <Input
                                placeholder="Nhập tên sản phẩm"
                                onChange={e => setCategoryName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="category_slug"
                                className="form-label"
                            >
                                Slug
                            </label>
                            <Input
                                placeholder="Nhập tên sản phẩm"
                                disabled
                                value={convertToSlug(categoryName)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Mô tả</label>
                            <TextArea
                                rows={4}
                                placeholder="Nhập mô tả sản phẩm"
                                onChange={e =>
                                    setCategoryDescription(e.target.value)
                                }
                            />
                        </div>

                        <div className="d-grid">
                            <button
                                className="btn btn-primary py-3"
                                type="submit"
                            >
                                Lưu
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default CategoryCreate
