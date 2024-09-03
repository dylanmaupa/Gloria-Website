import React from 'react'
// import './homepage.scss'
import HomeHero from '../components/Home/HomeHero'
import HomeAbout from '../components/Home/HomeAbout'
import HomeRecipes from '../components/Home/HomeRecipes'
import ContactForm from '../components/Home/ContactForm'

const Homepage = () => {
    return (
        <>
           <HomeHero/> 
           <HomeAbout/>
           <HomeRecipes/>
           <ContactForm/>
        </>
    )
}

export default Homepage
