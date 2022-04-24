/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {FaMapMarkerAlt, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import {AiFillFacebook,AiFillLinkedin, AiFillYoutube,AiFillInstagram} from "react-icons/ai"

import "../Styles/Footer.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section__one">
        <div className="footer__section__one__box__logo">
          <img className="footer__logo" src={require("../../img/logo.png")} alt="Footer Logo" />
          <p> <span>THE BEST</span> REAL ESTATE IN SPAIN</p>
        </div>
      </section>
      <section className="footer__section__two__menu">
         <div>
          <div className="footer__menu">
            <a href="#">All cities</a>
            <a href="#">Blog</a>
            <a href="#">Video</a>
            <a href="#">Contacts</a>
          </div>
        </div>
       </section> 
      <section className="footer__section__three">
        <div className="footer__section__two__contact">
          <h5>Contacts:</h5>
          <ul>
            <li><a href="#"><span><FaMobileAlt/></span>+34(965) 020-784</a></li>
            <li><a href="#"><span><FaEnvelope/></span>sales@wtgspain.com</a></li>
            <li><a href="#" className> <span><FaMapMarkerAlt/></span>Centro Comercial Playa Flamenca C/Niagara,63 Local 60/PB,first floor, 03189 - Orihuela Costa(Alicante),Spain</a></li>
          </ul>
          <p>Reating 4.9/5 ##### 820 votes</p>
        </div>
        <div className="footer__section__two__type">
          <h5>Type:</h5>
          <ul>
            <li><a href="#">Appartaments</a></li>
            <li><a href="#">Penthouses</a></li>
            <li> <a href="#">Townhouses</a></li>
            <li> <a href="#">Commercial</a></li>
            <li> <a href="#">Bungalows</a></li>
            <li> <a href="#">Duplexes</a></li>
            <li> <a href="#">Villas</a></li>
          </ul>
        </div>
        <div className="footer__section__two__sotial__medias">
          <h5>Follow us:</h5>
          <div className="footer__box__sotial__media">
            <a href="#"><span><AiFillFacebook/></span>Facebook</a>
            <a href="#"><span><AiFillLinkedin/></span>Linkedin</a>
            <a href="#"><span><AiFillYoutube/></span>YouTube</a>
            <a href="#"><span><AiFillInstagram/></span>Instagram</a>
          </div>
          <div>
            <form action="">
              <p>Subscribe to new objects?</p>
              <input type="text" placeholder="Your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <section className="footer__section__bottom">
        <p>The company "WTG Spain" specializes in the investment and sale of real estate in Spain, and the provision of legal and consulting services.
          All rights reserved."WTG Spain" - The Best Real Estate in Spain.© Copyright 2007-2020.
        </p>
      </section>
    </footer>
  )
}
