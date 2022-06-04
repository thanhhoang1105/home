import React from 'react'
import CategoryCreate from './CategoryCreate'
import CategoryUpdate from './CategoryUpdate'

const CategoryAdmin = () => {
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Danh Mục</h2>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <CategoryCreate />
                        <CategoryUpdate />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryAdmin
