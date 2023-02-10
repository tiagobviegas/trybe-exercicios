// const paragrafo = document.querySelector('p');

const heroImage = document.querySelector('#image');
const heroName = document.querySelector('#hero-name');


const myToken = 5954222851266040;

const BASE_API = `https://superheroapi.com/api/${myToken}`;
const idGen = Math.floor(Math.random() * 300)


fetch(`${BASE_API}/${idGen}/image`)
  .then((response) => response.json())
  .then((data) => {
    const { id, url } = data;
    console.log(id)
    console.log(url)
    // heroImage.src = url
    // heroName.innerHTML = id

  });