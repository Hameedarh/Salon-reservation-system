import React from 'react'
import contact from '../assets/img/contact.jpg'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    
    const [state, handleSubmit] = useForm("myzkrqjw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

  return (
    <div class="h-screen">
        <section class="">
            <div class="flex justify-center items-center flex-col text-center py-[150px] px-[90px] bg-[#D5B981]">
                <div>
                    <h1 class="text-4xl font-extrabold">Contact</h1>
                    <p>Home / Contact</p>
                </div>
            </div>
            <div class="bg-[#ffffff] flex justify-center items-center flex-col text-center py-[90px] px-[90px] h-fit">
                <div>
                    <p>Get In Touch</p>
                    <h1 class="text-4xl font-extrabold">If You Have Any Query,</h1>
                    <h1 class="text-4xl font-extrabold">Please Contact Us</h1>
                </div>
            </div>
            <div class="bg-[#1d2434]">
                <div class="w-[90%] m-auto flex justify-between px-[75px]">
                    <div class="basis-2/5">
                        <img src={contact} alt='contact-pic' class="w-[500px] h-[470px]"/>
                    </div>
                    <div class="basis-3/5 px-12">
                        <div class="flex justify-center items-center h-[100%]">
                            <div class=" h-[50%] w-[100%]">
                                <form onSubmit={handleSubmit}>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        name="name"
                                        class="w- full bg-transparent outline-0 text-[#D5B981]"
                                        />
                                        <ValidationError 
                                            prefix="Name" 
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        name="email"
                                        class="w-full bg-transparent outline-0 text-[#D5B981]"
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <input
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        name="subject"
                                        class="w-full bg-transparent outline-0 text-[#D5B981]"
                                        />
                                        <ValidationError 
                                            prefix="Subject" 
                                            field="subject"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            class="w-full bg-transparent outline-0 text-[#D5B981]"
                                            placeholder='Enter your Message'
                                        />
                                        <ValidationError 
                                            prefix="Message" 
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" disabled={state.submitting} class="mt-[20px] px-[35px] py-[20px] border border-solid border-[#D5B981] bg-transparent text-[#D5B981]">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact