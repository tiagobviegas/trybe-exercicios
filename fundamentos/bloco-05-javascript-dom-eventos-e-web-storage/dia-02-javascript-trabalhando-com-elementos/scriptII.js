

// <body>
//   <main id="paiDoPai">
//     <section id="pai">
//       <section id="primeiroFilho"></section>
//       <section id="elementoOndeVoceEsta">
//         <section id="primeiroFilhoDoFilho"></section>
//         <section id="segundoEUltimoFilhoDoFilho"></section>
//       </section>
//       Atenção!
//       <section id="terceiroFilho"></section>
//       <section id="quartoEUltimoFilho"></section>
//     </section>
//   </main>
//   <script src="scriptII.js"></script>
// </body>

////
//  1. Crie um irmão para elementoOndeVoceEsta;
    const pai = document.getElementById('pai');
    const newElement = document.createElement('div'); 
    pai.append(newElement);

//  2. Crie um filho para elementoOndeVoceEsta;
    const ondeEstou = document.getElementById('elementoOndeVoceEsta');
    const newChild = document.createElement('section');
    ondeEstou.appendChild(newChild).innerText = 'Novo Filho de Elemento Onde Você está';

//  3. Crie um filho para primeiroFilhoDoFilho;
    const firstChild = document.getElementById('primeiroFilhoDoFilho');
    const newChild2 = document.createElement('span');
    firstChild.appendChild(newChild2).innerText = 'Novo Filho do Primeiro Filho do Filho'

//  4. A partir desse filho criado, acesse terceiroFilho.
    const pai2 = newChild2.parentElement.parentElement;
    const terceiroFilho = pai2.nextElementSibling;