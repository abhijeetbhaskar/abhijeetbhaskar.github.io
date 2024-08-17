import React, { useState, useMemo } from "react";
import MainContent from "../components/MainContent";
import styles from "../styles/pages/Portfolio.module.css";
import { PORTFOLIO } from "../assets/data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [dropdown, setDropdown] = useState(false);

  // Extract unique categories from PORTFOLIO
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      PORTFOLIO.map((project) => project.category)
    );
    return ["All", ...Array.from(uniqueCategories).sort()];
  }, []);

  const handleFilterClick = (category) => {
    setFilter(category);
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const filteredProjects =
    filter === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter(
          (project) => project.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <MainContent pageName="portfolio">
      <section className={styles.projects}>
        <ul className={styles.filterList}>
          {categories.map((category) => (
            <li className={styles.filterItem} key={category}>
              <button
                className={filter === category ? styles.active : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.filterSelectBox}>
          <button
            className={`${styles.filterSelect} ${
              dropdown ? styles.active : ""
            }`}
            onClick={toggleDropdown}
            data-select
          >
            <div className={styles.selectValue} data-select-value>
              {filter === "All"
                ? "Select category"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </div>
            <div className={styles.selectIcon}>
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className={styles.selectList}>
            {categories.map((category) => (
              <li className={styles.selectItem} key={category}>
                <button
                  data-select-item
                  onClick={() => handleFilterClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.projectList}>
          {filteredProjects.map((project, index) => (
            <li
              className={`${styles.projectItem} ${styles.active}`}
              data-filter-item
              data-category={project.category}
              key={index}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <figure className={styles.projectImg}>
                  <div className={styles.projectItemIconBox}>
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img
                    src={project.imgSrc}
                    alt={project.altText}
                    loading="lazy"
                  />
                </figure>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </MainContent>
  );
};

export default Portfolio;
