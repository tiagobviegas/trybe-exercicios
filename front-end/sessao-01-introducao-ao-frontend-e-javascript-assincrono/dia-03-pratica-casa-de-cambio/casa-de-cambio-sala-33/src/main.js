const inputMoeda = document.getElementById('input-moeda');
const btnSearch = document.getElementById('botao-pesquisa');
// const formContainer = document.getElementById('container');
const ulValores = document.getElementById('valores');
const info = document.getElementById('info-moeda');

btnSearch.addEventListener('click', () => {
  ulValores.innerHTML = '';
  info.innerText = `Valores referentes a ${inputMoeda.value}`;
  const moeda = inputMoeda.value;
  const BASE_API = `https://api.exchangerate.host/latest?base=${moeda}`;
  
  fetch(BASE_API)
    .then((response) => response.json())
    .then((dados) => {
      const { rates } = dados;
      const arrEntries = Object.entries(rates);
      console.log(arrEntries);
      const retornoMoedas = ([pais, cot]) => {
        const li = document.createElement('li');
        li.innerText = `${pais}: ${cot}`;
        ulValores.appendChild(li);
      };
      arrEntries.forEach((entry) => retornoMoedas(entry));
    });
});
