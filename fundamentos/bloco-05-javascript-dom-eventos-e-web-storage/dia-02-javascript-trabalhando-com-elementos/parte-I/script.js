// 1 - Acesse o elemento elementoOndeVoceEsta .
  const ondeEsta = document.getElementById('elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
  const pai = ondeEsta.parentElement;

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
  const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
  
// 4 - Acesse o primeiroFilho a partir de pai .
  const primeiroFilho = pai.firstChild;

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroIrmao = ondeEsta.previousElementSibling;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const texto = ondeEsta.nextSibling;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho1 = ondeEsta.nextElementSibling;
