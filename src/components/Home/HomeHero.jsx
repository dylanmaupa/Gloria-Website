import React from 'react'
import Button from '../Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeHero = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}>
            <SwiperSlide id="hero">
                <div className="textBox">
                    <h1>The Number <br /> One Flour for <br /> over 100 years!</h1>
                    <p>It rises, you shine!</p>
                </div>
                <div className="btns">
                    <Button path={''} title={"Explore Our Flours"} />
                    <Button path={'/recipes'} title={'Recipes'} />
                </div>
            </SwiperSlide>
            <SwiperSlide id="hero" className='home2'>
                <div className="textBox">
                    <h1>The Number <br /> One Flour for <br /> over 100 years!</h1>
                    <p>It rises, you shine!</p>
                </div>
                <div className="btns">
                    <Button path={''} title={"Let's Bake"} />
                    <Button path={'/contact'} title={'Contact Us'} />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeHero
