import React from "react";
import styles from "./footer.module.css";

export default class Footer extends React.Component {
  render() {
    const { data } = this.props;
    
    return (
      <footer className={styles.container}>
        <h1>{data.title}</h1>
      </footer>
    )
  }
}

