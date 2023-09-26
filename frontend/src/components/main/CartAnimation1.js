import React from "react";
import { useEffect,useState } from "react";

const CartAnimation1 = () =>{
    const [isVisible, setIsVisible] = useState(false);
        const handleScroll = () => {
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight;
          setIsVisible(scrolled > windowHeight * 0.5); // Появление блока при прокрутке на 50% от высоты окна
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
        <div className={`countainer_1 scroll_down_block ${isVisible ? 'visible' : ''}`}>
            <p className="text_greetings">
              Our chefs are top-notch sushi, roll and poke chefs. Many of them
              have many years of experience behind them, which has been passed
              down from generation to generation.
            </p>
            <img className="countainer_1_img" src="images/Oshino-1.jpg" alt="Error:404 not found" />
          </div>
    )
}
export default CartAnimation1;