import React from "react";
import styles from "./container.module.css";

export default ({ children }) => (
  <section className={styles.container}>
    {children}
  </section>
);