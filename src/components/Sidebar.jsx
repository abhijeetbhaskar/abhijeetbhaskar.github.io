import React, { useState } from "react";
import myAvatar from "../assets/images/my-avatar.png";
import styles from "../styles/components/Sidebar.module.css";
import { CONTACT_DETAILS, SOCIAL_MEDIA } from "../assets/data/sidebar";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside
      className={`sidebar ${styles.sidebar} ${isActive ? styles.active : ""}`}
      data-sidebar
    >
      <div className={styles.sidebarInfo}>
        <figure className={styles.avatarBox}>
          <img src={myAvatar} alt="Abhijeet Bhaskar" width="80" />
        </figure>

        <div className={styles.infoContent}>
          <h1 className={styles.name} title="Abhijeet Bhaskar">
            Abhijeet Bhaskar
          </h1>
          <p className={styles.title}>Front-End Developer</p>
        </div>

        <button
          className={styles.infoMoreBtn}
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          {isActive ? (
            <>
              <span>Hide Contacts</span>
              <ion-icon name="chevron-up"></ion-icon>
            </>
          ) : (
            <>
              <span>Show Contacts</span>
              <ion-icon name="chevron-down"></ion-icon>
            </>
          )}
        </button>
      </div>

      <div
        className={`${styles.sidebarInfoMore} ${isActive ? styles.active : ""}`}
      >
        <div className="separator"></div>

        <ul className={styles.contactsList}>
          {CONTACT_DETAILS.map(
            ({ type, iconName, href, text, isLink }, index) => (
              <li className={styles.contactItem} key={index}>
                <div className="icon-box">
                  <ion-icon name={iconName}></ion-icon>
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactTitle}>{type}</p>
                  {isLink ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.contactLink}
                    >
                      {text}
                    </a>
                  ) : (
                    <>
                      <p className={styles.contactText}> {text} </p>
                    </>
                  )}
                </div>
              </li>
            )
          )}
        </ul>

        <div className="separator"></div>

        <ul className={styles.socialList}>
          {SOCIAL_MEDIA.map((social, index) => (
            <li className={styles.socialItem} key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <ion-icon name={social.iconName}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
