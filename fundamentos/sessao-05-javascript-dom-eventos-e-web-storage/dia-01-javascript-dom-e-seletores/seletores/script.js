const emergencyDiv = document.querySelectorAll('.emergency-tasks div');
const emergencyTasks = document.getElementsByClassName('emergency-tasks');
const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');

const emergencyStyle = (tasksDiv, tasks, h3) => {
  for (let i = 0; i < tasksDiv.length; i += 1) {
    h3[i].style.backgroundColor = '#C219E2';
    tasksDiv[i].style.backgroundColor = '#FAA08A';
    tasks[i].style.backgroundColor = '#FAA08A';
  };
};

emergencyStyle(emergencyDiv, emergencyTasks, emergencyTasksH3);