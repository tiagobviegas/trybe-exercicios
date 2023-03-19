import React from 'react';

class App extends React.Component {
  constructor(_props) {
    super(_props)
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleMiddleName = this.handleMiddleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this)

    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };
  }
  
  handleFirstName() {
    this.setState((estadoAnterior, _props) => (
      { btn1: estadoAnterior.btn1 + 1}
    ))
  };
  
  handleMiddleName() {
    this.setState((estadoAnterior, _props) => (
      { btn2: estadoAnterior.btn2 + 1}
    ))
  };

  handleLastName() {
    this.setState((estadoAnterior, _props) => (
      { btn3: estadoAnterior.btn3 + 1}
    ))
  };

  // ALTERNATIVA SEM USO DO BIND NO CONSTRUCTOR:

  // constructor(_props) {
  //   super(_props)
  //   this.state = {
  //     btn1: 0,
  //     btn2: 0,
  //     btn3: 0,
  //   };
  // }

  // handleFirstName = () => this.setState((estadoAnterior, _props) =>
  //   ({ btn1: estadoAnterior.btn1 + 1}));
  // handleMiddleName = () => this.setState((estadoAnterior, _props) => 
  //   ({ btn2: estadoAnterior.btn2 + 1}));
  // handleLastName = () => this.setState((estadoAnterior, _props) =>
  //   ({ btn3: estadoAnterior.btn3 + 1}));
  
  render() {
    const { btn1, btn2, btn3 } = this.state
    return (
      <>
        <button onClick={this.handleFirstName}>{`Tiago ${btn1}`}</button>
        <button onMouseUp={this.handleMiddleName}>{`Barbosa ${btn2}`}</button>
        <button onMouseLeave={this.handleLastName}>{`Viegas ${btn3}`}</button>
      </>
    )
   }
};

export default App;
