//  Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
//

const pai = document.getElementById('pai')
const paiChildren = pai.childNodes;
const ondeEstou = document.getElementById('elementoOndeVoceEsta')
const ondeEstouChildren = ondeEstou.childNodes;
for (let i = paiChildren.length - 1; i > 0; i -= 1) {
  if (paiChildren[i].id !== ondeEstou.id) {
    paiChildren[i].remove();
  } else if (paiChildren[i].id === ondeEstou.id) {
    if (ondeEstouChildren[i].id !== 'primeiroFilhoDoFilho') {
      ondeEstouChildren[i].remove();
    }
  }
}