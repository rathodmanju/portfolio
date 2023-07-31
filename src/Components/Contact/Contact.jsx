import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b61ng1l",
      "template_m7mstj7",
      form.current,
      "Wxl4tfRS9LCxywdbx"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div>
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>manjurathode49@gmail.com</h5>
              <a href="mailto:manjurathode49@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact-option">
              <AiOutlineMessage className="contact-option-icon" />
              <h4>Messanger</h4>
              <h5>ManjuPrkDevotee</h5>
              <a href="https://m.me/manjuprkdevotee" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact-option">
              <AiOutlineWhatsApp className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <h5>+919591443904</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+919591443904"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
          </div>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="name" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Write Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
