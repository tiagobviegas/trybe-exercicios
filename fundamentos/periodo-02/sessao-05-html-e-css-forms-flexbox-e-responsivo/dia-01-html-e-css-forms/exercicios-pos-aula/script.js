const submitBtn = document.querySelector('#submitBtn')
const buttons = document.querySelector('#buttons');
const disclaimer = document.querySelector('#disclaimer');
const nome = document.querySelector('#full-name');
const email = document.querySelector('#e-mail');
const textarea = document.querySelector('#resposta');

function createClearButton() {
  const clearButton = document.createElement('button')
    clearButton.setAttribute('id', 'erase');
    clearButton.setAttribute('type', 'reset');
    clearButton.setAttribute('name', 'clear-form');
    clearButton.innerHTML = 'Apagar';
  return buttons.appendChild(clearButton);
}
createClearButton();

function removeLenghtLimits() {
  nome.removeAttribute('minlength');
  nome.removeAttribute('maxlength');
  email.removeAttribute('minlength');
  email.removeAttribute('maxlength');
  textarea.removeAttribute('maxlength');
}
removeLenghtLimits();

submitBtn.addEventListener('click', (event) => {
  if(nome.value.length < 10 || nome.value.length > 40) {
    event.preventDefault();
    alert('Dados inválidos');
  } else if (email.value.length < 10 || email.value.length > 50) {
    event.preventDefault();
    alert('Dados inválidos');
  } else if (textarea.value.length > 500) {
    event.preventDefault();
    alert('Dados inválidos');
  } else if (!disclaimer.checked) {
    event.preventDefault();
    alert('Permita o uso das suas imagens das férias com a Trybe!');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
});
