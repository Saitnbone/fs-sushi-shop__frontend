import React from 'react'
import './contact.css'
import ContactBurgerMenu from './components/ContactBurgerMenu';
import RestorantsMap from './components/ContactMainBlock';
import SupportBlock from './components/Support';
import FooterContactBlock from './components/FooterContactBlock';

const ContactPage = () => {
  return (
    <div className='contact_main_container'> 
        <header className='contact_header_block'>
        <div className="contact_block_navbar">
          <ul>
            <li><span><ContactBurgerMenu /></span></li>
          </ul>
        </div>
        </header>
        <main className='contact_main_container'>
          <div>
            <RestorantsMap />
              <div className="contact_horizontal_line"></div>
            <SupportBlock /> 
          </div>       
        </main>
        <footer className='contact_footer_container'>
          <FooterContactBlock />
        </footer>
    </div>
  )
};

export default ContactPage;
