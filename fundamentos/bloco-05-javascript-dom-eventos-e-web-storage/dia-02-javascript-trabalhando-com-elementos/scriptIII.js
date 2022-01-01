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
    const elementoBase = document.querySelector('#elementoOndeVoceEsta');
    const elementoPai = elementoBase.parentElement;
    const novoElemento = document.createElement('section');
      novoElemento.innerText = 'Novo irmão de Elemento Onde Você Está'
    elementoPai.appendChild(novoElemento);
//
//  2. Crie um filho para elementoOndeVoceEsta;
    const novoFilhoElementoOndeVoceEsta = document.createElement('section');
      novoFilhoElementoOndeVoceEsta.innerHTML = 'Novo filho de Elemento Onde Você Está';
    elementoBase.appendChild(novoFilhoElementoOndeVoceEsta);
//
//  3. Crie um filho para primeiroFilhoDoFilho;
    const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
    const novoFilhoPrimeiroFilhoDoFilho = document.createElement('p');
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
//  const paiDoPai = document.querySelector('#paiDoPai');
//  const pai = document.querySelector('#pai');
//  const removeElementoDePai = pai.children;
//  pai.removeChild(removeElementoDePai[0]);
//  const removeElementosChildren = elementoBase.children;
//  elementoBase.removeChild(removeElementosChildren[1]);
//