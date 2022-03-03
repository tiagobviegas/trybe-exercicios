// 3 - Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?

  const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Enviar';
  let formSelect1 = document.querySelector('form');
    formSelect1.appendChild(submitButton);

  submitButton.addEventListener('click', function(submitButton) {
    submitButton.preventDefault();
  })
  

  // 4 - Crie um botão que limpe as informações contidas nos campos;
 
 const clearButton = document.createElement('button');
    clearButton.id = 'clear-button';
    clearButton.innerHTML = 'Limpar';
    clearButton.setAttribute('type', 'reset');
  const selectClear = document.querySelector('#clear-button');
  let formSelect2 = document.querySelector('form');
    formSelect2.appendChild(clearButton);
