import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeSecondSection from '../components/HomeSecondSection'
import HomeThirdSection from '../components/HomeThirdSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import HomeSwiperSection from '../components/HomeSwiperSection'

function Home() {
  return (
    <div>
        <div>
            <HomeHeroSection/>
            <HomeSecondSection/>
            <HomeThirdSection/>
            <ContactForm/>
            <HomeSwiperSection/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home