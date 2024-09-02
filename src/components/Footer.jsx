import React from 'react'
import icon1 from '../assets/images/fb.png'
import icon2 from '../assets/images/ig.png'
import icon3 from '../assets/images/gh.png'
import icon4 from '../assets/images/twtt.png'
import foot1 from '../assets/images/foot1.png'
import foot2 from '../assets/images/foot2.png'
import foot3 from '../assets/images/foot3.png'
import foot4 from '../assets/images/foot4.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <div className="logo">
                    <h1>Gloria</h1>
                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                    <div className="socials">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                </div>
                <div className="footer-cols">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Pages</li>
                        <li>Contact</li>
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
