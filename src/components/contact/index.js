import React from 'react';
import { NavbarAuth, NavbarNonAuth } from '../navbar/Navbar2';
import { AuthUserContext } from '../Session';
import Footer from '../footer/Footer';

import './contact.css';


const Contact = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <ContactAuth /> : <ContactNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const ContactAuth = () => (
  <div>
    <NavbarAuth />
    <section id="main-contact">
      <div className="contact-container">
        <article id="main-col">
          <h1 className="page-title">Contact</h1>
          <p className="contact-info"> insert stuff here </p>
        </article>
        <aside id="contact-sidebar">
          <div className="dark-side">
            <h4>Where else can you reach me?</h4>
            <p>More stuff here</p>
          </div>
        </aside>
      </div>
    </section>
    <Footer />
  </div>
);

const ContactNonAuth = () => (
  <div>
    <NavbarNonAuth />
    <section id="main-contact">
      <div className="contact-container">
        <article id="main-col">
          <h1 className="page-title">Contact</h1>
          <p className="contact-info"> insert stuff here </p>
        </article>
        <aside id="contact-sidebar">
          <div className="dark-side">
            <h4>Where else can you reach me?</h4>
            <p>More stuff here</p>
          </div>
        </aside>
      </div>
    </section>
    <Footer />
  </div>
)

export default Contact;
