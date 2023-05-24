import React from 'react';

class App extends React.Component {
  /*
  Utilizando o Constructor juntamente com "bind" e "this"
  constructor() {
    super()
    
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)  
  }

  handleClick1() {
    this.setState((prevState) => ({
      counter1: prevState.counter1 + 1
    }))
  }

  handleClick2() {
    this.setState((prevState) => ({
      counter2: prevState.counter2 + 1
    })) 
  }

  handleClick3() {
    this.setState((prevState) => ({
      counter3: (prevState.counter3 + 1)
    }))
  }
  */

  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  }

  handleClick1 = () => this.setState((prevState) => ({
    counter1: prevState.counter1 + 1
  }))

  handleClick2 = () => this.setState((prevState) => ({
    counter2: prevState.counter2 + 1
  }))

  handleClick3 = () => this.setState((prevState) => ({
    counter3: prevState.counter3 + 1
  }))

  render() {
    const {
      counter1,
      counter2,
      counter3
    } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleClick1}>
          { `Cliques no Botão 1: ${counter1}` }
        </button>
        <button type="button" onClick={this.handleClick2}>
          { `Cliques no Botão 2: ${counter2}` }
        </button>
        <button type="button" onClick={this.handleClick3}>
          { `Cliques no Botão 3: ${counter3}` }
        </button>
      </div>
    )
  }
}

export default App
