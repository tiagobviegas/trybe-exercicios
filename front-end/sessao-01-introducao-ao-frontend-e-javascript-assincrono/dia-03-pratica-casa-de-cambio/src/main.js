// import Swal from 'sweetalert2'; 

const input = document.querySelector('#input-moeda');
const btn = document.querySelector('button');
const currencyTitle = document.querySelector('h2');
const ul = document.querySelector('#currencies');

const getFetch = (moeda) => {
  const BASE_API = `https://api.exchangerate.host/latest?base=${moeda}`;
  return fetch(BASE_API)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const clearCurrencies = () => {

};

const handleCurrencies = (currency) => {
  const currencyArr = Object.entries(currency);
  return console.log(currencyArr);
};

const getCurrencies = () =>
  getFetch(input.value)
    .then((data) => {
      const { rates } = data;
      handleCurrencies(rates);
    })
    .catch((error) => console.log(error));

btn.addEventListener('click', getCurrencies);
