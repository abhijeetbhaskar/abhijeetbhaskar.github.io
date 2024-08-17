import React, { useState } from "react";
import MainContent from "../components/MainContent";
import Section from "../components/resume/Section";
import {
  EDUCATION,
  EXPERIENCE,
  PRIMARY_SKILLS,
  SKILLS,
  AWARDS,
  CERTIFICATIONS,
} from "../assets/data/resume";
import resumePdf from "../assets/downloads/AbhijeetBhaskar_Resume.pdf";
import styles from "../styles/pages/Resume.module.css";

const Resume = () => {
  // Initialize state with an object for managing multiple sections
  const [openSections, setOpenSections] = useState({
    primarySkills: true,
    allSkills: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <MainContent pageName="resume">
      <a
        href={resumePdf}
        download="Abhijeet_Bhaskar_Resume.pdf"
        className={styles.downloadBtn}
      >
        <svg className={styles.downloadBtnIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M14.707 7.793a1 1 0 00-1.414.0L11 10.086V1.5a1 1 0 00-2 0v8.586L6.707 7.793A1 1 0 105.293 9.207l4 4a1 1 0 001.416.0l4-4a1 1 0 00-.002-1.414z"></path>
          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5.0 01-4.95.0L4.55 12H2a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm-3 5a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
        Download CV
      </a>

      <Section
        name="Education"
        icon="book-outline"
        ELEMENT={EDUCATION}
        styles={styles}
      />
      <Section
        name="Experience"
        icon="briefcase-outline"
        ELEMENT={EXPERIENCE}
        styles={styles}
      />

      <section className={styles.skill}>
        <div className={styles.titleWrapper} onClick={() => toggleSection('primarySkills')}>
          <div className="icon-box">
            <ion-icon name="desktop-outline"></ion-icon>
          </div>
          <h3 className="h3">Primary skills</h3>
          <button className={styles.toggleButton}>
            {openSections.primarySkills ? '−' : '+'}
          </button>
        </div>
        {openSections.primarySkills && (
          <ul className={`${styles.skillsList} content-card`}>
            {PRIMARY_SKILLS.map((skill, index) => (
              <li className={styles.skillsItem} key={index}>
                <div className={styles.titleWrapper}>
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.percentage}>{skill.percentage}%</data>
                </div>
                <div className={styles.skillProgressBg}>
                  <div
                    className={styles.skillProgressFill}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.skill}>
        <div className={styles.titleWrapper} onClick={() => toggleSection('allSkills')}>
          <div className="icon-box">
            <ion-icon name="construct-outline"></ion-icon>
          </div>
          <h3 className="h3">All skills</h3>
          <button className={styles.toggleButton}>
            {openSections.allSkills ? '−' : '+'}
          </button>
        </div>
        {openSections.allSkills && (
          <div className={`${styles.skillsList} content-card`}>
            {SKILLS.map((skill, index) => (
              <div className={styles.skillsItem} key={index}>
                <h4 className="h4">{skill.title} — </h4>
                <p className={styles.timelineText}>{skill.skills.join(" • ")}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <Section
        name="Certifications"
        icon="school-outline"
        ELEMENT={CERTIFICATIONS}
        styles={styles}
      />
      <Section
        name="Awards & Recognition"
        icon="trophy-outline"
        ELEMENT={AWARDS}
        styles={styles}
      />
    </MainContent>
  );
};

export default Resume;
