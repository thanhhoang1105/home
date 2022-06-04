import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Formatter from '../../../Components/More/Formatter'

const UserAdmin = () => {
    const dispatch = useDispatch()

    const { listUsers } = useSelector(state => state.getAllUsersAdmin)

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Danh sách tài khoản</h2>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Ảnh</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Quyền</th>
                                    <th>Thời gian tạo</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            {/* Table Data */}
                            <tbody>
                                {listUsers.map((item, index) => (
                                    <tr key={index}>
                                        {item.avatar ? (
                                            <td>
                                                <img
                                                    src={item.avatar.url}
                                                    alt="avatar"
                                                    className="img-fluid"
                                                />
                                            </td>
                                        ) : (
                                            <td>
                                                <img
                                                    src="https://via.placeholder.com/150"
                                                    alt="avatar"
                                                    className="img-fluid"
                                                />
                                            </td>
                                        )}
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            {moment(item.createdAt).format(
                                                'llll'
                                            )}
                                        </td>
                                        <td className="text-end">
                                            <div className="actions">
                                                <Link
                                                    to={`/admin/user/${item._id}`}
                                                    className="text-success"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                    className="text-danger"
                                                    to="#"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserAdmin
