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
//
//
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

  const mainElement = document.getElementById('pai');
  const children = mainElement.childNodes;
  for(let i = children.length -1; i >= 0; i -= 1) {
    if(children[i].id !== 'elementoOndeVoceEsta'){
    mainElement.removeChild(children[i]);
    }
  }

  const mainElement2 = document.getElementById('elementoOndeVoceEsta');
  const children2 = mainElement2.childNodes;
  for(let i = children2.length -1; i >= 0; i -= 1) {
    if(children2[i].id !== 'primeiroFilhoDoFilho'){
    mainElement2.removeChild(children2[i]);
    }
  }