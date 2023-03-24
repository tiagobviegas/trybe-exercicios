import React, { Component } from 'react';
import SelectInput from './SelectInput';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: 'tiago@viegas.com',
      name: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target
    const value = (target.type === 'checkbox')
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, name, age, anecdote, terms } = this.state;
    console.log(email)

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações Pessoais</legend>
            <div>
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
            </div>

            <div>
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={ email }
                  onChange={ this.handleChange }
                  />
              </label>
            </div>

            <SelectInput
              age={ age }
              handleChange={ this.handleChange }
            />
          </fieldset>
          
          <fieldset>
            <legend>Registre sua Piadoca!</legend>
            <div>
              <label htmlFor="anecdote">
                <div>Anedota:</div>
                <textarea
                  id="anecdote"
                  name="anecdote"
                  value={ anecdote }
                  onChange={ this.handleChange }
                />
              </label>
          </div>
      
            <label htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                // defaultValue="checked"
                value={ terms }
                onChange={ this.handleChange }
                />
              Concordo com termos e acordos
            </label>
            <div>
              <input type="file" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
