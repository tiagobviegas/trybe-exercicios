// Alterando o estilo do documento

const body = document.getElementById('container');
  body.style.backgroundColor = '#E8E8E8';
  body.style.fontFamily = 'Arial';

// Alterando o estilo do header

const headerContainer =  document.querySelector('#header-container');
  headerContainer.style.backgroundColor = '#199C60';

// Alterando as divs "Não-urgente e importante e Não-urgente e Não importante"

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
  emergencyTasks.style.backgroundColor = '#F0AA82';
  const emergencySubs = emergencyTasks.getElementsByTagName('h3');
    for(i = 0; i < emergencySubs.length; i += 1) {
      emergencySubs[i].style.backgroundColor = '#C06CD4';
      emergencySubs[i].style.fontSize = '17px';
    }

// Alterando as divs "Não-urgente e importante e Não-urgente e Não importante"

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks')[0];
  noEmergencyTasks.style.backgroundColor = '#EDD54D';
  const noEmergencySubs = noEmergencyTasks.querySelectorAll('h3');
    for(i = 0; i < noEmergencySubs.length; i += 1) {
      noEmergencySubs[i].style.backgroundColor = '#303030';
      noEmergencySubs[i].style.fontSize = '17px';
    }

// Alterando o estilo do footer

const footerContainer = document.getElementById('footer-container');
    footerContainer.style.backgroundColor = '#013F37';
    footerContainer.style.fontSize = '80%';