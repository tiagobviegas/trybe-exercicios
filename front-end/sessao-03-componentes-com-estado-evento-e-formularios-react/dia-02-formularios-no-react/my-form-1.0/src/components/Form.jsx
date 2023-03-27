import React, { Component } from 'react';

// Código do gabarito devido a perda do código em face de problemas com o gitHub e o VSCode. Código devidamente analisado e estudado, para poupar tempo e agilizar estudos

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
            <input id="name" name="name" type="text" />
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
            <select id="age" name="age" defaultValue="">
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea id="anecdote" name="anecdote" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
