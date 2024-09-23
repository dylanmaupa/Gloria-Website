import React from 'react'
import icon1 from '../assets/images/fb.png'
import icon2 from '../assets/images/ig.png'
import icon3 from '../assets/images/gh.png'
import icon4 from '../assets/images/twtt.png'
import foot1 from '../assets/images/foot1.png'
import foot2 from '../assets/images/foot2.png'
import foot3 from '../assets/images/foot3.png'
import foot4 from '../assets/images/foot4.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <div className="logo">
                    <h1>Gloria</h1>
                    <p>It rises, you shine!.</p>
                    <div className="socials">
                        <Link to={''}><img src={icon1} alt="" /></Link>
                        <Link to={''}><img src={icon2} alt="" /></Link>
                        {/* <Link to={''}><img src={icon3} alt="" /></Link> */}
                        <Link to={''}><img src={icon4} alt="" /></Link>
                    </div>
                </div>
                <div className="footer-cols">
                    <h3>Pages</h3>
                    <ul>
                        <Link onClick={() => window.scrollTo(0, 0)} to={'/'}><li>Home</li></Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to={'/about'}><li>About</li></Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to={'/recipes'}><li>Recipes</li></Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to={'/contact'}><li>National Foods</li></Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to={'/contact'}><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="footer-cols">
                    <h3>Utility Pages</h3>
                    <li>Start Here</li>
                    <li>Styleguide</li>
                    <li>Password Protected</li>
                    <li>404 Not Found</li>
                    <li>Licenses</li>
                </div>
                <div className="footer-cols">
                    <h3>Follow Us On Instagram</h3>
                    <div className="imgBox">
                        <img src={foot1} alt="" />
                        <img src={foot2} alt="" />
                        <img src={foot3} alt="" />
                        <img src={foot4} alt="" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2024 Jericho Adertising. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
