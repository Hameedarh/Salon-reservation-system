import React, {useState} from 'react'
import contact from '../assets/img/contact.jpg'
import axios from "axios"

function Contact() {

    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
      name: "",
      email: "",
      subject: ""
    });
  
    const handleChange = () => (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      axios
        .post(
          "https://getform.io/f/bejrerga",
          formData,
          { headers: { Accept: "application/json" } }
        )
        .then(function (response) {
          setFormStatus(true);
          setQuery({
            name: "",
            email: "",
            subject: ""
          });
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

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
                        <img src={contact} alt='contact-pic' class="w-[500px] h-[500px]"/>
                    </div>
                    <div class="basis-3/5 px-12">
                        <div class="flex justify-center items-center h-[100%]">
                            <div class=" h-[40%] w-[100%]">
                                <form onSubmit={handleSubmit}>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        name="name"
                                        value={query.name}
                                        onChange={handleChange()}
                                        required="required"
                                        class="w- full bg-transparent outline-0 text-[#D5B981]"
                                        />
                                    </div>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        name="email"
                                        value={query.email}
                                        onChange={handleChange()}
                                        required="required"
                                        class="w-full bg-transparent outline-0 text-[#D5B981]"
                                        />
                                    </div>
                                    <div class="border-b border-solid border-[#D5B981] py-2 px-1">
                                        <input
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        name="subject"
                                        value={query.subject}
                                        onChange={handleChange()}
                                        required="required"
                                        class="w-full bg-transparent outline-0 text-[#D5B981]"
                                        />
                                    </div>
                                    <div>
                                        {formStatus ? (
                                            <div className="alert alert-success">
                                            Your message has been sent.
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        <button type="submit" class="mt-[20px] px-[35px] py-[20px] border border-solid border-[#D5B981] bg-transparent text-[#D5B981]">
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