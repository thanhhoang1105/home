import React from 'react'
import { useSelector } from 'react-redux'

import LatestOrderAdmin from '../../../Components/Admin/DashboardCpn/LatestOrder/LatestOrderAdmin'
import TopTotalAdmin from '../../../Components/Admin/DashboardCpn/TopTotal/TopTotalAdmin'

import './style.css'

const DashboardAdmin = () => {
    const { listOrders, isLoading, error } = useSelector(
        state => state.getAllOrdersAdmin
    )
    const { listProducts } = useSelector(state => state.getAllProductsAdmin)

    // console.log('listProducts', listProducts)
    // console.log('listOrdersOUT', listOrders)
    return (
        <>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title"> Dashboard </h2>
                </div>
                <TopTotalAdmin orders={listOrders} products={listProducts} />

                <div className="card mb-4 shadow-sm">
                    <LatestOrderAdmin
                        listOrders={listOrders}
                        loading={isLoading}
                        error={error}
                    />
                </div>
            </section>
        </>
    )
}

export default DashboardAdmin
