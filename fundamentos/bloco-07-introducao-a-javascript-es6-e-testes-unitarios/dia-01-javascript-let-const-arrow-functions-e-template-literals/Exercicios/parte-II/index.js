// Exercícios - Parte II

//  1. Crie uma função que receba um número e retorne seu fatorial.

//  Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

//  Com base nessas informações:
//    > Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
//    > Dentro da função crie uma variável result.
//    > Crie a lógica para retornar o fatorial de N!.
//    > Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).

//  Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.
//    > Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial = (num) => {
  let result = num;
  for (let i = num; i > 1; i -= 1) {
    result *= (i - 1)
  }
  return result
};

const number = (num) => num < 2 ? 1 : fatorial(num);

console.log(`Este é o fatorial resultado da função: ${number(5)}`);

//___________________________________________________________________________________

//  2. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
//  Exemplo:
//    longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

//  Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.
//    > Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().

// const longestWord = string => {
//   const words = string.split(' ');
//   let longest = ' ';
//   for (let letters of words) {
//     if (letters.length >= longest.length) {
//       longest = letters
//     };
//   }
//   return console.log(longest)
// }

const longestWord = string => {
  const words = string.split(' ');
  const longest = words.sort((a, b) => b.length - a.length); 
  return console.log(longest[0]);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')

//___________________________________________________________________________________

//  3. Crie uma página HTML que possua um contador de cliques.

//  Além da estrutura básica do HTML, sua página deve possuir:
//    > Uma tag que receberá o valor atualizado da quantidade de clicks do botão.
//    > Um botão com o texto click aqui!, que receberá um event listener do tipo click;

//  Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):
//    > Crie uma variável clickCount que irá acumular o número de clicks do botão;
//    > Crie a lógica do evento, para que a cada click no botão seja adicionado o valor de 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.

//  Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.


//___________________________________________________________________________________

//  4. Crie duas funções JavaScript com as seguintes especificações:

//  Não se esqueça de usar template literals

//  > Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
//    >> O nome da função deverá ser substituaX;
//    >> A função deverá receber um nome por parâmetro;
//    >> Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
//    >> A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
//       Exemplo:
//         Parâmetro: 'Bebeto'
//         Retorno: 'Tryber Bebeto aqui!'
//       
//       Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

//  > Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
//    >> O nome da função deverá ser minhasSkills;
//    >> A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
//    >> Declare dentro da função uma variável com o nome skills, do tipo const;
//      >>>> A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
//    >> Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
//      Exemplo de retorno:
//        Tryber Bebeto aqui!
//        Minhas três principais habilidades são:
//          . JavaScript
//          . HTML
//          . CSS
