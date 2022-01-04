/*
let ingredientsItems = ['500g de feijão carioquinha cozido', '200g de toucinho', '1 concha de óleo', '1 cebola média picada', '4 dentes de alho', '5 ovos', '1 colher de sopa de sal com alho', 'Cheiro verde a gosto', '200g de farinha de mandioca'];

let ingredientsList = document.querySelector('.ingredients-list')

for (let i = 0; i < ingredientsItems.length; i += 1) {
  let ingredient = ingredientsItems[i];
  
  let ingredientListItem = document.createElement('li');
  ingredientListItem.innerText = ingredient;
  
  ingredientsList.appendChild(ingredientListItem);
}

<body>
  <main id="paiDoPai">
    <section id="pai">
      <section id="primeiroFilho"></section>
      <section id="elementoOndeVoceEsta">
        <section id="primeiroFilhoDoFilho"></section>
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

