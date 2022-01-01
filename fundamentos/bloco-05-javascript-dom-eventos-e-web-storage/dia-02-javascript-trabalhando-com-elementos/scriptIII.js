/*
<body>
  <main id="paiDoPai">
    <section id="pai">  <<<<<<<<<<<<<<<<<<
      <section id="primeiroFilho"></section>
      <section id="elementoOndeVoceEsta">     <<<<<<<<<<<<<<<<<<
        <section id="primeiroFilhoDoFilho"></section>     <<<<<<<<<<<<<<<<<<
        <section id="segundoEUltimoFilhoDoFilho"></section>
      </section>
      Atenção!
      <section id="terceiroFilho"></section>
      <section id="quartoEUltimoFilho"></section>
    </section>
  </main>
  <script src="scriptII.js"></script>
</body>
</html>
*/
//
//  1. Crie um irmão para elementoOndeVoceEsta;
    let elementoBase = document.querySelector('#elementoOndeVoceEsta');
    let elementoPai = elementoBase.parentElement;
    let novoElemento = document.createElement('section');
      novoElemento.innerText = 'Novo irmão de Elemento Onde Você Está'
    elementoPai.appendChild(novoElemento);
//
//  2. Crie um filho para elementoOndeVoceEsta;
    let novoFilhoElementoOndeVoceEsta = document.createElement('section');
      novoFilhoElementoOndeVoceEsta.innerHTML = 'Novo filho de Elemento Onde Você Está';
    elementoBase.appendChild(novoFilhoElementoOndeVoceEsta);
//
//  3. Crie um filho para primeiroFilhoDoFilho;
    let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
    let novoFilhoPrimeiroFilhoDoFilho = document.createElement('p');
      novoFilhoPrimeiroFilhoDoFilho.innerText = 'Filho do Primeiro Filho do Filho';
      primeiroFilhoDoFilho.appendChild(novoFilhoPrimeiroFilhoDoFilho);
//
//  4. A partir desse filho criado, acesse terceiroFilho.
    novoFilhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
//
//
//  PARTE III
//
//  Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
//
    let paiDoPai = document.querySelector('#paiDoPai');
    let pai = document.querySelector('#pai');
    let primeiroFilho = document.querySelector('#primeiroFilho');
      pai.removeChild(primeiroFilho);
      primeiroFilhoDoFilho.removeChild(novoFilhoPrimeiroFilhoDoFilho);
    
//