import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact() {
    
  return (
    <div class="h-screen">
        <section class="">
            <div class="flex justify-center items-center flex-col text-center py-[150px] px-[90px] bg-[#D5B981]">
                <div>
                    <h1 class="text-4xl font-extrabold">Contact</h1>
                    <p>Home / Contact</p>
                </div>
            </div>
            <div class="bg-[#ffffff] pb-20">
                <div class=" flex justify-center items-center flex-col text-center py-[90px] px-[90px] h-fit">
                    <div>
                        <p>Get In Touch</p>
                        <h1 class="text-4xl font-extrabold">If You Have Any Query,</h1>
                        <h1 class="text-4xl font-extrabold">Please Contact Us</h1>
                    </div>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </section>
    </div>
  )
}

export default Contact