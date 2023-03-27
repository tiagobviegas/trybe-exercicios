import React, { Component } from 'react';
import Age from './Age';
import Email from './Email';

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
      errorAge: 'Menores deverão apresentar autorização dos pais ou responsáveis',
      errorEmail: 'Email muito grande!'
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
      piadoca,
      errorAge,
      errorEmail,
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

          <Email
            value={ email }
            handleChange={ this.handleChange }
            erroEmail={ errorEmail }
          />

          <Age
            value={ age }
            error={ errorAge }
            handleChange={ this.handleChange }
          />

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
