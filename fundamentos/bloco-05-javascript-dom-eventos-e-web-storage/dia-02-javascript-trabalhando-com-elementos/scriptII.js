
let ingredientsItems = ['500g de feijão carioquinha cozido', '200g de toucinho', '1 concha de óleo', '1 cebola média picada', '4 dentes de alho', '5 ovos', '1 colher de sopa de sal com alho', 'Cheiro verde a gosto', '200g de farinha de mandioca'];

let elementSelected = document.querySelector('.ingredients-section');
let list = document.createElement('ul');
list.className = 'ingredients-list';
elementSelected.appendChild(list);

let ingredientsList = document.querySelector('.ingredients-list');

for (let i = 0; i < ingredientsItems.length; i += 1) {
  let ingredientItem = document.createElement('li');
  let ingredient = ingredientsItems[i];
  ingredientItem.innerText = ingredient;
  ingredientsList.appendChild(ingredientItem);
}

//  let maisIngredientes = document.querySelector('.ingredients-section');
//  let novoTitulo = document.createElement('h2');
//  novoTitulo.className = 'feijao-apimentado';
//  novoTitulo.innerText = 'Apimente seu o feijão!';
//  maisIngredientes.append(novoTitulo);
//  
//  let ingredientesApimentados = ['1 porção de torresmo', '1 pitada de pimenta do reino', 'Sal a gosto'];
//  
//  let lista = document.createElement('ul');
//  lista.className = 'lista-apimentada';
//  maisIngredientes.appendChild(lista);
//  
//  for (let i = 0; i < ingredientesApimentados.length; i += 1) {
//    let ingredienteItem = document.createElement('li');
//    let ingrediente = ingredientesApimentados[i];
//    ingredienteItem.innerText = ingrediente;
//    lista.appendChild(ingredienteItem);
//  }
//  
//  let preparoApimentado = document.querySelector('.recipe-preparation-section');
//  let subLista = document.createElement('h4');
//  subLista.innerText = 'Para apimentar:'
//  preparoApimentado.appendChild(subLista);
//  let listaPreparo = document.createElement('ol');
//  listaPreparo.className = 'preparo-apimentado';
//  preparoApimentado.appendChild(listaPreparo);
//  
//  let descricaoPreparo = ['Após o cozimento, adicione o torresmo, a pimenta e o sal', 'Misture bem', 'Sirva!']
//  
//  for (let i = 0; i < descricaoPreparo.length; i += 1) {
//    let itemPreparo = document.createElement('li');
//    let passoPreparo = descricaoPreparo[i];
//    itemPreparo.className = 'passo-preparo-apimentado';
//    itemPreparo.innerText = passoPreparo;
//    listaPreparo.appendChild(itemPreparo);
//  }


/*
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
////
////  1. Crie um irmão para elementoOndeVoceEsta;
//    let elementoBase = document.querySelector('#elementoOndeVoceEsta');
//    let elementoPai = elementoBase.parentElement;
//    let novoElemento = document.createElement('section');
//      novoElemento.innerText = 'Novo irmão de Elemento Onde Você Está'
//    elementoPai.appendChild(novoElemento);
////
////  2. Crie um filho para elementoOndeVoceEsta;
//    let novoFilhoElementoOndeVoceEsta = document.createElement('section');
//      novoFilhoElementoOndeVoceEsta.innerHTML = 'Novo filho de Elemento Onde Você Está';
//    elementoBase.appendChild(novoFilhoElementoOndeVoceEsta);
////
////  3. Crie um filho para primeiroFilhoDoFilho;
//    let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
//    let novoFilhoPrimeiroFilhoDoFilho = document.createElement('p');
//      novoFilhoPrimeiroFilhoDoFilho.innerText = 'Filho do Primeiro Filho do Filho';
//    primeiroFilhoDoFilho.appendChild(novoFilhoPrimeiroFilhoDoFilho);
////
////  4. A partir desse filho criado, acesse terceiroFilho.
//    novoFilhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
//
