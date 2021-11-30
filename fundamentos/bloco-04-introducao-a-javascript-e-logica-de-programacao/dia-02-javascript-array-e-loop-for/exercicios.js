// APROFUNDE SEUS CONHECIMENTOS
// 
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
// 
// 
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 
//
// 1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// 
// for (let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index])
// }
// 
// 
// 2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   soma += numbers[index];
// }
// console.log(soma)
// 
// 3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// 
//   A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// 
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   soma += numbers[index];
// }
// console.log(soma/numbers.length)
// 
// 4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   soma += numbers[index];
// }
// if (soma/numbers.length > 20) {
//   console.log("valor maior que 20")
// } else {
//   console.log("valor menor ou igual a 20")
// }
//
//
// 5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//
//  let maior = 0;
//  for (let index = 0; index < numbers.length; index += 1){
//    if (numbers[index] > maior){
//      maior = numbers[index]
//    };
//  }
//  console.log(maior);
// 
// 
// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//  
//  let impares = [];
//  for (let index = 0; index < numbers.length; index += 1){
//    if (numbers[index] % 2 > 0){
//      impares.push(numbers[index])
//    } else if (impares.leght == 0){
//      console.log("nenhum valor ímpar encontrado")
//    }
//  }
//  console.log(impares)
//  
//  
// 7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// 
// 8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// 
// 9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// 
// */