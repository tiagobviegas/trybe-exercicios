const emergencyDiv = document.querySelectorAll('.emergency-tasks div');
for (let i = 0; i < emergencyDiv.length; i += 1) {
  emergencyDiv[i].style.backgroundColor = '#FAA08A';
}

const emergencyTasks  = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = '#FAA08A';
}

const emergencyTasksH3  = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksH3.length; i += 1) {
  emergencyTasksH3[i].style.backgroundColor = '#C219E2';
}