const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//  RESPOSTA: Por quê a class .tech adiciona um transform: translateY(-20px) ao primeiro 'li' do 'container'.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

  const listItens = document.querySelectorAll('li');

  firstLi.addEventListener('click', setClass);
  secondLi.addEventListener('click', setClass);
  thirdLi.addEventListener('click', setClass);

  function setClass (item){
    for(let i = 0; i < listItens.length; i += 1) {
      listItens[i].className = 'null';
    }
    item.target.className = 'tech';
  }

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

  input.addEventListener('keyup', function () {
    const item = document.querySelector('.tech');
      item.innerText = input.value;
  });

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

  myWebpage.addEventListener('dblclick', function() {
    window.open("https://tiagobviegas.github.io/project-lessons-learned/index.html");
  });
  
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

  myWebpage.addEventListener('mouseover', changeColor);
  
  function changeColor(mySpotrybefy) {
    mySpotrybefy.target.style.color = 'lightBlue';
  }
