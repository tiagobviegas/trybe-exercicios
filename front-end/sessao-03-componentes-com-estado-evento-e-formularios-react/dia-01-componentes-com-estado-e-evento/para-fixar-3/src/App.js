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
  
  handleFirstName(add) {
    this.setState((estadoAnterior) => {
      if ((estadoAnterior.btn1 + add) % 2 === 0) {
        console.log('verde');
      }
      return { btn1: estadoAnterior.btn1 + add }
    })
  };
 
  handleMiddleName() {
    this.setState((estadoAnterior) => {
      if ((estadoAnterior.btn2 + 1) % 2 === 0) {
        console.log('verde');
      }
      return { btn2: estadoAnterior.btn2 + 1 }
    })
  };

  handleLastName() {
    this.setState((estadoAnterior) => {
      if ((estadoAnterior.btn3 + 1) % 2 === 0) {
        console.log('verde');
      }
      return { btn3: estadoAnterior.btn3 + 1 }
    })
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

  // handleFirstName = (add) => {
  //   this.setState((estadoAnterior, _props) => {
  //     if ((estadoAnterior.btn1 + add) % 2 === 0) {
  //       console.log('verde');
  //     }
  //     return { btn1: estadoAnterior.btn1 + add }
  //   });
  // }

  // handleMiddleName = () => {
  //   this.setState((estadoAnterior, _props) => {
  //     if ((estadoAnterior.btn2 + 1) % 2 === 0) {
  //       console.log('verde');
  //     }
  //     return { btn2: estadoAnterior.btn2 + 1 }
  //   });
  // }

  // handleLastName = () => {
  //   this.setState((estadoAnterior, _props) => {
  //     if ((estadoAnterior.btn3 + 1) % 2 === 0) {
  //       console.log('verde');
  //     }
  //     return { btn3: estadoAnterior.btn3 + 1 }
  //   });
  // }
  
  render() {
    const { btn1, btn2, btn3 } = this.state
    return (
      <>
        <button onMouseDown={
          () => this.handleFirstName(1)
        }>
          {`Tiago ${btn1}`}
        </button>

        <button onMouseUp={
          this.handleMiddleName
        }>
          {`Barbosa ${btn2}`}
        </button>
        
        <button onMouseLeave={
          this.handleLastName
        }>
          {`Viegas ${btn3}`}
        </button>
      </>
    )
   }
};

export default App;
