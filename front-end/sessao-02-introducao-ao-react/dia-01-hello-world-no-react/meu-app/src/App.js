// ESTUDOS

import './App.css';

function App() {
  function helloWorld(nome, sobrenome) {
    return `Hello, ${nome} ${sobrenome}!`
  }
  const element = <h1>{helloWorld('Tiago', 'Viegas')}</h1>
  const container = <div className='meu-estilo'>{element}</div>
  return container
}

export default App;
