import React from 'react';

class App extends React.Component {
  constructor(_props) {
    super(_props)
    this.firstName = this.firstName.bind(this);
    this.middleName = this.middleName.bind(this);
    this.lastName = this.lastName.bind(this)

    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };
  }
  
  firstName() {
    this.setState((estadoAnterior, _props) => (
      { btn1: estadoAnterior.btn1 + 1}
    ))
  };
  
  middleName() {
    this.setState((estadoAnterior, _props) => (
      { btn2: estadoAnterior.btn2 + 1}
    ))
  };

  lastName() {
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

  // firstName = () => this.setState((estadoAnterior, _props) =>
  //   ({ btn1: estadoAnterior.btn1 + 1}));
  // middleName = () => this.setState((estadoAnterior, _props) => 
  //   ({ btn2: estadoAnterior.btn2 + 1}));
  // lastName = () => this.setState((estadoAnterior, _props) =>
  //   ({ btn3: estadoAnterior.btn3 + 1}));
  
  render() {
    const { btn1, btn2, btn3 } = this.state
    return (
      <>
        <button onClick={this.firstName}>{`Tiago ${btn1}`}</button>
        <button onMouseUp={this.middleName}>{`Barbosa ${btn2}`}</button>
        <button onMouseLeave={this.lastName}>{`Viegas ${btn3}`}</button>
      </>
    )
   }
};

export default App;
