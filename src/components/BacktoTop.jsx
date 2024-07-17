import { IoIosArrowUp } from "react-icons/io";
import React, { useState, useEffect } from 'react';
const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Scroll to top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  return (
    <>
        <div className="back-to-top">
      {isVisible && 
        <button onClick={scrollToTop} className="back-to-top-button">
         <IoIosArrowUp />
        </button>}
    </div>
    </>
  )
}

export default BacktoTop