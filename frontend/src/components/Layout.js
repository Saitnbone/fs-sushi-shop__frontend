import React from "react";
import { Link, Outlet } from "react-router-dom";
import Autorization from './Autorization'
import Cart from "./Cart";
import Languages from "./Languages";
import Profile from "./Profile";
import Contacts from "./Contacts";
import Menu from "./Menu";
import Help from "./Help";
import Location from "./Location";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Github from "./GitHub";
import MyForm from "./Reg_form";
import BurgerMenu from "./BurgerMenu"

const Layout = () => { 
    return(
    <>
        <header className="navbar">
            <ul class="navigation">
            <li><span><BurgerMenu /></span></li>
            <li class="categories menu">
                <a href="#h">Home</a>
            </li>
            <li class="categories menu">
                <a href="#s">Sushi</a>
            </li>
            <li class="categories menu">
                <a href="#r">Rolls</a>
            </li>
            <li class="categories menu">
                <a href="#p">Poke</a>
            </li>
            <li class="categories menu">
                <a href="#s_1">Sets</a>
            </li>
            <li class="categories dropdown menu">
                <a href="#d" class="dropbtm menu">
                Drinks
                </a>
                <div class="dropdown-content">
                <a href="#d_s">Juices</a>
                <a href="#d_p">Beer</a>
                <a href="#d_v">Vines</a>
                </div>
            </li>
            </ul>
            <ul class="registration">
            <li>
                <span id="autorization">
                <Autorization />
                </span>
            </li>
            <li>
                <span id="box">
                {/* <Cart {/* cartItems={cartItems} totalPrice={totalPrice}/> */}
                </span>
                </li>
            </ul>
        </header>
        <Outlet />
        <footer class="footer">
        <div class="block_footer">
          <div class="common">
            <div>
              <div className="footer_element"><Languages /> 
                <p className="text_footer_element">Languages</p>
              </div>
            </div>
            <div>
              <div className="footer_element"><Profile /> 
                <p className="text_footer_element">My profile</p>
              </div>
            </div>
            <div>
              <div className="footer_element"><Contacts /> 
                <p className="text_footer_element">Contacts</p>
              </div>
            </div>
          </div>
          <div class="vertical-line"></div>
          <div class="social">
            <h3> JU Sushi and you</h3>
            <div>
              <div className="footer_element"><Menu /> 
                <p className="text_footer_element">Menu</p>
              </div>
            </div>
            <div>
              <div className="footer_element"><Help /> 
                <p className="text_footer_element">Help</p>
              </div>
            </div>
            <div>
              <div className="footer_element"><Location /> 
                <p className="text_footer_element">Location</p>
              </div>
            </div>
          </div>
          <div class="vertical-line"></div>
          <div class="social_network">
            <h3>Stay tuned</h3>
            <p>
            Follow us, connect with us and share moments
               held in Po Sushi, in social networks.
            </p>
            <div>
              <div class="images">
                <div class="social-icons">
                  <p>
                    <span>
                      <Instagram />
                    </span>
                    <span>
                      <Facebook />
                    </span>
                    <span>
                     < Twitter />
                    </span>
                    <span>
                      <Github />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <h3>Sign up to our newsletter</h3>
            <p>Find out about the latest news and promotions through our newsletter.</p>
            <span id="reg_form">
              <MyForm />
            </span>
          </div>
        </div>
        <div class="horizontal-line"></div>
        <div className="rights">
          <p>All rights reserved &copy;</p>
          <p>Developed by Creative fusion</p>
          </div>
      </footer>
        </>
    )
}

export default Layout;