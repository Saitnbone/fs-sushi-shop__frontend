import React from "react";
import { useEffect,useState } from "react";

const CartAnimation = () =>{
          const [isVisible, setIsVisible] = useState(false);
          const [prevScrollY, setPrevScrollY] = useState(0);
          const handleScroll = () => {
            const scrolled = window.scrollY;
            setIsVisible(scrolled > prevScrollY);
            setPrevScrollY(scrolled); // Появление блока при прокрутке на 20% от высоты окна
          };
        
          useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
          const onEntry= (entry) => {
            entry.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element_show');
              }
            });
          }
          
          let options = {
            threshold: [0.5] };
          let observer = new IntersectionObserver(onEntry, options);
          let elements = document.querySelectorAll('.element_animation');
          
          for (let elm of elements) {
            observer.observe(elm);
          }
    return(
    <div className= "countainer element_animation">
            <img className="countainer_img" src="images/Sushi.jpg.png" alt="Error:404 not found" />
            <p class="text_greetings">
               We are creating history. And it's not a joke. Our sushi rolls and
                poke are considered to be among the best in Belgrade. The thing is
                they are created by professional chefs of Asian cuisine.
              </p>
          </div>
    )
}
export default CartAnimation;