// Exercícios - Parte I

// 1. Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
//  > Modifique a estrutura da função para que ela seja uma arrow function;
//  > Modifique as variáveis para que respeitem o escopo onde estão declaradas;
//  > Modifique as concatenações para template literals.

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// __________________________________________________________________

// 2. Crie uma função que retorne um array em ordem crescente.
//  > Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
//  > Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  
  // Seu código aqui.
  let change;
  for (let i = 0; i < oddsAndEvens.length - 1; i += 1) {
    if (oddsAndEvens[i] < oddsAndEvens[i+1]) {
      change = oddsAndEvens[i];
      oddsAndEvens[i] = oddsAndEvens[i+1];
      oddsAndEvens[i+1] = change;
      i = 0
    }
  }
  return `Os números ${oddsAndEvens.reverse()} se encontram ordenados de forma crescente!`;
};

console.log(sortOddsAndEvens()); 


//  > Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

console.log(oddsAndEvens.sort((a, b) => a - b));
