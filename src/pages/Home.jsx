import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeSecondSection from '../components/HomeSecondSection'
import HomeThirdSection from '../components/HomeThirdSection'
import ContactForm from '../components/ContactForm'

function Home() {
  return (
    <div>
        <div>
            <HomeHeroSection/>
            <HomeSecondSection/>
            <HomeThirdSection/>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Home