import React from 'react'

function Navbar() {
  return (
    <div class="bg-[#ffffff1a] h-[70px] absolute z-10 w-[100%] text-[#ffffff]">
      <div class="w-[80%] m-auto p-5">
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