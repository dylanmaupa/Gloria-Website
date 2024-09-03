import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
          <p>(414) 857 - 0107</p>
          <p>yummy@bistrobliss</p>
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
          <Link to={'/'}><li>Home</li></Link>
          <li>About</li>
          <li>Menu</li>
          <li>Pages</li>
          <li>Contact</li>
          <Link>Book A Table</Link>
        </ul>
        <LuCakeSlice onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "hamburger hamburgerActive" : "hamburger"} />
      </div>
    </>
  )
}

export default Navbar
