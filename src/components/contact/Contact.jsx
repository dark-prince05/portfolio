import styles from "./contact.module.css";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import { MdWhatsapp, MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_z7flx7t";
  const TEMPLATE_ID = "template_4eutrep";
  const PUBLIC_KEY = "Loyt2wDttsj4cNNaH";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((res) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops something went wrong. Please try again."));
  };

  return (
    <section id="contact">
      <div className={styles.contactSection}>
        <h2 className={styles.title}>
          Contact <span>Me</span>
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name...."
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com..."
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <h3 className={styles.innerHeading}>Get in touch with me</h3>
      <div className={styles.iconContainer}>
        <a
          href="mailto:barathraj0504@gmail.com?subject=Let's connect"
          className={styles.iconParent}
        >
          <MdMailOutline className={styles.icon} />
        </a>
        <a
          href="https://wa.me/917094902901"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconParent}
        >
          <MdWhatsapp className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/barathraj-b-00542130a"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconParent}
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          href="https://github.com/dark-prince05/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconParent}
        >
          <FaGithub className={styles.icon} />
        </a>
      </div>
    </section>
  );
}
