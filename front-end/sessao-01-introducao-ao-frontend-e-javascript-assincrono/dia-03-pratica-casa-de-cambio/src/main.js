// import Swal from 'sweetalert2'; 

const input = document.querySelector('#input-moeda');
const btn = document.querySelector('button');
const currency = document.querySelector('h2');
const ul = document.querySelector('ul');

const getFetch = (moeda) => {
  const BASE_API = `https://api.exchangerate.host/latest?base=${moeda}`;
  return fetch(BASE_API)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

btn.addEventListener('click', getFetch(input.value));
