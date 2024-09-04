import React from 'react'
import RecipesHero from '../components/Recipes/RecipesHero'
import ContactForm from '../components/Home/ContactForm'
import AboutHero from '../components/About/AboutHero'

const About = () => {
  return (
    <>
     <RecipesHero title={'About Gloria'} /> 
     <AboutHero/>
     <ContactForm/>
    </>
  )
}

export default About
