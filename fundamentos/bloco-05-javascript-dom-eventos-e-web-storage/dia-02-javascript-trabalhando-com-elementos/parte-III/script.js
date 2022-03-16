//  Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
//

const paiChildren = document.getElementById('pai').childNodes;
const ondeEstou = document.getElementById('elementoOndeVoceEsta');
const ondeEstouChildren = ondeEstou.childNodes;

for (let i = paiChildren.length - 1; i > 0; i -= 1) {
  if (paiChildren[i].id !== ondeEstou.id) {
    paiChildren[i].remove();
  } else {
    ondeEstouChildren[i].remove();
  }
}

const paiChildren = document.getElementById('pai').childNodes;
const ondeEstou = document.getElementById('elementoOndeVoceEsta');
const ondeEstouChildren = ondeEstou.childNodes;

for (let i = paiChildren.length - 1; i > 0; i -= 1) {
  if (paiChildren[i].id !== ondeEstou.id) {
    paiChildren[i].remove();
  } else {
    ondeEstouChildren[i].remove();
  }
}
