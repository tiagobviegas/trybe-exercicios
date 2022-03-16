//  Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
//
let pai = document.getElementById('pai');
let paiChildren = pai.childNodes;
for(let i = paiChildren.length; i > 0; i -= 1) {
  if(paiChildren.id !== 'elementoOndeVoceEsta' && paiChildren.id !== 'primeiroFilhoDoFilho'){
    pai.removeChild(paiChildren);
  }
}