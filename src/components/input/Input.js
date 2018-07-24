import React from 'react';
// import { camelToTitle } from '../../helper.js';
import './input.module.css';

export default class Input extends React.Component {

  onInputChange = (e) => {
    this.props.onInputChange(e);
  }

  render() {
    const { name, defaultValue, className } = this.props;

    return (
      <div className="interactiveItem">
        <label htmlFor={'name'}>user:</label>
          <input id={'name'}
            type="number" 
            name={'name'} 
            onChange={this.onInputChange} 
            value={'default'}
            className="input" />
      </div>
    )
  }
}