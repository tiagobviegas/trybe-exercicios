import React from 'react';

class App extends React.Component {
  /*
  Utilizando o Constructor
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)  
  }

  handleClick1() {
    console.log('Fui clicado 1!')
  }

  handleClick2() {
    console.log('Fui clicado 2!')
  }

  handleClick3() {
    console.log('Fui clicado 3!')
  }
  */

  handleClick1 = () => console.log('Fui clicado 1!')
  handleClick2 = () => console.log('Fui clicado 2!')
  handleClick3 = () => console.log('Fui clicado 3!')

  render() {
    return (
      <>
        <button onClick={this.handleClick1}>Clicar 1</button>
        <button onClick={this.handleClick2}>Clicar 2</button>
        <button onClick={this.handleClick3}>Clicar 3</button>
      </>
    )
  }
}

export default App
