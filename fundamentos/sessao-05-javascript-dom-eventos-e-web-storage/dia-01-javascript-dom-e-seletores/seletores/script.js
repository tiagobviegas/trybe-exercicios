const emergencyDiv = document.querySelectorAll('.emergency-tasks div');
const emergencyTasks = document.querySelector('.emergency-tasks');
const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyDiv = document.querySelectorAll('.no-emergency-tasks div');
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
const headerBgColor = document.querySelector('#header-container');
const footerBgColor = document.querySelector('#footer-container');

const emergencyStyle = (tasksDiv, tasks, h3) => {
  for (let i = 0; i < tasksDiv.length; i += 1) {
    h3[i].style.backgroundColor = '#C219E2';
    tasksDiv[i].style.backgroundColor = '#FAA08A';
  };
  tasks.style.backgroundColor = '#FAA08A';
};

const noEmergencyStyle = (tasksDiv, tasks, h3) => {
  for (let i = 0; i < tasksDiv.length; i += 1) {
    h3[i].style.backgroundColor = '#303030';
    tasksDiv[i].style.backgroundColor = '#EFD446';
  };
  tasks.style.backgroundColor = '#EFD446';
};

headerBgColor.style.backgroundColor = '#26B05C';
emergencyStyle(emergencyDiv, emergencyTasks, emergencyTasksH3);
noEmergencyStyle(noEmergencyDiv, noEmergencyTasks, noEmergencyTasksH3);
footerBgColor.style.backgroundColor = '#0A462C';