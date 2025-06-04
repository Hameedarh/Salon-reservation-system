import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";



function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    // Check if the window has been scrolled down
    const offset = window.scrollY;
    setScrolled(offset > 0);
    console.log("Scrolled: ", offset > 0);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <div className={`h-[70px] w-full text-white animate-pulse ${scrolled ? 'bg-black fixed top-0 left-0 z-20' : 'bg-[#ffffff1a] absolute'}`}>
      <div class="w-[90%] m-auto py-5 px-[75px]">
        <div class="flex justify-between items-center">
          {/* first flex */}
          <Link to='/'>
            <div> 
              <h2 class="font-bold text-3xl">Jiggy Salon</h2>
            </div>
          </Link>
          {/* second flex */}
        
          <div class="flex justify-between items-center gap-10">
            <Link to='/'>
              <div>
                <a href="#">
                <p>HOME</p>
                </a>
              </div> 
            </Link>
            <div>
              <AnchorLink href='#about'>
                <p>ABOUT</p>
              </AnchorLink>
            </div>
            <div>
              <AnchorLink href="#services">
              <p>SERVICES</p>
              </AnchorLink>
            </div>
            <div>
              <AnchorLink href="#blog">
              <p>BLOG</p>
              </AnchorLink>
            </div>
            <Link to='/contact'>
              <div>
                <p>CONTACT</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar