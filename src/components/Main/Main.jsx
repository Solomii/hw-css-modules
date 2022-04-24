/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

import {FaPhoneAlt, FaEnvelope, FaWhatsapp, FaViber, FaFacebookMessenger, FaTelegramPlane} from "react-icons/fa"

import "../Styles/Main.scss"

export const Main = () => {
  return (
    <main className="main">
      <section className="main__section__one">
        <div className="main__section__one__title">
           <div>
             <img src={require("../../img/Rectangle 144.png")} alt="Line" />
             <h3>WTG SPAIN</h3>
            </div>
          <h2>Do you need <span>some help</span>?</h2>
          <p>Contact us right now and our team will do eveereything to help you</p>
          <button>Contact us</button>
        </div>
        <div className="main__section__one__picture">
          <img src={require("../../img/contact svg.jpg")} alt="woman" />
        </div>
      </section>
      <section className="main__section__two">
        <h4>We are always in touch and will be happy to resolve any of your questions</h4>
        <div>
          <div className="main__box__contact__map">
          <div className="main__box__map"> 
            <img src={require("../../img/Screen Shot 2020-03-05 at 11.53 1.jpg")} alt="map" />
          </div>
          <div className="main__box__contact">
            <h3>Contact us</h3>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="E-mail" />
              <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
              <button>Send</button>
            </form>
            <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </section>
      <section className="main__section__two">
        <hr></hr>
        <div className="main__contact__box__one">
          <div className="main__contact__phone">
            <h3>Phone</h3>
            <a href="#"><span><FaPhoneAlt/></span>+34965020784</a>
          </div>
          <div className="main__contact__office__address">
            <h3>Office in Spain</h3>
            <p>Centro Comercial Playa Flamenca C/Niagara,63 Local 60/PB,first floor, 03189 - Orihuela Costa(Alicante),Spain</p>
          </div>
          <div className="main__contact__office__email"> 
            <h3>E-mail</h3>
            <a href="#"><span><FaEnvelope/></span>sales@wtgspain.com</a>
          </div>
        </div>
        <hr></hr>
        <div className="main__contact__box__two">
          <h5>We are online</h5>
          <div>
            <ul>
              <li><a href="#"><span className="main__contact__watsapp"><FaWhatsapp/></span>WhatsApp</a></li>
              <li><a href="#"><span className="main__contact__viber"><FaViber/></span>Viber</a></li>
              <li><a href="#"><span className="main__contact__messenger"><FaFacebookMessenger/></span>Messenger</a></li>
              <li><a href="#"><span className="main__contact__telegram"><FaTelegramPlane/></span>Telegram</a></li>
            </ul>
          </div>
        </div>  
      </section>
    </main>
  )
}