import React from 'react'
import data from '../../../data/db'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const HomeRecipes = () => {
  return (
    <section id='recipes'>
      <h2>Explore Our <br /> Recipes</h2>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper wrapper">
        {data && data.recCards.map(card => {
          return (
            <SwiperSlide className="card">
              <div className="img">
                <img src={card.icon} alt="" />
              </div>
              <div className="textBox">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link>{card.link}</Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default HomeRecipes
