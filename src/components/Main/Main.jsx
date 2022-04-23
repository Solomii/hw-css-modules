/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

export const Main = () => {
  return (
    <main>
      <section>
        <div>
          <h3>WTG SPAIN</h3>
          <h2>Do you need some help?</h2>
          <p>Contact us right now and our team will do eveereything to help you</p>
          <button>Contact us</button>
        </div>
        <div>
          <img src={require("../../img/contact svg.jpg")} alt="woman" />
        </div>
      </section>
      <section>
        <p>We are always in touch and will be happy to resolve any of your questions</p>
        <div>
          <div>
            <img src={require("../../img/Screen Shot 2020-03-05 at 11.53 1.jpg")} alt="map" />
          </div>
          <div>
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
      </section>
      <section>
        <div>
          <div>
            <h3>Phone</h3>
            <a href="#">+34965020784</a>
          </div>
          <div>
            <h3>Office in Spain</h3>
            <p>Centro Comercial Playa Flamenca C/Niagara,63 Local 60/PB,first floor, 03189 - Orihuela Costa(Alicante),Spain</p>
          </div>
          <div>
            <h3>E-mail</h3>
            <a href="#">sales@wtgspain.com</a>
          </div>
        </div>
        <div>
          <h5>We are online</h5>
          <div>
            <ul>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Viber</a></li>
              <li><a href="#">Messenger</a></li>
              <li><a href="#">Telegram</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}