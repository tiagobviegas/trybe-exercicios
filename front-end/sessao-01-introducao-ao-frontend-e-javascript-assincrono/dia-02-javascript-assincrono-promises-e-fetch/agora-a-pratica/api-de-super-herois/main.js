import Swal from 'sweetalert2';

const heroName = document.querySelector('#hero-name');
const heroImage = document.querySelector('#hero-image');
const button = document.querySelector('#button');
const acessToken = 5954222851266040;

// GERADOR DE IDs
const heroesAmount = 750;
const idNumberGen = () => Math.ceil((Math.random() * heroesAmount));

const clearData = () => {
  heroImage.removeAttribute('src');
  heroName.innerHTML = '';
};

// API que retorna a imagem do herói. Também retorna o nome na chave "name"
const HEROES_IMAGE_API = `https://www.superheroapi.com/api.php/${acessToken}/${idNumberGen()}/image`;

button.addEventListener('click', (event) => {
  event.preventDefault();
  idNumberGen();
  fetch(HEROES_IMAGE_API)
    .then((response) => response.json())
    .then((data) => {
      clearData();
      heroImage.src = data.url;
      heroName.innerHTML = data.name;
    })
    .catch((error) => {
      console.log(error.message);
      return Swal.fire('ID não existente');
    });
});
