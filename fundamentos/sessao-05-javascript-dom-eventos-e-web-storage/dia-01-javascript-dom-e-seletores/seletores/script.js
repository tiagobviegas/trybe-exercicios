const emergencyDiv = document.querySelectorAll('.emergency-tasks div');
const emergencyTasks = document.querySelector('.emergency-tasks');
const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyDiv = document.querySelectorAll('.no-emergency-tasks div');
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
const headerBgColor = document.querySelector('#header-container');
const footerBgColor = document.querySelector('#footer-container');

const tasksStyle = (divA, tasksA, h3A, divB, tasksB, h3B) => {
  for (let i = 0; i < divA.length; i += 1) {
    h3A[i].style.backgroundColor = '#C219E2';
    h3B[i].style.backgroundColor = '#303030';
    divA[i].style.backgroundColor = '#FAA08A';
    divB[i].style.backgroundColor = '#EFD446';
  };
  tasksA.style.backgroundColor = '#FAA08A';
  tasksB.style.backgroundColor = '#EFD446';
  headerBgColor.style.backgroundColor = '#26B074';
  footerBgColor.style.backgroundColor = '#0E3E3E';
};

tasksStyle(emergencyDiv, emergencyTasks, emergencyTasksH3, noEmergencyDiv, noEmergencyTasks, noEmergencyTasksH3);