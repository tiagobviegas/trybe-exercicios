const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//
// Resposta: a primeira caixa possui a class "tech", que adiciona o estilo "transform: translateY(-20px)" deslocando a caixa para cima, contra o eixo o fluxo original do eixo secundário de alinhamento do container pai.
//
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//
const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('click', setTech);
  function setTech(click) {
    for (let i = 0; i < listItems.length; i += 1) {
      listItems[i].className = '';
    }
    click.target.className = 'tech';
  }
}
//
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
//
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
//
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
