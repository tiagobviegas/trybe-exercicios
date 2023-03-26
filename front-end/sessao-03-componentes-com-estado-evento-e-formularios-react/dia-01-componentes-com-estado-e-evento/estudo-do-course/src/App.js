import React from 'react';
class App extends React.Component {
  constructor () {
    super()
    this.handleButton1 = this.handleButton1.bind(this);
    this.handleButton2 = this.handleButton2.bind(this);
    this.handleButton3 = this.handleButton3.bind(this);
  }

  handleButton1() {
    console.log('O Botão 1 foi clicado!');
  }; 
    
  handleButton2() {
    console.log('O Botão 2 foi clicado!');
  }

  handleButton3() {
    console.log('O Botão 3 foi clicado!');
  }

  // No caso do uso de arrow functions não é necessário fazer uso do bind. Ficaria assim:
  // handleButton1 = () => console.log('O Botão 1 foi clicado!');
  // handleButton2 = () => console.log('O Botão 2 foi clicado!');
  // handleButton3 = () => console.log('O Botão 3 foi clicado!');
  
  render() {
    return (
      <div>
        <button onClick={ this.handleButton1 }>Clique-me 1</button>
        <button onClick={ this.handleButton2 }>Clique-me 2</button>
        <button onClick={ this.handleButton3 }>Clique-me 3</button>
      </div>
    );
  }
}

export default App;
