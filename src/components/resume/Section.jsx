import React, { useState } from "react";
import styles from "../../styles/pages/Resume.module.css";

const Section = ({ name, icon, ELEMENT }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.timeline}>
      <div className={styles.titleWrapper} onClick={toggleOpen}>
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>
        <h3 className="h3">{name}</h3>
        <button className={styles.toggleButton}>
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && (
        <ol className={styles.timelineList}>
          {ELEMENT.map((item, index) => (
            <li className={styles.timelineItem} key={index}>
              <h4 className={`h4 ${styles.timelineItemTitle}`}>{item.title}</h4>
              <span>{item.logo && <img className={styles.downloadBtnIcon} src={item.logo} alt={`${item.authority} logo`} width="30"/>}
              { item.authority ?? item.date}</span>
              <p className={styles.timelineText}>{item.description}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default Section;
