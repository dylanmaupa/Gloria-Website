import React from 'react'
import Button from '../Button'
import aboutGloria from '../../assets/images/aboutGloria.png'
import icon1 from '../../assets/images/1.png'
import icon2 from '../../assets/images/2.png'
import icon3 from '../../assets/images/3.png'
import icon4 from '../../assets/images/4.png'

const AboutHero = () => {
  return (
    <section id='about-page'>
      <div className="textBox">
        <h2>The Number One Flour for over 100 years!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.</p>
        <Button path={'/contact'} title={'Contact Us'} className="aboutBtn" />
        <div className="socials">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
        </div>
      </div>
      <div className="imgBox">
        <img src={aboutGloria} alt="about_gloria_img" />
      </div>
    </section>
  )
}

export default AboutHero
