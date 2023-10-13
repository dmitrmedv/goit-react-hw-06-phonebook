import css from './Filter.module.css';
import { nanoid } from 'nanoid';
const { Component } = require('react');

class Filter extends Component {
  findContact = event => {
    this.props.filter(event.target.value);
  };

  idFilter = nanoid();

  render() {
    return (
      <div className={css.filterForm}>
        <label htmlFor={this.idFilter}>Find contacts by name</label>
        <input type="text" onChange={this.findContact} id={this.idFilter} />
      </div>
    );
  }
}

export default Filter;
