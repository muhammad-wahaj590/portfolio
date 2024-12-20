import React, { useEffect } from 'react';
import './Contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Contact() {
  
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with animation duration
  }, []);

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f6a9fb12-cbe5-444b-a8db-645c25c97471");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank you!",
        text: "Your form has been submitted successfully. We will get back to you soon.",
        icon: "success",
        confirmButtonText: "Close",
      })
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>syedwahaj590@gmail.com</h5>
            <a href="mailto:syedwahaj590@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>syed wahaj</h5>
            <a href="https://m.me/profile.php?id=100009186420188" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+923092340134</h5>
            <a href="https://api.whatsapp.com/send?phone=923092340134" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        <form onSubmit={onSubmit}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="tel" name='telephone' placeholder='Your Phone Number'/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
