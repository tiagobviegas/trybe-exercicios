import React from 'react';


class App extends React.Component {
  render() {
    const handleClick1 = () => console.log('Fui clicado 1!')
    const handleClick2= () => console.log('Fui clicado 2!')
    const handleClick3 = () => console.log('Fui clicado 3!')
    return (
      <>
        <button onClick={handleClick1}>Clicar 1</button>
        <button onClick={handleClick2}>Clicar 2</button>
        <button onClick={handleClick3}>Clicar 3</button>
      </>
    )
  }
}

export default App
