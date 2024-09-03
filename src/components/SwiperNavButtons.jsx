import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const SwiperNavButtons = () => {

    const swiper = useSwiper()

  return (
    <div className='swiper-nav-buttons'>
      <FaArrowCircleLeft className='left arrow' onClick={() => swiper.slidePrev()} />
      <FaArrowCircleRight className='right arrow' onClick={() => swiper.slideNext()} />
    </div>
  )
}

export default SwiperNavButtons
