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

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderedNumbers = orderedNumbers => {
  for(let i = 1; i <= orderedNumbers.length; i += 1) {
    for(let c = 0; c <= i; c += 1) {
      if (orderedNumbers[i] < orderedNumbers[c]) {
        let temp = orderedNumbers[i];
        orderedNumbers[i] = orderedNumbers[c];
        orderedNumbers[c] = temp;
      }
    }
  }
  return console.log(`Os números ${orderedNumbers} se encontram ordenados de forma crescente`);
}
orderedNumbers(oddsAndEvens);

//    > Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

oddsAndEvens.sort((a, b) => {
  return a -b}
);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);
