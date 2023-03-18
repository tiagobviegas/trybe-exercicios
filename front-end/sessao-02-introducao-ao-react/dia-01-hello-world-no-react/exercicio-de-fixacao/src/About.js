import React from 'react';

function About() {
  const h1 = <h1>Tiago Viegas</h1>
  const description = <p>Desenvolvedor Web graduado na Trybe | Web developer graduated at Trybe</p>
  const h2 = <h2>Minhas Habilidades</h2>
  const ul = <ul type='none'>
    <li>JavaScript</li>
    <li>CSS</li>
    <li>ES6</li>
    <li>Jest</li>
    <li>React</li>
  </ul>

  const element = <div>
    {h1}
    {description}
    {h2}
    {ul}
    </div>
  return element
}

export default About
