import React from 'react'
import ContactBlockLanguages from './ContactBlockLanguages';
import Profile from '../../../components/footer/Profile';
import Menu from '../../../components/footer/Menu';
import Instagram from '../../../components/footer/Instagram';
import Facebook from '../../../components/footer/Facebook';
import Twitter from '../../../components/footer/Twitter';
import Github from '../../../components/footer/GitHub';
import NewsFormContact from './NewsFormContact';
import { Link } from "react-router-dom";

const FooterContactBlock = () => {
  return (
    <>
      <div className="contact_block_footer">
        <div class="contact_block_social">
          <h2 className="contact_block_text"> JU Sushi and you</h2>
          <div>
            <div className="contact_block_footer_element">
              <span className="contact_block_icons"><ContactBlockLanguages/></span> 
              <p className="contact_block_text_footer_element">Languages</p>
            </div>
            <div className="contact_block_footer_element">
              <Link to={'/'}><span className="contact_block_icons"><Menu/></span></Link>
              <Link to={'/'}><p className="contact_block_text_footer_element">Menu</p></Link>
            </div>
            <div className="contact_block_footer_element">
              <Link to={'/login'}><span className="contact_block_icons"><Profile/></span></Link> 
              <Link to={'/login'}><p className="contact_block_text_footer_element">My profile</p></Link>     
            </div>
          </div>
        </div>
        <div class="contact_block_vertical_line"></div>
        <div class="contact_block_social_network">
          <h3 className="auth_block_text">Stay tuned</h3>
          <p className="auth_block_text">
            Follow us, connect with us and share moments
            held in JU Sushi, in social networks.
          </p>
          <div>
            <div class="images">
              <div class="social-icons">
                <p>
                  <span className="auth_block_instagram_icon">
                    <Instagram/>
                  </span>
                  <span className="auth_block_facebook_icon">
                    <Facebook/>
                  </span>
                  <span className="auth_block_twitter_icon">
                    < Twitter/>
                  </span>
                  <span className="auth_block_github_icon">
                    <Github/>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <h3 className="contact_block_text">Sign up to our newsletter</h3>
          <p className="contact_block_text">Find out about the latest news and promotions through our newsletter.</p>
          <span id="reg_form_auth_block">
            <NewsFormContact />
          </span>
        </div>
      </div>
      <div class="auth_block_horizontal_line"></div>
        <div className="rights">
          <p className="auth_block_text">All rights reserved &copy;</p>
          <p className="auth_block_text">Developed by Creative fusion</p>
        </div>
    </>
  )
};

export default FooterContactBlock;
