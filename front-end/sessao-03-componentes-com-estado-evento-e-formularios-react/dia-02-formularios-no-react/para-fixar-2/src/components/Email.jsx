import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.Component {
  render() {
    const {
      value,
      handleChange,
      erroEmail 
    } = this.props

    let error = erroEmail;

    return (
      <label htmlFor="email">
        Email:
      <input
        id="email"
        name="email"
        type="email"
        onChange={ handleChange }
        value={ value }
      />
      <div>{ value.length > 30 ? error : '' }</div>
    </label>
    )
  }
}

Email.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  erroEmail: PropTypes.string.isRequired,
}

export default Email;
