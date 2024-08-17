import React from "react";
import styles from "../../styles/pages/Homepage.module.css";
import { CLIENTS } from "../../assets/data/clients";

const Clients = () => {
  return (
    <section className={styles.clients}>
      <h3 className="h3">Clients</h3>
      <ul className={`${styles.clientsList} has-scrollbar`}>
        {CLIENTS.map((client, index) => (
          <li className={styles.clientsItem} key={index}>
            <a href={client.url} target="_blank" rel="noopener noreferrer">
              <img src={client.logo} alt="client logo" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
