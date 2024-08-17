import React from "react";
import styles from "../../styles/pages/Homepage.module.css";
import { SERVICES } from "../../assets/data/services";

const Service = () => {
  return (
    <section className={styles.service}>
      <h3 className={`h3 ${styles.serviceTitle}`}>What I Do?</h3>
      <ul className={styles.serviceList}>
        {SERVICES.map((service, index) => (
          <li className={styles.serviceItem} key={index}>
            <div className={styles.serviceIconBox}>
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                width="40"
              />
            </div>
            <div className={styles.serviceContentBox}>
              <h4 className={`h4 ${styles.serviceItemTitle}`}>
                {service.title}
              </h4>
              <p className={styles.serviceItemText}>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Service;
