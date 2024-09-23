import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Contactpage from './pages/Contactpage'
import ChocolateCakeRecipe from './components/Recipes/ChocolateCakeRecipe'
import FAQs from './pages/FAQs'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/recipes' element={<Recipes/>} />
          <Route exact path='/contact' element={<Contactpage/>} />
          <Route exact path='/cake-recipe' element={<ChocolateCakeRecipe/>} />
          <Route exact path='/faqs' element={<FAQs/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
