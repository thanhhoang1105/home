import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Image, Input, message } from 'antd'
// import ImgCrop from 'antd-img-crop'
import {
    UserOutlined,
    MailOutlined,
    UnlockOutlined,
    LockOutlined,
    HeatMapOutlined,
    PhoneOutlined
    // InboxOutlined
} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'

import {
    updateProfile,
    updateAvatar,
    updatePassword,
    loadUser
} from '../../../Redux/Actions/UserActions'
import { USER_UPDATE_PROFILE_RESET } from '../../../Redux/Constants/UserConstants'

import Loading from '../../../Components/More/Loader'
import './style.scss'

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.getUser)
    const { error, isUpdated, loading } = useSelector(
        state => state.updateProfile
    )

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    // console.log('profile', user.name)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [avatar, setAvatar] = useState()
    const [avatarPreview, setAvatarPreview] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1653122947/shoe/24-248253_user-profile-default-image-png-clipart-png-download_vkwpfv.png'
    )

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // useEffect(() => {
    //     if (isAuthenticated === false) {
    //         navigate('/auth')
    //     }
    // }, [navigate, isAuthenticated])

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setAddress(user.address)
            setPhoneNo(user.phoneNo)
            setAvatar(user.avatar)
            setAvatarPreview(user?.avatar?.url)
        }

        if (isUpdated) {
            message.success('Cập nhật thành công')
            dispatch(loadUser())
            navigate('/profile')

            dispatch({
                type: USER_UPDATE_PROFILE_RESET
            })
            setOpen1(false)
            setOpen2(false)
            setOpen3(false)
        }

        if (error) {
            message.error(error)
        }
    }, [dispatch, error, isUpdated, navigate, user])

    const handleSubmitProfile = e => {
        e.preventDefault()
        const updateProfileInfo = {
            name,
            email,
            address,
            phoneNo
        }
        dispatch(updateProfile(updateProfileInfo))
        // console.log('avatarIN', avatar)
    }

    const handleSubmitAvatar = e => {
        e.preventDefault()
        const updateProfileInfo = {
            avatar
        }
        dispatch(updateAvatar(updateProfileInfo))
        // console.log('avatarIN', avatar)
    }

    // console.log('avatarOUT', avatar)

    const updateProfileDataChange = e => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    // console.log('avatarrrrrrr', JSON.stringify(avatarPreview))

    // console.log('user', updateProfileInfo)

    const updatePasswordInfo = {
        currentPassword,
        newPassword,
        confirmPassword
    }

    const submitHandlerChangePassword = e => {
        e.preventDefault()
        dispatch(updatePassword(updatePasswordInfo))
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="profile container">
                    <aside className="profile__sidebar">
                        <div className="profile__avatar">
                            <Avatar
                                size={150}
                                src={
                                    <Image
                                        src={user?.avatar?.url}
                                        style={{
                                            width: 150,
                                            height: 'auto'
                                        }}
                                    />
                                }
                            />
                        </div>
                        <h2 className="profile__username">{user?.name}</h2>
                        <p className="profile__email">{user?.email}</p>
                        <div className="profile__box__btn">
                            <button
                                onClick={() => setOpen3(true)}
                                type="buttons"
                                className="btn btn-primary w-60"
                            >
                                Cập Nhật Avatar
                            </button>
                        </div>
                    </aside>
                    <main className="profile__main">
                        <div>
                            <div className="profile__box">
                                <h1>Thông tin cá nhân</h1>
                                <ul>
                                    <li>
                                        <span>Họ và tên:</span>{' '}
                                        <span>{user?.name}</span>
                                    </li>
                                    <li>
                                        <span>Email:</span>{' '}
                                        <span>{user?.email}</span>
                                    </li>
                                    <li>
                                        <span>Địa chỉ:</span>{' '}
                                        <span>{user?.address}</span>
                                    </li>
                                    <li>
                                        <span>Số điện thoại:</span>{' '}
                                        <span>{user?.phoneNo}</span>
                                    </li>
                                </ul>
                                <div className="profile__box__button">
                                    <div className="profile__box__btn">
                                        <button
                                            onClick={() => setOpen1(true)}
                                            type="buttons"
                                            className="btn btn-primary w-60"
                                        >
                                            Cập Nhật Thông Tin
                                        </button>
                                    </div>
                                    <div className="profile__box__btn">
                                        <button
                                            onClick={() => setOpen2(true)}
                                            type="buttons"
                                            className="btn btn-primary w-60"
                                        >
                                            Cập Nhật Mật Khẩu
                                        </button>
                                    </div>

                                    <Link
                                        to="/orders"
                                        style={{
                                            display: 'block',
                                            padding: '0 10px'
                                        }}
                                    >
                                        <button
                                            type="buttons"
                                            className="btn btn-primary w-60"
                                        >
                                            Xem Đơn Hàng
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                    {open1 && (
                        <>
                            <div className="details-modal-overlay"></div>
                            <div className="details-modal">
                                <div className="details-modal-title">
                                    <h1>Cập nhật thông tin cá nhân</h1>
                                    <button
                                        type="button"
                                        className="details-modal-close"
                                        onClick={() => setOpen1(false)}
                                    >
                                        X
                                    </button>
                                </div>

                                <div className="details-modal-content">
                                    <form onSubmit={handleSubmitProfile}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Input
                                                prefix={<MailOutlined />}
                                                defaultValue={email}
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Tên</label>
                                            <Input
                                                prefix={<UserOutlined />}
                                                defaultValue={name}
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Địa Chỉ
                                            </label>
                                            <Input
                                                prefix={<HeatMapOutlined />}
                                                defaultValue={address}
                                                onChange={e =>
                                                    setAddress(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Điện Thoại
                                            </label>
                                            <Input
                                                prefix={<PhoneOutlined />}
                                                defaultValue={phoneNo}
                                                onChange={e =>
                                                    setPhoneNo(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="button-group">
                                            <button
                                                onClick={() => setOpen1(false)}
                                                className="btn-outline"
                                                type="button"
                                            >
                                                Đóng
                                            </button>
                                            <button
                                                className="btn-primary"
                                                type="submit"
                                            >
                                                Lưu thay đổi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                    {open2 && (
                        <>
                            <div className="details-modal-overlay"></div>
                            <div className="details-modal">
                                <div className="details-modal-title">
                                    <h1>Cập nhật mật khẩu</h1>
                                    <button
                                        type="button"
                                        className="details-modal-close"
                                        onClick={() => setOpen2(false)}
                                    >
                                        X
                                    </button>
                                </div>

                                <div className="details-modal-content">
                                    <form
                                        onSubmit={submitHandlerChangePassword}
                                    >
                                        <div className="form-group">
                                            <label htmlFor="currentPassword">
                                                Current Password
                                            </label>
                                            <Input
                                                prefix={<UnlockOutlined />}
                                                defaultValue={currentPassword}
                                                onChange={e =>
                                                    setCurrentPassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">
                                                password
                                            </label>
                                            <Input
                                                prefix={<UnlockOutlined />}
                                                defaultValue={newPassword}
                                                onChange={e =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmed_password">
                                                Confirmed password
                                            </label>
                                            <Input
                                                prefix={<LockOutlined />}
                                                defaultValue={confirmPassword}
                                                onChange={e =>
                                                    setConfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="button-group">
                                            <button
                                                onClick={() => setOpen2(false)}
                                                className="btn-outline"
                                                type="button"
                                            >
                                                Đóng
                                            </button>
                                            <button
                                                className="btn-primary"
                                                type="submit"
                                            >
                                                Lưu thay đổi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                    {open3 && (
                        <>
                            <div className="details-modal-overlay"></div>
                            <div className="details-modal">
                                <div className="details-modal-title">
                                    <h1>Cập nhật Avatar</h1>
                                    <button
                                        type="button"
                                        className="details-modal-close"
                                        onClick={() => setOpen3(false)}
                                    >
                                        X
                                    </button>
                                </div>

                                <div className="details-modal-content">
                                    <form onSubmit={handleSubmitAvatar}>
                                        <div className="form-group">
                                            <div className="updateProfileImage">
                                                <div className="avatar-preview">
                                                    <img
                                                        src={avatarPreview}
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
                                        </div>

                                        {/* <ImgCrop rotate>
                                        <Upload
                                            action="https://nt-store.herokuapp.com/api/v1/me/update/profile"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onChange={onChange}
                                            onPreview={onPreview}
                                        >
                                            {fileList.length < 1.5 &&
                                                '+ Upload'}
                                        </Upload>
                                    </ImgCrop> */}
                                        <div className="button-group">
                                            <button
                                                onClick={() => setOpen3(false)}
                                                className="btn-outline"
                                                type="button"
                                            >
                                                Đóng
                                            </button>
                                            <button
                                                className="btn-primary"
                                                type="submit"
                                            >
                                                Lưu thay đổi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Profile
