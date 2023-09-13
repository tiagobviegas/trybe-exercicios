import React from 'react';

class App extends React.Component {

  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  }

  evenCheck = (number) => number % 2 === 0 ? 'green' : 'white'

  handleClick1 = () => {
    const { counter1 } = this.state;
    
    this.setState((prevState) => ({
      counter1: prevState.counter1 + 1
    }), () => console.log(`Botão 1 ${this.evenCheck(counter1)}`))
  };

  handleClick2 = () => {
    const { counter2 } = this.state;

    this.setState((prevState) => ({
      counter2: prevState.counter2 + 1
    }), () => console.log(`Botão 2 ${this.evenCheck(counter2)}`))
  }

  handleClick3 = () => {
    const { counter3 } = this.state;
    this.setState((prevState) => ({
      counter3: prevState.counter3 + 1
    }), () => console.log(`Botão 3 ${this.evenCheck(counter3)}`))
  }

  render() {
    const {
      counter1,
      counter2,
      counter3
    } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.handleClick1}
          style={ { backgroundColor: this.evenCheck(counter1) } }
        >
          { `Cliques no Botão 1: ${counter1}` }
        </button>
        <button
          type="button"
          onClick={this.handleClick2}
          style={ { backgroundColor: this.evenCheck(counter2) }}
        >
          { `Cliques no Botão 2: ${counter2}` }
        </button>
        <button
          type="button"
          onClick={this.handleClick3}
          style={ { backgroundColor: this.evenCheck(counter3)}}
        >
          { `Cliques no Botão 3: ${counter3}` }
        </button>
      </div>
    )
  }
}

export default App
