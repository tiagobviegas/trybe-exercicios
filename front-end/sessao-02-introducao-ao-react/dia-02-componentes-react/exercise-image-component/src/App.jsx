import React from 'react';
import Image from './Image';
import cuteCat from './cuteCat.jpg';

class App extends React.Component {
  render() {
    return (
      <>
        <Image
          source={ cuteCat }
          alternativeText="Cute cat staring"/>
      </>
    )
  } 
}

export default App
