import React, { useEffect, useState } from 'react'



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
    <div className={`h-[70px] w-full text-white animate-pulse ${scrolled ? 'bg-black fixed top-0 left-0 z-10' : 'bg-[#ffffff1a] absolute'}`}>
      <div class="w-[90%] m-auto py-5 px-[75px]">
        <div class="flex justify-between items-center">
          {/* first flex */}
          <div> 
            <h2>Hello</h2>
          </div>
          {/* second flex */}
          <div class="flex justify-between items-center gap-10">
            <div>
              <a href="#">
              <p>HOME</p>
              </a>
            </div>
            <div>
              <a href="#">
              <p>ABOUT</p>
              </a>
            </div>
            <div>
              <a href="#">
              <p>SERVICES</p>
              </a>
            </div>
            <div>
              <a href="#">
              <p>CONTACT</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar