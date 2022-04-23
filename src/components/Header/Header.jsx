/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "../Styles/Header.scss"

export const Header = () => {
  return (
    <header className="header">
      <section className="header__section__one">
        <div>
           <a href="/email">sales@wtgspain.com</a>
           <a href="/phone">+34965020784</a>
           <a href="/whatsapp">WhatsApp</a>   
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
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
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </section>

    </header>
  )
}