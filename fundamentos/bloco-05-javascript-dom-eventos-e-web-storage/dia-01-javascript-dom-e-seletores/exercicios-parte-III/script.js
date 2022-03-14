document.getElementById('container').style.backgroundColor = '#F1F1F1';

const header = document.getElementById('header-container');
header.style.backgroundColor = '#2AA863';
header.style.fontFamily = 'arial'

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = '#FFAF97';

const noEmergencyTask = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTask.style.backgroundColor = '#FCE353';

const noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
for(let i = 0; i < noEmergencyTitles.length; i += 1) {
  noEmergencyTitles[i].style.backgroundColor = '#001D16';
  noEmergencyTitles[i].style.fontFamily = 'arial';
}

const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i < emergencyTitles.length; i += 1) {
  emergencyTitles[i].style.backgroundColor = '#B900FF';
  emergencyTitles[i].style.fontFamily = 'arial';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#033E30';
footer.style.fontFamily = 'arial';