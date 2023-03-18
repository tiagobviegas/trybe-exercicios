import React from 'react';

const firstName = () => console.log('Tiago');
const middleName = () => console.log('Barbosa');
const lastName = () => console.log('Viegas');

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={firstName}>First Name</button>
        <button onMouseUp={middleName}>Middle Name</button>
        <button onMouseLeave={lastName}>Last Name</button>
      </>
    )
   } 
};

export default App;
