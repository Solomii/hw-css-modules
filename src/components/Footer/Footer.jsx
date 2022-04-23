/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "../Styles/Footer.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section__one">
        <div className="footer__section__one__box__logo">
          <img src={require("../../img/logo_footer.jpg")} alt="Footer Logo" />
          <p> <span>THE BEST</span> REAL ESTATE IN SPAIN</p>
        </div>
         <div className="footer__menu">
          <a href="#">All cities</a>
          <a href="#">Blog</a>
          <a href="#">Video</a>
          <a href="#">Contacts</a>
        </div>
      </section>
      <section className="footer__section__two">
        <div className="footer__section__two__contact">
           <h5>Contacts:</h5>
            <ul>
              <li><a href="#">+34(965) 020-784</a></li>
              <li><a href="#">sales@wtgspain.com</a></li>
              <li><a href="#"className>Centro Comercial Playa Flamenca C/Niagara,63 Local 60/PB,first floor, 03189 - Orihuela Costa(Alicante),Spain</a></li>
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
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
              <a href="#">YouTube</a>
              <a href="#">Instagram</a>
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
