import React from 'react';

class App extends React.Component {
  constructor(_props) {
    super(_props)
    this.firstName = this.firstName.bind(this);
    this.middleName = this.middleName.bind(this);
    this.lastName = this.lastName.bind(this)
  }
  
  firstName() {
    console.log('Tiago');
  };
  
  middleName() {
    console.log('Barbosa');;
  };

  lastName() {
    console.log('Viegas');
  };

  // ALTERNATIVA SEM USO DO CONSTRUCTOR:
  // firstName = () => console.log('Tiago');
  // middleName = () => console.log('Barbosa');
  // lastName = () => console.log('Viegas');
  
  render() {
    return (
      <>
        <button onClick={this.firstName}>First Name</button>
        <button onMouseUp={this.middleName}>Middle Name</button>
        <button onMouseLeave={this.lastName}>Last Name</button>
      </>
    )
   }
  

};

export default App;

