import React from 'react'
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className="contact">
      <div className="section_wrapper contact_container">
        <div className="section_header">
          <h2 className="primary_title">Contact Me</h2>
          <p className="text_muted description">
            Ready to take your digital presence to the next level? Whether 
            you're looking to launch a new website, revamp an existing one, or need expert advice 
            on the best web technologies, I'm here to help. Reach out to discuss your project, ask 
            questions, or just say hello.
          </p>
        </div>
        <div className="contact_group">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className='contact_icon'/>
              <h3>Email</h3>
              <h5>sharukhbabushaik@gmail.com</h5>
              <a href="mailto:sharukhbabushaik@gmail.com" target='_blank' className='btn'>Send a message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className='contact_icon'/>
              <h3>WhatsApp</h3>
              <h5>+91 6301270325</h5>
              <a href="https://api.whatsapp.com/send?phone=6301270325" target='_blank' className='btn'>Send a message</a>
            </article>
          </div>

          <form>
            <input type="text" name="name" placeholder='Your full name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn_primary'>Send Message</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
