import React from 'react';
import Image from './Image';
import cuteCat from './cuteCat.jpg';

function App() {
  return (
    <Image 
      source={ cuteCat }
      alternativeText={ "Cute cat staring" }
    />
  );
}

export default App;
