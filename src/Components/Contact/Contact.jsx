import React, { useRef } from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import './Contact.scss'
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2o4v5lk', 'template_vez5yma', form.current, 'I9xLAlO6eL-fq_Mw0')
        .then((result) => {
           if(result){
            return window.alert("Message send!")
           }
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
             <div className="contact__options">
                <article className="contact__option">
                    <AiOutlineMail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h5>jubailmullick357@gmail.com</h5>
                    <a href='mailto:jubailmullick357@gmail.com' target="_blank" rel="noreferrer">Send Messages</a>
                </article>
                <article className="contact__option" >
                    <BsInstagram className="contact__option-icon"/>
                    <h4>Instagram</h4>
                    <h5>DM ME</h5>
                    <a href='https://www.instagram.com/jscodes._/?igshid=OGQ2MjdiOTE%3D' target="_blank" rel="noreferrer" > Send Messages </a>
                </article>
             </div>
             <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="name" placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
             </form>
            </div>
            
        </section>
    )
}

export default Contact
