import React from 'react'
import data from '../../../data/db'
import { Link } from 'react-router-dom'
import video from '../../assets/images/6138108-uhd_3840_2160_25fps.mp4'

const HomeAbout = () => {
  return (
    <section id='about'>
      <div className="overlay">

      </div>
      <video src={video} controls={true} autoPlay={true} muted={true} loop={true}></video>
    </section>
  )
}

export default HomeAbout
