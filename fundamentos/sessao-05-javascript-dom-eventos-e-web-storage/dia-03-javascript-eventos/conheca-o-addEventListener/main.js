const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

/*  RESPOSTA: isso acontece porque a classe "tech", que aplica o estilo transform: translateY(-20px), está aplicado à primeira caixa;
*/
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const liList = document.getElementsByTagName('li');
const length = liList.length;
let i = 0;
const addTech = (element) => {
  i = 0;
  while (i < length) {
    liList[i].classList.remove('tech');
    i += 1;
  };
  element.target.className = 'tech';
};
while (i < length) {
  liList[i].addEventListener('click', addTech);
  i += 1;
};

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const tech = document.getElementsByClassName('tech');

const addText = (field) => {
  field.target.innerHTML = input.value;
}

tech.addEventListener('keydown', addText);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

