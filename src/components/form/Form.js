import React from "react";
import Input from "../input/Input"
import styles from "./form.module.css";


export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: ''
      },
      plant: {
        
      }
    }
  }

  onInputChange = (e) => {
    console.log('input changed')
  }

  render() {
    const { data } = this.props;
    
    return (
      <form className={styles.container}>
        <Input onInputChange={this.onInputChange} />
      </form>
    )
  }
}