import React from "react";
import styles from "./pageWrapper.module.css";

export default ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);