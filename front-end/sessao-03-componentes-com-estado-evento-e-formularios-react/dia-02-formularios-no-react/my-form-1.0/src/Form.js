import React, { Component } from 'react';

// Consultei o gabarito para poder estudar melhor o conteúdo de formulários, o qual tive extrema dificuldade de aprendizado no módulo de Fundamentos e continuo tendo dificuldades de aprendizado nessa sessão de formulários em react. Também recorri à ajuda com o gabarito pois preciso entregar projetos pendentes.

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      age: '',
      anecdote: '',
      newsletter: '',
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target
    const value = (target.type === 'checkbox') ? 
      target.checked : 
      target.value;
    
    this.setState({
      [name]: value
    });
  } 

  render() {
    const {
      email,
      name,
      age,
      anecdote,
      newsletter,
    } = this.state;

    return (
      <div>
        <fieldset>
          <h1>
            Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
          </h1>
          <form className="form">
            <fieldset>
              <legend>Dados pessoais</legend>
              <section>
                <label htmlFor="name">
                  Nome:
                  <input
                    id="name"
                    name="name"
                    type="text"                    
                    onChange={this.handleChange}
                    value={name}
                  />
                </label>
              </section>

              <section>                
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
              </section>

              <section>
                <label htmlFor="age">
                  Idade:
                  <select
                    id="age"
                    name="age"
                    onChange={this.handleChange}
                    value={age}
                  >
                    <option value="none">Selecione</option>
                    <option value="adult">Maior que 18</option>
                    <option value="underage">Menor que 18</option>
                  </select>
                </label>
              </section>
            </fieldset>

            <fieldset>
              <legend>Sua piadoca</legend>
              <section>
                <label htmlFor="anecdote">
                  <div>Anedota:</div>
                  <textarea
                    id="anecdote"
                    name="anecdote"
                    onChange={this.handleChange}
                    value={anecdote}
                  />
                </label>
              </section>

              <section>
                <label htmlFor='newsletter'>
                  <input
                    id="newsletter"
                    type="checkbox"
                    name="newsletter"
                    value={newsletter}
                    onChange={this.handleChange}
                  />
                    Desejo receber notícias sobre trocadalhos do carilho!
                </label>
              </section>
              
              <section>

                <label htmlFor='file'>
                  <div>Envie um arquivo com sua anedota:</div> 
                  <input
                    id="file"
                    name="file"
                    type="file"
                  />
                </label>
              </section>

            </fieldset>
            
          </form>
        </fieldset>
      </div>
    );
  }
}

export default Form;
