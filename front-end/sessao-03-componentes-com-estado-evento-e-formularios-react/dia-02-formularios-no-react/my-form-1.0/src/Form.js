import React from 'react';

class Form extends React.Component {
  constructor () {
    super();

    this.state = {
      meuEmail: '',
    }

    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(event) {
    const { target } = event;
    this.setState({
      meuEmail: target.value
    })
  }

  render() {
    const { meuEmail } = this.state;
    return(
      <form>
        <label>
          Escolha seu Estado:
          <select name="estados">
            <option value="DF">Distrito Federal</option>
            <option value="MG">Minas Gerais</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
          </select>
        </label>
        <label>
          Nome:
          <input name="nome" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="email" value={ meuEmail } onChange={ this.handleEmail }/>
        </label>
        <label>
          Sobre mim:
          <textarea name="sobre-mim" />
        </label>
      </form>
    );
  }
}

export default Form;
