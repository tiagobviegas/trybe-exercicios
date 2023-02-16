import Swal from 'sweetalert2';

const input = document.querySelector('#cep-recebido');
const btn = document.querySelector('#botao-cep');
const showData = document.querySelector('#mostra-dados');

const handleButton = async () => {
  try {
    const cep = input.value;
    const BASE_API = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await fetch(BASE_API);
    const data = await result.json();
    showData.innerHTML = JSON.stringify(data);
  } catch (e) {
    Swal.fire(`CEP Inválido! ${e}`);
  }
};

btn.addEventListener('click', handleButton);
