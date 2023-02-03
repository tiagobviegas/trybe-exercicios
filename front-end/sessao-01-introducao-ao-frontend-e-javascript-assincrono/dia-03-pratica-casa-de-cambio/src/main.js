// import Swal from 'sweetalert2'; 

const input = document.querySelector('#input-moeda');
const btn = document.querySelector('button');
const currencyTitle = document.querySelector('h2');
const ul = document.querySelector('#currencies');

const getFetch = (currency) => {
  const BASE_API = `https://api.exchangerate.host/latest?base=${currency}`;
  return fetch(BASE_API)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

const clearCurrencies = () => {
  const getLi = document.getElementsByTagName('li');
  for(let i = getLi.length; i > 0; i -= 1) {
    ul.removeChild(ul.firstElementChild);
  }
};

const handleCurrencies = (currency) => {
  const currencyArr = Object.entries(currency);
  clearCurrencies();
  currencyTitle.innerHTML = `Valores referentes à 1 ${input.value}`;
  currencyArr.forEach(([country, value]) => {
    const li = document.createElement('li');
    li.innerHTML = `${country} ${value}`;
    ul.appendChild(li);
  });
};

const getCurrencies = () =>
  getFetch(input.value)
    .then((data) => {
      const { rates } = data;
      handleCurrencies(rates);
    })
    .catch((error) => console.log(error));

btn.addEventListener('click', getCurrencies);
