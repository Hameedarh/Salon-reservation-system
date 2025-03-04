import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Contact from './pages/Contact';

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <TopBar/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>    
            <Route path='/contact' element={<Contact />}/>    
          </Routes>
        </BrowserRouter>
        {/* <div class="bg-blue h-screen">

        </div> */}
      </div>
    </>
  )
}

export default App
