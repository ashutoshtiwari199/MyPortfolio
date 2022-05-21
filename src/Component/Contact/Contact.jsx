import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'

const Contact = () => {

    const [done, setDone]= useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jy4bjzk', 'template_rcfsji9', form.current, 'ZBdrIwH78m1Elj6Mp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset();
      setDone(true)
  };



  return (
    <div className="contact-form" id='contact-us'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1 "
                    style={{background: "#ABF1FF94"}}
                ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="user_name" required className='user' placeholder='Name' />
                <input type="email" name="user_email" required className='user' placeholder='E-mail' id="" />
                <textarea name="message" className='user' required id="" cols="30" rows="10" placeholder='Message..' ></textarea>
                <input type="submit" value="Send" className='button' id='submitbtn' />
                <span>{done && "Thanks!! We will contact you."}</span>
                <div className="blur c-blur1" style={{background: "var(--purple)"}} ></div>
            </form>
        </div>

    </div>
  )
}

export default Contact