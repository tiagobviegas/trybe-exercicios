// Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.

//   Dica: Coloque a tag <script> no final do seu body.

// 3 - Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
const btnEnviar = document.querySelector('#btn-enviar');
btnEnviar.addEventListener('click', function(event){
  event.preventDefault();
}) 

// 4 - Crie um botão que limpe as informações contidas nos campos; -->
const fieldset = document.querySelector('fieldset');
const btnLimpar = document.createElement('button');
btnLimpar.innerText = 'Limpar'
function clear(){
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const checkbox = document.querySelectorAll('checkbox');
for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].value = '';
  textArea.value = '';
  
}
for (let i = 0; i < checkbox.length; i += 1) {
  checkbox[i].value = false;
}
}
btnLimpar.addEventListener('clik', clear)
fieldset.appendChild(btnLimpar);