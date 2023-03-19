import React, { Component } from 'react';

// Consultei o gabarito para poder estudar melhor o conteúdo de formulários, o qual tive extrema dificuldade de aprendizado no módulo de Fundamentos e continuo tendo dificuldades de aprendizado nessa sessão de formulários em react. Também recorri à ajuda com o gabarito pois preciso entregar projetos pendentes.

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      age: '',
      joke: '',
    };
  }

  handleChange = (event) => this.setState({
    email: event.target.value
  });

  handleChangeName = (event) => this.setState({
    name: event.target.value
  });

  handleChangeAge = (event) => this.setState({
    age: event.target.value
  });

  handleChangeJoke = (event) => this.setState({
    joke: event.target.value
  });

  render() {
    const {
      email,
      name,
      age,
      joke }
      = this.state;

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
              onChange={this.handleChangeName}
              value={name} />
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
              onChange={this.handleChangeAge}
              value={age}>
              <option value="none">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea
              id="anecdote"
              name="anecdote"
              onChange={this.handleChangeJoke}
              value={joke}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
