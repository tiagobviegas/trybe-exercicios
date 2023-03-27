import React from 'react';
import PropTypes from 'prop-types';

class Age extends React.Component {
  render() {
    const { 
      value,
      handleChange, 
      error } = this.props

    return (
      <label htmlFor="age">
        Idade:
      <select
        id="age"
        name="age"
        value={ value }
        onChange={ handleChange }
      >
        <option value="">Selecione</option>
        <option value="adult">Maior que 18</option>
        <option value="underage">Menor que 18</option>
      </select>
      <div>{ value === 'underage' ? error :  '' }</div>
    </label>
    )
  }
}

Age.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
}

export default Age;
