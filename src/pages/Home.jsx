import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeSecondSection from '../components/HomeSecondSection'
import HomeThirdSection from '../components/HomeThirdSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <div>
            <HomeHeroSection/>
            <HomeSecondSection/>
            <HomeThirdSection/>
            <ContactForm/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home