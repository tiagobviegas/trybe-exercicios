import { Component} from 'react';

class About extends Component {
  render() {
    const habilidades = ['CSS', 'React', 'JSX'];
    return (
      <div>
        <h1>Tiago Viegas</h1>
        <p>Um novo desenvolvedor web no mercado, pronto para aprender e mudar o mundo!</p>
        <h2>Minhas habilidades</h2>
        <ul>
          {
            habilidades.map((habilidade) => <li key={ habilidade }>{ habilidade }</li>)
          }
        </ul>
      </div>
    );    
  }
}

export default About
