/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Header = () => {
  return (
    <header>
      <section>
        <div>
          <ul>
           <li><a href="#">sales@wtgspain.com</a></li>
           <li><a href="#">+34965020784</a></li>
           <li><a href="#">+34965020784</a></li>   
        </ul>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <div>
          <img src={require("../../img/logo_header.png")} alt="Logo" />
        </div>
        <div>
          <nav>
            <ul>
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