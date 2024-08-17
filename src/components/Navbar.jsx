import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/Navbar.module.css";

const Navbar = ({ activePage }) => {
  const [activeLink, setActiveLink] = useState(activePage);

  const handleNavClick = (page) => {
    setActiveLink(page);
  };

  // List of nav items
  const navItems = ["About", "Resume", "Portfolio", "Blog", "Contact"];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {navItems.map((item) => {
          const path = `/${item.toLowerCase()}`;
          return (
            <li className={styles.navbarItem} key={item}>
              <Link to={path}>
                <button
                  className={`${styles.navbarLink} ${
                    activeLink === item.toLowerCase() ? styles.active : ""
                  }`}
                  data-nav-link
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
