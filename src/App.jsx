import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Recipes from './pages/Recipes'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/recipes' element={<Recipes/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
