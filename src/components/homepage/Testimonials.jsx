import React, { useState } from "react";
import { TESTIMONIALS } from "../../assets/data/testimonials";
import styles from "../../styles/components/Testimonials.module.css";
import quoteImg from "../../assets/images/about/icon-quote.svg";

const Testimonials = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (testimonial) => {
    setModalData(testimonial);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section className={styles.testimonials}>
      <h3 className={`h3 ${styles.testimonialsTitle}`}>Testimonials</h3>
      <ul className={`${styles.testimonialsList} has-scrollbar`}>
        {TESTIMONIALS.map((testimonial, index) => (
          <li className={styles.testimonialsItem} key={index}>
            <div
              className="content-card"
              onClick={() => openModal(testimonial)}
              data-testimonials-item
            >
              <figure className={styles.testimonialsAvatarBox}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className={`h4 ${styles.testimonialsItemTitle}`}
                data-testimonials-title
              >
                {testimonial.name}
              </h4>
              <div className={styles.testimonialsText} data-testimonials-text>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {modalData && (
        <div
          className={`${styles.modalContainer} ${styles.active}`}
          data-modal-container
        >
          <div
            className={`${styles.overlay} ${styles.active}`}
            data-overlay
            onClick={closeModal}
          ></div>
          <section className={styles.testimonialsModal}>
            <button
              className={styles.modalCloseBtn}
              data-modal-close-btn
              onClick={closeModal}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className={styles.modalImgWrapper}>
              <figure className={styles.modalAvatarBox}>
                <img
                  src={modalData.avatar}
                  alt={modalData.name}
                  width="80"
                  data-modal-img
                />
              </figure>
              <img src={quoteImg} alt="quote icon" />
            </div>
            <div className={styles.modalContent}>
              <h4 className={`h3 ${styles.modalTitle}`} data-modal-title>
                {modalData.name}
              </h4>
              <time dateTime={modalData.date}>
                {new Date(modalData.date).toLocaleDateString()}
              </time>
              <div data-modal-text>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
