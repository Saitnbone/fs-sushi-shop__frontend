import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import BurgerMenu from "./components/BurgerMenu";
import Category from "./components/Category";
import Cart from "./components/Cart";
import Autorization from "./components/Autorization";
import Products from "./components/ProductsData";
import MyForm from "./components/Reg_form";
import CartAnimation from "./components/CartAnimation";
import CartAnimation1 from "./components/CartAnimation1";
import Twitter from "./components/Twitter";
import Github from "./components/GitHub";
import Instagram from "./components/Instagram";
import Facebook from "./components/Facebook";
import Help from "./components/Help";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Languages from "./components/Languages";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import { Route, Routes } from "react-router-dom";
import RegistrationPage  from './pages/AutorizationPage'
import Layout from "./components/Layout";


const App = () => {
  const [data, setData] = useState (null)

  useEffect ( () => {
  fetch('/api')
  .then (response => response.json())
  .then (response => setData(response.message) )
  },[])
  const [cartItems, setCartItems] = useState([]); // Используем useState для хранения выбранных товаров
  const [totalPrice, setTotalPrice] = useState(0); // Добавляем состояние для хранения общей суммы заказа
  const addToCart = (product) => {
    setTotalPrice(totalPrice + product.price); // Обновляем общую сумму заказа
    const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
      setCartItems(updatedCartItems);
  } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
  };
  // Функция для фильтрации товаров по категории
  const getProductsByCategory = (category) => {
    return Products.filter((product) => product.category === category);
  };
  return (
    <div className="main_container">
      <Routes>
        <Route path="/" element={Layout}></Route>
      </Routes>
      <div className="navbar">
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
              <Cart cartItems={cartItems} totalPrice={totalPrice}/>
            </span>
          </li>
        </ul>
      </div>
      <div className="greetings">
        <h2 className="main_title element_animation" id="h">
          Welcome!
        </h2>
        <CartAnimation />
        <CartAnimation1 />
      </div>
      <div className="wrap_containers">
        <div className="left_panel">
          <p>Hello World</p>
        </div>
        <div className="menu_wrap">
          <div id="s">
            <Category
              categoryName="Sushi"
              products={getProductsByCategory("Sushi")}
              onAddToCart={addToCart}
            />
          </div>
          <div id="r">
            <Category
              categoryName="Rolls"
              products={getProductsByCategory("Rolls")}
              onAddToCart={addToCart}
            />
          </div>
          <div id="p">
            <Category
              categoryName="Poke"
              products={getProductsByCategory("Poke")}
              onAddToCart={addToCart}
            />
          </div>
          <div id="s_1">
            <Category
              categoryName="Sets"
              products={getProductsByCategory("Sets")}
              onAddToCart={addToCart}
            />
          </div>
          <div id="d">
            <Category
              categoryName="Drinks"
              products={getProductsByCategory("Drinks")}
              onAddToCart={addToCart}
            />
          </div>
        </div>
        <div className="right_panel">
          <p>Hello World</p>
        </div>
      </div>
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
    </div>
  );
};

export default App;