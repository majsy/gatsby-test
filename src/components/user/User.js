import React from "react";
import styles from "./user.module.css";

export default class User extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ''
    }
  }

  render() {
    const { data } = this.props;
    
    return (
      <footer className={styles.container}>
        <h1>{data.title}</h1>
      </footer>
    )
  }
}