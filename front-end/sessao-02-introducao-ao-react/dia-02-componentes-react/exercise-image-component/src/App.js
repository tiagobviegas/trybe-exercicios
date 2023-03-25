import { Component } from 'react';
import Image from './Image';

class App extends Component {
  render() {
    const image = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
    const msg = 'Cute cat staring';
    return (
        <div>
        <Image
          source={ image }
          alternativeText={ msg } />
      </div>
    );
  }
}

export default App;
