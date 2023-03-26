import React from 'react';
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      contador1: 0,
      contador2: 0,
      contador3: 0,
    }
    this.handleButton1 = this.handleButton1.bind(this);
    this.handleButton2 = this.handleButton2.bind(this);
    this.handleButton3 = this.handleButton3.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleButton1() {
    this.setState((prevState, _props) => ({
      contador1: prevState.contador1 + 1,
    }))
  };
    
  handleButton2() {
    this.setState((prevState, _props) => ({
      contador2: prevState.contador2 + 1,
    }))
  }

  handleButton3() {
    this.setState((prevState, _props) => ({
      contador3: prevState.contador3 + 1,
    }))
  }

  handleReset() {
    this.setState((prevState, _props) => ({
      contador1: prevState.contador1 - prevState.contador1, 
      contador2: prevState.contador2 - prevState.contador2,
      contador3: prevState.contador3 - prevState.contador3,
    }))
  }

  render() {

    const {
      contador1,
      contador2,
      contador3,
    } = this.state

    return (
      <div>
        <button
          onClick={ this.handleButton1 }
        >
          {`Clique-me 1: ${contador1}`}
        </button>
        <button
          onClick={ this.handleButton2 }
        >
          {`Clique-me 2: ${contador2}`}
        </button>
        <button
          onClick={ this.handleButton3 }
        >
          {`Clique-me 3: ${contador3}`}
        </button>
        <button onClick={ this.handleReset }>Reset All</button>
      </div>
    );
  }
}

export default App;
