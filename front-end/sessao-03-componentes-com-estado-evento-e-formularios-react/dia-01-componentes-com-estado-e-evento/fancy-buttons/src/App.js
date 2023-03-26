import React from 'react';

const handleButton1 = () => console.log('O Botão 1 foi clicado!');
const handleButton2 = () => console.log('O Botão 2 foi clicado!');
const handleButton3 = () => console.log('O Botão 3 foi clicado!');
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ handleButton1 }>Clique-me 1</button>
        <button onClick={ handleButton2 }>Clique-me 2</button>
        <button onClick={ handleButton3 }>Clique-me 3</button>
      </div>
    );
  }
}

export default App;
