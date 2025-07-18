import React from 'react'
import contact from '../assets/img/w1.jpg'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("myzkrqjw");
    if (state.succeeded) {
        return <p className="text-center text-lg text-[#D5B981] py-10">Thanks!! A customer representative will reach out to you shortly!</p>;
    }

    return (
        <div>
            <div class="bg-[#1d2434] py-12 px-4">
                <div class="w-full md:w-[90%] m-auto flex flex-col md:flex-row justify-between items-center md:px-[75px] gap-10">
                    
                    {/* Image Section - Hidden on Small Screens */}
                    <div class="basis-full md:basis-2/5 hidden md:block">
                        <img src={contact} alt='contact-pic' class="w-full max-w-[500px] h-auto object-cover" />
                    </div>

                    {/* Form Section */}
                    <div class="basis-full md:basis-3/5 w-full px-2 md:px-12">
                        <div class="flex justify-center items-center">
                            <div class="w-full">
                                <form onSubmit={handleSubmit}>
                                    {/* Name Field */}
                                    <div class="border-b border-[#D5B981] py-2 px-1">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            name="name"
                                            class="w-full bg-transparent outline-0 text-[#D5B981] text-sm md:text-base"
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>

                                    {/* Email Field */}
                                    <div class="border-b border-[#D5B981] py-2 px-1 mt-4">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Your Email"
                                            name="email"
                                            class="w-full bg-transparent outline-0 text-[#D5B981] text-sm md:text-base"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>

                                    {/* Subject Field */}
                                    <div class="border-b border-[#D5B981] py-2 px-1 mt-4">
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            name="subject"
                                            class="w-full bg-transparent outline-0 text-[#D5B981] text-sm md:text-base"
                                        />
                                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                                    </div>

                                    {/* Message Field */}
                                    <div class="border-b border-[#D5B981] py-2 px-1 mt-4">
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Enter your Message"
                                            class="w-full bg-transparent outline-0 text-[#D5B981] text-sm md:text-base min-h-[100px]"
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>

                                    {/* Submit Button */}
                                    <div class="mt-6">
                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            class="w-full sm:w-auto px-6 py-3 border border-[#D5B981] bg-transparent text-[#D5B981] hover:bg-[#D5B981] hover:text-[#1d2434] transition-all"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm
