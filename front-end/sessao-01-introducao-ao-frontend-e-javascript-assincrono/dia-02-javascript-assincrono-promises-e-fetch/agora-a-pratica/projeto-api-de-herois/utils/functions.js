import Swal from 'sweetalert2';
const heroImage = document.querySelector('#image');
const heroName = document.querySelector('#hero-name');

export function fetchBase(api) {
  return fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const { name , images: { md: image }} = data;
      heroName.innerHTML = name;
      heroImage.src = image;
    })
    .catch((error) => {
      console.log(error.message);
      return Swal.fire(
        'Deu ruim!',
        'Não há um super-herói com a ID informada'
      );
    });
}
