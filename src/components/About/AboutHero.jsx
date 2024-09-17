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
        <p>With a rich history dating back to 1920, Gloria Flour has been crafted using premium grains sourced from the world’s leading millers. This unwavering commitment ensures that Gloria Flour consistently delivers dependable and trustworthy results. What sets Gloria Flour apart is its unique combination of affordable pricing and uncompromising quality, giving it a distinct competitive advantage.</p>
        <p>The wide-ranging Gloria Flour collection stands as the preferred choice for Zimbabwean consumers, offering a diverse array of expertly crafted flour variants. Designed to meet the diverse requirements of the baking and cooking market, the Gloria range includes an assortment of variants: Cake Flour (Blue), Cake-Self Raising Flour (Grey), Self-Raising Flour (Yellow), All-Purpose Flour (Pink), and High Fibre Wheat Flour (Brown). Whether you’re baking bread, creating pasta, making cakes, or crafting pastries, Gloria Flour caters to every baking and culinary need with precision and excellence.</p>
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
