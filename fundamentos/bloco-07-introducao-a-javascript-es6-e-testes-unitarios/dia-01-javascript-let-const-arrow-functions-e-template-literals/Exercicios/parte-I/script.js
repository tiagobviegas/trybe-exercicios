// Agora você vai fazer alguns exercícios de fixação.
//
//  1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
//
//    > Modifique a estrutura da função para que ela seja uma arrow function .
//    > Modifique as concatenações para template literals .
//    > Copie o código abaixo.
//
//  const testingScope = escopo => {
//    if (escopo === true) {
//      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//      console.log(ifScope);
//    } else {
//      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//      console.log(elseScope);
//    }
//  }
//  
//  testingScope(true);
//
//
//  2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
//
//    > Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

//    > Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

//  Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderedNumbers = array => {
  for(let i = 1; i < array.length; i += 1) {
    for(let c = 0; c < i; c += 1) {
      if (array[i] < array[c]) {
        let temp = array[i];
        array[i] = array[c];
        array[c] = temp;
      }
    }
  }
  return (console.log(array));
}
orderedNumbers(oddsAndEvens); // será necessário alterar essa linha 😉
