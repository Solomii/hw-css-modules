/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {FaPhoneAlt, FaEnvelope,FaWhatsapp, FaHeart} from "react-icons/fa"

import "../Styles/Header.scss"

export const Header = () => {
  return (
    <header className="header">
      <section className="header__section__one">
        <div className="header__section__one__contact">
           <a href="/email"><span><FaEnvelope/></span>sales@wtgspain.com</a>
           <a href="/phone"><span><FaPhoneAlt/></span>+34965020784</a>
           <a href="/whatsapp"><span><FaWhatsapp/></span>WhatsApp</a>   
        </div>
        <div className="header__secton__one__hurt">
           <img src={require("../../img/hurt.png")} alt="Hurt" />
           <img src={require("../../img/united-kingdom.png")} alt="flag" />
        </div>
      </section>
      <section className="header__section__two">
        <div>
          <img src={require("../../img/logo_header.png")} alt="Logo" />
        </div>
        <div className="header__menu">
          <nav className="header__menu__navigation">
            <ul  className="header__menu__navigation__ul">
              <li>Cities</li>
              <li>Properties</li>
              <li>Blog</li>
              <li>Video</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>
        <div>
          <button className="header__menu__button__one">Log in</button>
          <button className="header__menu__button__two">Sign up</button>
        </div>
      </section>
    </header>
  )
}