import React from 'react'
import data from '../../../data/db'
import { Link } from 'react-router-dom'
import video from '../../assets/images/y2mate.com - Super Slow Motion Particles  Free Stock Footage_1080pFHR.mp4'

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
