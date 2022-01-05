//  > Estado - Select
//    Todos os estados do Brasil;
//    Utilize estruturas de repetição via JavaScript para gerar os <option>;
//    Campo obrigatório.

let estados = document.querySelector('#select-estados');
let listaEstados = ['AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let i = 0; i < listaEstados.length; i += 1) {
  let itemEstado = document.createElement('option');
  let estado = listaEstados[i];
  itemEstado.innerText = estado;
  estados.appendChild(itemEstado);
}

// corrigido