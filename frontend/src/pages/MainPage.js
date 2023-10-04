import React from "react";
import { 
  useState, 
  useEffect 
} from "react";
import BurgerMenu from "../components/header/BurgerMenu";
import AutorizationForm from "../components/header/Authorization";
import Basket from "../components/header/Basket";
import CartAnimation from "../components/main/CartAnimation";
import CartAnimation1 from "../components/main/CartAnimation1";
import Category from "../components/main/Category";
import Languages from "../components/footer/Languages";
import Profile from "../components/footer/Profile";
import Contacts from "../components/footer/Contacts";
import Menu from "../components/footer/Menu";
import Help from "../components/footer/Help";
import Location from "../components/footer/Location";
import Instagram from "../components/footer/Instagram";
import Facebook from "../components/footer/Facebook";
import Github from "../components/footer/GitHub";
import Twitter from "../components/footer/Twitter";
import MyForm from "../components/footer/Reg_form";
import Products from "../components/ProductsData";

const MainPage = () => {
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
  return(
    <div>
      <div className="main_container">
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
                <AutorizationForm />
              </span>
            </li>
            <li>
              <span id="box">
                <Basket cartItems={cartItems} totalPrice={totalPrice}/>
              </span>
            </li>
          </ul>
        </header>
        <div className="greetings">
          <h2 className="main_title element_animation" id="h">
            Welcome!
          </h2>
          <CartAnimation />
          <CartAnimation1 />
        </div>
        <main className="wrap_containers">
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
        </main>
        <footer className="footer">
          <div className="block_footer">
            <div class="common">
              <div>
                <div className="footer_element">
                  <span className="icons"><Languages/></span> 
                  <p className="text_footer_element">Languages</p>
                </div>
              </div>
              <div>
                <div className="footer_element">
                  <span className="icons"><Profile/></span> 
                  <p className="text_footer_element">My profile</p>
                </div>
              </div>
              <div>
                <div className="footer_element">
                  <span className="icons"><Contacts/></span> 
                  <p className="text_footer_element">Contacts</p>
                </div>
              </div>
            </div>
            <div class="vertical-line"></div>
            <div class="social">
              <h3> JU Sushi and you</h3>
              <div>
                <div className="footer_element">
                  <span className="icons"><Menu/></span> 
                  <p className="text_footer_element">Menu</p>
                </div>
              </div>
              <div>
                <div className="footer_element">
                  <span className="icons"><Help/></span> 
                  <p className="text_footer_element">Help</p>
                </div>
              </div>
              <div>
                <div className="footer_element">
                  <span className="icons"><Location/></span> 
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
                      <span className="instagram_icon">
                        <Instagram />
                      </span>
                      <span className="facebook_icon">
                        <Facebook />
                      </span>
                      <span  className="twitter_icon">
                      < Twitter />
                      </span>
                      <span className="github_icon">
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
    </div>
  )
}

export default MainPage;
