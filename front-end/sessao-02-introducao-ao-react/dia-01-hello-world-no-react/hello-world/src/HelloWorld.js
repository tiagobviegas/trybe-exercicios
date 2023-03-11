import React from 'react';

class HelloWorld extends React.Component {
  // A função "render()" faz por baixo dos panos a renderização da construção da estrutura do componente
  render() {
    return <span>Hello, World!</span>
  }
}

// Para poder exportar este componente para outros lugares é preciso fazer ao final do arquivo a declaração "export default" seguido do componente a ser exportado.

export default HelloWorld

// Também é possível importar o Component e outros recursos da biblioteca por meio de destructuring:
//
// import { Component } React from 'react';
//
// class helloWorld extends Component {
//
// } 
  