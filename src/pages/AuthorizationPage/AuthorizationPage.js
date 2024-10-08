import React from "react";
import './auth.css'
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import AuthBurgerMenu from "./components/AuthBurgerMenu";
import AuthFormUsers from "./components/AuthFormUsers";
import Languages from "../../components/footer/Languages";
import Profile from "../../components/footer/Profile";
import Contacts from "../../components/footer/Contacts";
import Menu from "../../components/footer/Menu";
import Help from "../../components/footer/Help";
import Location from "../../components/footer/Location";
import Instagram from "../../components/footer/Instagram";
import Facebook from "../../components/footer/Facebook";
import Twitter from "../../components/footer/Twitter";
import Github from "../../components/footer/GitHub";
import NewsFormAuth from "./components/NewsFormAuth";
import { Link } from "react-router-dom";



const AuthorizationPage = () => { 
    return (
    <div className="auth_block">
      <header className="header_auth_block">
        <div className="auth_block_navbar">
          <ul>
            <li><span><AuthBurgerMenu/></span></li>
          </ul>
        </div>
      </header>
      <main className="main_auth_block">
        <AuthFormUsers/> 
      </main>
      <footer className="footer_auth_block">
        <div className="block_footer">
          <div class="common">
            <div>
              <div className="auth_block_footer_element">
                <span className="auth_block_icons"><Languages/></span> 
                <p className="auth_block_text_footer_element">Languages</p>
              </div>
            </div>
            <div>
              <div className="auth_block_footer_element">
                <span className="auth_block_icons"><Profile/></span> 
                <p className="auth_block_text_footer_element">My profile</p>
              </div>
            </div>
            <div>
              <div className="auth_block_footer_element">
                <span className="auth_block_icons"><Contacts/></span> 
                <p className="auth_block_text_footer_element">Contacts</p>
              </div>
            </div>
          </div>
          <div class="auth_block_vertical_line"></div>
            <div class="social">
              <h3 className="auth_block_text"> JU Sushi and you</h3>
              <div>
                <div className="auth_block_footer_element">
                  <Link to={'/'}><span className="auth_block_icons"><Menu/></span></Link>
                  <Link to={'/'}><p className="auth_block_text_footer_element">Menu</p></Link>
                </div>
              </div>
              <div>
                <div className="auth_block_footer_element">
                <Link to={'/contacts'}><span className="auth_block_icons"><Help/></span></Link>  
                <Link to={'/contacts'}><p className="auth_block_text_footer_element">Help</p></Link> 
                </div>
              </div>
              <div>
                <div className="auth_block_footer_element">
                  <Link to={'/contacts'}><span className="auth_block_icons"><Location/></span></Link> 
                  <Link to={'/contacts'}><p className="auth_block_text_footer_element">Location</p></Link>
                </div>
              </div>
            </div>
            <div class="auth_block_vertical_line"></div>
            <div class="social_network">
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
              <h3 className="auth_block_text">Sign up to our newsletter</h3>
                <p className="auth_block_text">Find out about the latest news and promotions through our newsletter.</p>
              <span id="reg_form_auth_block">
                <NewsFormAuth/>
              </span>
            </div>
          </div>
          <div class="auth_block_horizontal_line"></div>
          <div className="rights">
            <p className="auth_block_text">All rights reserved &copy;</p>
            <p className="auth_block_text">Developed by Creative fusion</p>
          </div>
      </footer>
    </div>
    )
}

export default AuthorizationPage;