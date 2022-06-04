import React from 'react'
import { Outlet } from 'react-router-dom'

import HeaderAdmin from '../../Components/Admin/HeaderCpn/HeaderAdmin'
import SidebarAdmin from '../../Components/Admin/SidebarCpn/SidebarAdmin'

import './styleAdmin.css'

const LayoutAdmin = () => {
    return (
        <>
            <SidebarAdmin />
            <main className="main-wrap">
                <HeaderAdmin />
                <Outlet />
            </main>
        </>
    )
}

export default LayoutAdmin
