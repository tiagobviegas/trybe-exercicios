import React, { Component } from 'react';

// Consulta ao gabarito devido para poupar tempo e agilizar estudos

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      age: '',
      anecdote: '',
      piadoca: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {
      email,
      name,
      age,
      anecdote,
      piadoca
    } = this.state;

    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
            <input
              id="name" 
              name="name" 
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              value={ age }
              onChange={ this.handleChange }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea
              id="anecdote"
              name="anecdote"
              value={ anecdote }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="piadoca">
            <input
              id="piadoca"
              name="piadoca"
              type="checkbox"
              value={ piadoca }
              onChange={ this.handleChange }
            />
            Aceito compartilhar minha piadoca
          </label>

          <input name="arquivo" type="file" ref={ this.fileInput }/>
        </form>
      </div>
    );
  }
}

export default Form;
