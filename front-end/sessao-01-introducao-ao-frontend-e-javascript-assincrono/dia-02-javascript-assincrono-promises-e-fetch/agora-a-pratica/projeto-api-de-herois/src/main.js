import { fetchBase } from '/utils/functions';

const heroImage = document.querySelector('#image');
const heroName = document.querySelector('#hero-name');
const button = document.querySelector('#btn');
const totalHeroes = 800;

button.addEventListener('click', (event) => {
  heroName.innerHTML = '';
  heroImage.src = '';
  event.preventDefault();
  const idGen = Math.floor(Math.random() * totalHeroes);
  const BASE_API = `https://akabab.github.io/superhero-api/api/id/${idGen}.json`;
  fetchBase(BASE_API);
});
