// 1 - Crie um irmão para elementoOndeVoceEsta .

  const primeiroIrmao = document.createElement('div');
  const pai = document.querySelector('#pai');
  primeiroIrmao.id = 'irmao';
  pai.appendChild(primeiroIrmao);

// 2 - Crie um filho para elementoOndeVoceEsta .

  const novoFilho = document.createElement('div');
  const ondeEsta = document.getElementById('elementoOndeVoceEsta');
  novoFilho.id = 'novoFilho';
  ondeEsta.appendChild(novoFilho);

// 3 - Crie um filho para primeiroFilhoDoFilho .

  const netoDoPai = document.createElement('div');
  const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
  netoDoPai.id = 'netoDoPai';
  filhoDoFilho.appendChild(netoDoPai);

// 4 - A partir desse filho criado, acesse terceiroFilho .

  netoDoPai.parentElement.parentElement.nextElementSibling
  