
let ingredientsList = ['500g de feijão carioquinha cozido', '200g de toucinho', '1 concha de óleo', '1 cebola média picada', '4 dentes de alho', '5 ovos', '1 colher de sopa de sal com alho', 'Cheiro verde a gosto', '200g de farinha de mandioca'];

let list = document.querySelector('.ingredients-list');

for(let i = 0; i < ingredientsList.length; i += 1) {
  let ingredients = ingredientsList[i];
  let listItems = document.createElement('li');
  listItems.className = 'ingredients';
  listItems.innerText = ingredients;
  list.appendChild(listItems); 
}

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
  const paiDoPai = document.querySelector('#paiDoPai');
  const pai = document.querySelector('#pai');
  const removeElementoDePai = pai.children;
  pai.removeChild(removeElementoDePai[0]);
  const removeElementosChildren = elementoBase.children;
  elementoBase.removeChild(removeElementosChildren[1]);
*/
//
//
/*

let ingredientsList = document.querySelector('.ingredients-list')

for (let i = 0; i < ingredientsItems.length; i += 1) {
  let ingredient = ingredientsItems[i];

  let ingredientsListItems = document.createElement('li');
  ingredientsListItems.innerText = ingredient;
  
  ingredientsListItems.className = 'ingredients-list-item';

  ingredientsList.appendChild(ingredientsListItems);
}

let ingredientsListItems = document.querySelectorAll('.ingredients-list-item');

for(let i = 0; i < ingredientsListItems.length; i += 1) {
  let element = ingredientsListItems[i];
  if (element.innerText.includes('toucinho')) {
    ingredientsList.removeChild(element);
  }
}
*/