const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const create = (element) => document.createElement(element);
let i = 0;
const daysUl = document.getElementById('days');

const createDaysOfTheMonth = () => {
  while (i < decemberDaysList.length) {
    const li = create('li');
      li.innerText = decemberDaysList[i];
      li.className = 'day';
      if (decemberDaysList[i] === 24 || decemberDaysList[i] === 31) {
        li.className = 'day holiday';
      };
      if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
        li.className = 'day friday';
      };
      if (decemberDaysList[i] === 25) {
        li.className = 'day holiday friday';
      };
    daysUl.appendChild(li);
    i += 1;
  };
};

createDaysOfTheMonth();

const createHolidays = (holiday) => {
  const btn = create('button');
    btn.innerHTML = holiday;
    btn.id = 'btn-holiday';
  const buttonDiv = document.querySelector('.buttons-container');
    buttonDiv.appendChild(btn);
};

createHolidays('Feriados');

const classColorChange = () => {
  const days = document.getElementsByClassName('holiday');
  const holidayBtn = document.getElementById('btn-holiday');
  holidayBtn.addEventListener('click', () => {
    i = 0;
    while (i < days.length) {
      if (days[i].style.backgroundColor === 'rgb(238, 238, 238)') {
        days[i].style.backgroundColor = 'rgb(255, 155, 100)';
      } else {
        days[i].style.backgroundColor = 'rgb(238, 238, 238)';
      }
      i += 1;
    };
  });
};

classColorChange();

const createFridayBtn = (friday) => {
  const fridayBtn = create('button');
    fridayBtn.innerText = friday;
    fridayBtn.id = 'btn-friday';
  const btnContainer = document.querySelector('.buttons-container');
    btnContainer.appendChild(fridayBtn);
};

createFridayBtn('Sexta-feira');


const changeFriday = () => {
  const numberDays = [4, 11, 18, 25];
  const fridays = document.getElementsByClassName('friday');
  const fridayBtn = document.getElementById('btn-friday');
  fridayBtn.addEventListener('click', () => {
    i = 0;
    while (i < fridays.length) {
      if (fridays[i].innerText !== 'SEXTOU!') {
        fridays[i].innerText = 'SEXTOU!';      
      } else if (fridays[i].innerText === 'SEXTOU!') {
        fridays[i].innerText = numberDays[i];
      };
      i += 1;
    };
  });
};

changeFriday();

const allDays = document.getElementsByClassName('day');

const zoomIn = (day) => day.target.style.fontSize = '25px';
const zoomOut = (day) => day.target.style.fontSize = '20px';

i = 0;
while (i < allDays.length) {
  allDays[i].addEventListener('mouseover', zoomIn);
  allDays[i].addEventListener('mouseleave', zoomOut);
  i += 1;
};

const parentDiv = document.querySelector('.my-tasks');

const addTask = (task) => {
  const newTask = create('span');
    newTask.innerHTML = task;
    parentDiv.appendChild(newTask);
}

addTask('cozinhar');

const addTaskLegend = (color) => {
  const newDiv = create('div');
    newDiv.className = 'task';
    newDiv.style.backgroundColor = color;
  parentDiv.appendChild(newDiv);
}

addTaskLegend('#FFC1F1');

const selectTask = () => {
  const tasks = document.getElementsByClassName('task');
  i = 0
  while (i < tasks.length) {
    tasks[i].addEventListener('click', (element) => {
      if (element.target.className.includes('task')) {
        element.target.classList.toggle('selected');
      }
    });
    i += 1;
  };
};

selectTask();

const setDayTask = () => {
  const getDay = document.getElementsByClassName('day');
  i = 0;
  while (i < getDay.length) {
    getDay[i].addEventListener('click', (day) => {
      const getTaskColor = document.querySelector('.selected').style.backgroundColor;
      if (day.target.style.color === getTaskColor) {
        day.target.style.color = 'rgb(119,119,119)';
      } else if (day.target.style.backgroundColor !== getTaskColor) {
        day.target.style.color = getTaskColor;
      }
    });
    i += 1;
  }
}

setDayTask();

const addToCalendar = () => {
  const addTaskBtn = document.getElementById('btn-add');
  const taskInput = document.getElementById('task-input');
  const taskContainer = document.querySelector('.task-list');

  const emptyEnter = (event) => {
    const enterKey = event.key;
    if (taskInput.value === '' && enterKey === 'Enter') {
      return window.alert('ERRO! - Digite uma tarefa!');
    } else if (enterKey === 'Enter') {
      const newElement = create('li');
        newElement.innerHTML = taskInput.value;
      taskContainer.appendChild(newElement);
      taskInput.value = '';
    };
  };

  const addTask = () => {
    if (taskInput.value === '') {
      window.alert('ERRO! - Digite uma tarefa!');
    } else {
      const newElement = create('li');
        newElement.innerHTML = taskInput.value;
      taskContainer.appendChild(newElement);
      taskInput.value = '';
    };
  };

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keydown', emptyEnter);

};

addToCalendar();