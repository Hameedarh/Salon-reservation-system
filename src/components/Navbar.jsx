import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from 'lucide-react'; // Import hamburger and close icons

function Navbar() {

  const [scrolled, setScrolled] = useState(false);   // State to detect scroll
  const [menuOpen, setMenuOpen] = useState(false);   // State to toggle mobile menu

  const handleScroll = () => {
    // Check if the window has been scrolled down
    const offset = window.scrollY;
    setScrolled(offset > 0);
    console.log("Scrolled: ", offset > 0);
  };

  // Add and clean up scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`h-[70px] w-full text-white animate-pulse ${scrolled ? 'bg-black fixed top-0 left-0 z-20' : 'bg-[#ffffff1a] absolute'} transition duration-300`}>
      <div className="md:w-[90%] m-auto py-5 px-[75px]">
        <div className="flex justify-between items-center">
          {/* first flex - Logo */}
          <Link to='/'>
            <div> 
              <h2 className="font-bold text-3xl">Jiggy Salon</h2>
            </div>
          </Link>

          {/* second flex - Desktop menu */}
          <div className="hidden lg:flex justify-between items-center gap-10">
            <Link to='/'>
              <div>
                <p>HOME</p>
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

          {/* Hamburger icon - only visible on small screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu - dropdown on small screens */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 lg:hidden bg-black p-4 rounded-md">
            <Link to='/' onClick={toggleMenu}>
              <p>Home</p>
            </Link>
            <AnchorLink href="#about" onClick={toggleMenu}>
              <p>About</p>
            </AnchorLink>
            <AnchorLink href="#services" onClick={toggleMenu}>
              <p>Services</p>
            </AnchorLink>
            <AnchorLink href="#blog" onClick={toggleMenu}>
              <p>Blog</p>
            </AnchorLink>
            <Link to='/contact' onClick={toggleMenu}>
              <p>Contact</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
