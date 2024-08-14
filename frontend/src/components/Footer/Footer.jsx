import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero inventore, sint quisquam aspernatur at earum perspiciatis numquam quis repellendus. Dicta nobis facere perferendis quam, obcaecati ab nisi deserunt deleniti. Saepe!
            Error ullam eligendi placeat beatae eos odio necessitatibus temporibus nihil autem laboriosam odit cupiditate, doloribus repudiandae porro repellat. Ipsum saepe quae quam delectus. Nihil ut est, id error tempore maiores.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-456-8888</li>
                <li>contact@foodify.com</li>
             </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Foodify.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer