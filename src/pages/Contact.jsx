import React, { useState } from "react";
import MainContent from "../components/MainContent";
import styles from "../styles/pages/Contact.module.css";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setIsSubmitting(formData ? true : false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Full Name: ${formData.fullname}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:abhibhas6@gmail.com?subject=${subject}&body=${body}`;

    //Reset Form After Submission
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <MainContent pageName="contact">
      <section className={styles.mapbox} data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883842!2d77.04417347155065!3d28.52725273882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1722802106223!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section className={styles.contactForm}>
        <h3 className={`h3 ${styles.formTitle}`}>Contact Form</h3>
        <form
          action="#"
          className={styles.form}
          data-form
          onSubmit={handleSubmit}
        >
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="fullname"
              className={styles.formInput}
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              data-form-input
            />
            <input
              type="email"
              name="email"
              className={styles.formInput}
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              data-form-input
            />
          </div>
          <textarea
            name="message"
            className={styles.formInput}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            data-form-input
          ></textarea>
          <button
            className={styles.formBtn}
            type="submit"
            disabled={!isSubmitting}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </MainContent>
  );
};

export default Contact;
