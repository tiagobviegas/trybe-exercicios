// Adicione o código abaixo a uma página HTML e adicione uma tag script . Você deverá fazer tudo a seguir usando somente JavaScript .
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
//
//  1. Acesse o elemento elementoOndeVoceEsta;
    const ondeEstou = document.getElementById('elementoOndeVoceEsta');
//
//  2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele;
    const paiOndeEstou = ondeEstou.parentElement;
      paiOndeEstou.style.color = 'red';
//
//  3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
    const primeiroNeto = document.getElementById('primeiroFilhoDoFilho');
      primeiroNeto.innerText = 'Este é o texto inserido para o Primeiro Filho do Filho.';
//
//  4. Acesse o primeiroFilho a partir de pai;
    const pai = document.getElementById('pai');
      let primeiroFilho = pai.firstElementChild;
//
//  5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta;
    const firstSibling = ondeEstou.previousElementSibling;
//
//  6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta;
    const text = ondeEstou.nextSibling;
//
//  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta;
    const terceiroFilho1 = ondeEstou.nextElementSibling;
//
//  8. Agora acesse o terceiroFilho a partir de pai.
    const terceiroFilho2 = pai.children[2];