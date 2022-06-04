import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.scss'

import { Pagination } from 'swiper'

import slide_1 from '../../../Assets/Images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
import slide_2 from '../../../Assets/Images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png'
import slide_3 from '../../../Assets/Images/JBL_JR 310BT_Product Image_Hero_Skyblue.png'
import slide_4 from '../../../Assets/Images/JBL_QUANTUM ONE_Product Image_Angle.png'
const Slider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
                style={{ paddingTop: '50px' }}
            >
                <SwiperSlide className="swiper__item">
                    <div className="swiper__content">
                        <span>Nike sport shoes</span>
                        <h2>Nike metcon shoes</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod minus illum autem sit maxime, fugiat
                            soluta omnis, blanditiis magnam quam obcaecati
                            dolorum modi ipsum nesciunt est vero dignissimos
                            dicta recusandae?
                        </p>
                    </div>
                    <div className="swiper__image">
                        <img src={slide_1} alt="slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper__item">
                    <div className="swiper__content">
                        <div className="swiper__content">
                            <span>Nike sport shoes</span>
                            <h2>Nike metcon shoes</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod minus illum autem sit
                                maxime, fugiat soluta omnis, blanditiis magnam
                                quam obcaecati dolorum modi ipsum nesciunt est
                                vero dignissimos dicta recusandae?
                            </p>
                        </div>
                    </div>
                    <div className="swiper__image">
                        <img src={slide_2} alt="slide 2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper__item">
                    <div className="swiper__content">
                        <div className="swiper__content">
                            <span>Nike sport shoes</span>
                            <h2>Nike metcon shoes</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod minus illum autem sit
                                maxime, fugiat soluta omnis, blanditiis magnam
                                quam obcaecati dolorum modi ipsum nesciunt est
                                vero dignissimos dicta recusandae?
                            </p>
                        </div>
                    </div>
                    <div className="swiper__image">
                        <img src={slide_3} alt="slide 3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper__item">
                    <div className="swiper__content">
                        <div className="swiper__content">
                            <span>Nike sport shoes</span>
                            <h2>Nike metcon shoes</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod minus illum autem sit
                                maxime, fugiat soluta omnis, blanditiis magnam
                                quam obcaecati dolorum modi ipsum nesciunt est
                                vero dignissimos dicta recusandae?
                            </p>
                        </div>
                    </div>
                    <div className="swiper__image">
                        <img src={slide_4} alt="slide 4" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider
