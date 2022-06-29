import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k2qawqh', 'template_c6rkpn6', formRef.current, 'X7K7ebhIeOy3YwHki')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Şimdi bizimle konuşun</h5>
      <h2>İletişim Formu</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>emrah@avrasyadipcik.com</h5>
            <a href="mailto:emrah@avrasyadipcik.com">Bana Mail gönderebilirsin</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="text" placeholder="Your Email" name="user_email" required/>
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Mesajını Gönder</button>
        </form>
      </div>

    </section>
  )
}

export default Contact