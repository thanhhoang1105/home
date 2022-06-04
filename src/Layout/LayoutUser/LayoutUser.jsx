import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../Components/User/HeaderCpn/Header'
import Footer from '../../Components/User/FooterCpn/Footer'

const LayoutUser = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutUser
