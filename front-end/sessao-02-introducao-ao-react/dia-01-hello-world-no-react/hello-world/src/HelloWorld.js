import React from 'react';

class HelloWorld extends React.Component {  
  render() {
    return <span>Hello, World!</span>
  }
}

export default HelloWorld

// A função "render()" faz por baixo dos panos a renderização da construção da estrutura do componente

// Para poder exportar este componente para outros lugares é preciso fazer ao final do arquivo a declaração "export default" seguido do componente a ser exportado.

/*
Também é possível importar o Component e outros recursos da biblioteca por meio de destructuring:

import { Component } from 'react';

class HelloWorld extends Component {  
  render() {
    return <span>Hello, World!</span>
  }
}

export default HelloWorld
*/ 
  