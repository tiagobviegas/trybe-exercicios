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
const createElement = (element) => document.createElement(element);
let i = 0;
const daysUl = document.getElementById('days');

const createDaysOfTheMonth = () => {
  while (i < decemberDaysList.length) {
    const li = createElement('li');
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
  const btn = createElement('button');
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
        days[i].style.backgroundColor = 'red';
        i += 1;
      }
      holidayBtn.addEventListener('click', () => {
        i = 0;
        while (i < days.length) {
          days[i].style.backgroundColor = 'rgb(238,238,238)';
          i += 1;
        }
        classColorChange();
      })
    })
};

classColorChange();