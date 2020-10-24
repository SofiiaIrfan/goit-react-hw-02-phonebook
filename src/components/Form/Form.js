import React, { Component } from 'react';
import style from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    tel: '',
  };
  inputChannge = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  addContact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: '', tel: '' });
  };
  render() {
    const { name, tel } = this.state;
    return (
      <>
        <form className={style.form} onSubmit={this.addContact}>
          <label className={style.label}>
            Name{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.inputChannge}
              required
            />
          </label>
          <label>
            Tel{' '}
            <input
              className={style.input}
              type="text"
              name="tel"
              value={tel}
              onChange={this.inputChannge}
              required
            />
          </label>
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
