import React from 'react'
import RecipesHero from '../components/Recipes/RecipesHero'
import ContactMap from '../components/ContactMap'
import ContactPageForm from '../components/ContactPageForm'

const Contactpage = () => {
  return (
    <>
      <RecipesHero title={'Contact Us'} />
      <ContactMap/>
      <ContactPageForm/>
    </>
  )
}

export default Contactpage
