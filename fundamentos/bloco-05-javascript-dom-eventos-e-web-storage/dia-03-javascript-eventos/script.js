function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


// Exercício 1:
//
//   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//
//     > Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day .
//         Ex: <li class="day">3</li>
//     > Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday .
//         Ex: <li class="day holiday">24</li>
//     > Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday .
//         Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function insertDays() {
    for(let i = 0; i < dezDaysList.length; i += 1) {
      let createLi = document.createElement('li');
        if(dezDaysList[i] === 25) {
          createLi.className = 'day holiday friday';
          createLi.innerHTML = dezDaysList[i];
        } else if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
          createLi.className = 'day friday';
          createLi.innerHTML = dezDaysList[i];
        } else if(dezDaysList[i] === 24 || dezDaysList[i] === 31) {
          createLi.className = 'day holiday';
          createLi.innerHTML = dezDaysList[i];
        } else {
          createLi.className = 'day';
          createLi.innerHTML = dezDaysList[i];
        }
      const getUl = document.querySelector('#days');
      getUl.appendChild(createLi);
    }
  }
  insertDays();


// Exercício 2:
// 
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//
//  > Adicione a este botão a ID "btn-holiday" .
//  > Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  function setHoliday(feriado) {
    let createButton = document.createElement('button');
    createButton.innerText = feriado;
    createButton.id = 'btn-holiday';
    let divButtons = document.querySelector('.buttons-container');
    divButtons.appendChild(createButton);
  }

  setHoliday('Feriados');


// Exercício 3:
//
//   Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//  
//   > É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

// >>>>>>>>> consultei o gabarito para entender a dinâmica do exercício <<<<<<<<<

  function addHolidayBtn() {
    let holidayBtn = document.querySelector('#btn-holiday');
    let selectHolidays = document.querySelectorAll('.holiday');
    let defaultBgColor = "rgb(238,238,238)";
    let newBgColor = 'lightgreen';

    holidayBtn.addEventListener('click', function() {
      for(let i = 0; i < selectHolidays.length; i += 1) {
        if(selectHolidays[i].style.backgroundColor === newBgColor) {
          selectHolidays[i].style.backgroundColor = defaultBgColor;
        } else {
          selectHolidays[i].style.backgroundColor = newBgColor;
        }
      }
    })
  };
  addHolidayBtn()

// Exercício 4:
//
//   Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//  
//   > Adicione a este botão o ID "btn-friday" .
//   > Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  function createFridayBtn(friday){
    let createFriday = document.createElement('button');
    createFriday.innerText = friday;
    createFriday.id = 'btn-friday';
    document.querySelector('.buttons-container').appendChild(createFriday);
  }
  createFridayBtn('Sexta-Feira');
  

// Exercício 5:
//
//   Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//
//   > É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

  function changeFridays(){
    let fridayBtn = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let fridayLabel = "SEXTOU!";
    let fridaysArray = [4, 11, 18, 25];
  
    fridayBtn.addEventListener('click', function () {
      for(let i = 0; i < fridays.length; i += 1) {
        if(fridays[i].innerText !== fridayLabel) {
          fridays[i].innerText = fridayLabel; 
        } else {
          fridays[i].innerText = fridaysArray[i];
        }
      }
    });
  }
  changeFridays();


// Exercício 6:
//
//   Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//  
//   > Dica - Propriedade: event.target .

  function caseChange(){
    let selectDay = document.querySelectorAll('.day');
    for(let i = 0; i < selectDay.length; i += 1){
      selectDay[i].onmouseover = function() {
        selectDay[i].style.fontSize = '25px';
      }
      selectDay[i].onmouseleave = function() {
        selectDay[i].style.fontSize = '20px';
      }
    }    
  }  
  caseChange()


// Exercício 7:
//
//   Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//
//   > O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

  function addTask(task) {
    let selectMyTasksDiv = document.querySelector('.my-tasks');
    let newTask = document.createElement('span');
      newTask.innerHTML = task;
      selectMyTasksDiv.appendChild(newTask);
  }
  addTask('cozinhar');


// Exercício 8:
//
//   Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//
//   > O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//   > O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

  function addLegend(color) {
    let selectMyTasksDiv = document.querySelector('.my-tasks');
    let legend = document.createElement('div');
      legend.className = 'task';
      legend.style.backgroundColor = color;
    selectMyTasksDiv.appendChild(legend);
  }
  addLegend('rgb(255, 159, 159)');


// Exercício 9:
//
//   Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//  
//   > Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function changeTaskClass() {
  let selectTask = document.querySelector('.task');
    selectTask.addEventListener('click', function() {
      if(selectTask.className === 'task'){
        selectTask.className = 'task-selected';          
      } else {
        selectTask.className = 'task';
      }
    })
}
changeTaskClass();


// Exercício 10:
//
//   Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
  
//   > Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function setDayTask() {
  const getDay = document.querySelectorAll('.day');
  const taskSelected = document.querySelector('.task');
  taskSelected.addEventListener('click', function() {
    for(let i = 0; i < getDay.length; i += 1) {
      getDay[i].addEventListener('click', function() {
        getDay[i].style.color = taskSelected.style.backgroundColor;
        getDay[i].addEventListener('click', function() {
          getDay[i].style.color = 'rgb(119,119,119)';
        })
      })
    }
  })
}
setDayTask();


// Bônus:
//
//   Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//  
//   > Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//   > Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//   > Dica - Propriedade: key .

  function addTask() {
    // seleciona a caixa de texto COMPROMISSOS
    const inputTask = document.querySelector('#task-input');

    // seleciona o CONTEÚDO de dentro da caixa de texto COMPROMISSOS
    const inputContent = inputTask.innerText;

    // seleciona o BOTÃO ADICIONAR em COMPROMISSOS
    const addNewTaskButton = document.querySelector('#btn-add');
//    const pressEnter = 
//      pressEnter.onkeydown.key('Enter');

      // adiciona o evento de click ao BOTÃO de ADICIONAR COMPROMISSOS
      addNewTaskButton.addEventListener('click', addNewTaskKey);
      inputTask.addEventListener('keydown', addNewTaskKey);


      function addNewTaskKey(onclick) {
        
        // verifica o CONTEÚDO da caixa de textos COMPROMISSOS
        const pressEnterKey = onclick.key;
        if(inputContent == '') {
          alert('Erro! Por favor, digite um nome para a nova tarefa.');
          
        } else if(pressEnterKey == 'Enter' && inputContent == '') {
          alert('Erro! Por favor, digite um nome para a nova tarefa.');
        
        // adiciona o CONTEÚDO da caixa de textos aos COMPROMISSOS
        } else {
          const tasksList = document.querySelector('.my-tasks');
          tasksList.appendChild(inputContent);

        }
        
      }
  }
  addTask();