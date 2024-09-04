import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import icon1 from '../assets/images/fb.png'
import icon2 from '../assets/images/ig.png'
import icon3 from '../assets/images/gh.png'
import icon4 from '../assets/images/twtt.png'
import { LuCakeSlice } from "react-icons/lu";

const Navbar = () => {

  let [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="info">
        <div className="text">
          <p>(+263)78 812 3123</p>
          <p>info@gloria.co.zw</p>
        </div>
        <div className="socials">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className={menuOpen ? "nav-links menuActive": "nav-links"}>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to={'/'}>
            <li>Home</li>
          </NavLink>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to={'/about'}>
            <li>About</li>
          </NavLink>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to={'/recipes'}>
            <li>Recipes</li>
          </NavLink>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to={'/contact'} >
            <li>National Foods</li>
          </NavLink>
          <Link onClick={() => setMenuOpen(!menuOpen)} className='contactBtn' to="/contact">Contact Us</Link>
        </ul>
        <LuCakeSlice onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "hamburger hamburgerActive" : "hamburger"} />
      </div>
    </>
  )
}

export default Navbar
