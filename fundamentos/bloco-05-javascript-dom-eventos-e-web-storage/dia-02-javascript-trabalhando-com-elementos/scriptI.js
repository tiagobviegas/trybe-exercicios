//  Diferença entre nextSibling e nextElementSibling 
//
//  console.log(document.getElementById('start').nextSibling) // nó
//  
//  console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>  
//  
//  <main id="paiDoPai">
//    <section id="pai">
//      <section id="primeiroFilho"></section>
//      <section id="elementoOndeVoceEsta">
//        <section id="primeiroFilhoDoFilho"></section>
//        <section id="segundoEUltimoFilhoDoFilho"></section>
//      </section>
//      Atenção!
//      <section id="terceiroFilho"></section>
//      <section id="quartoEUltimoFilho"></section>
//    </section>
//  </main>
//  
//  1. Acesse o elemento elementoOndeVoceEsta;
      document.querySelector('#elementoOndeVoceEsta');
//  2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele;
      let paiElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').parentNode;
        paiElementoOndeVoceEsta.style.color = 'green';
//  3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
      let textoprimeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
        textoprimeiroFilhoDoFilho.innerText = 'texto 1';
//  4. Acesse o primeiroFilho a partir de pai;
      let pai = document.querySelector('#pai');
        pai.firstChild;
//  5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta;
      let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
        elementoOndeVoceEsta.firstChild;
//  6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta;
        elementoOndeVoceEsta.nextSibling;
//  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta;
        elementoOndeVoceEsta.nextElementSibling;
//  8. Agora acesse o terceiroFilho a partir de pai.
        pai.children[2]