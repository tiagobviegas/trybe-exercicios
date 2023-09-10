// Array e loop for

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

// 1)
for (let i = 0; i < numbers.length; i += 1) {
  let elementos = numbers[i];
  console.log(elementos)
}

// 2)

for (let i = 0; i < numbers.length; i += 1) {
  resultado += numbers[i];
}
console.log(resultado);

// 3)
let soma = 0
let media = 0;
let elementos = numbers.length;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];  
}
media = soma / elementos;
console.log(media);

// 4)
(media > 20)
  ? console.log('O valor da média aritmética é maior que 20')
  : console.log('O valor da média aritmética é menor ou igual a 20');

// 5)
let maiorNumero = 0;

for (let i = 0; i < numbers.length; i += 1) {
  (numbers[i] > maiorNumero) ? maiorNumero = numbers[i] : maiorNumero;
}
console.log(maiorNumero);

// 6)
let impares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  (numbers[i] % 2 !== 0) ? impares += 1 : impares;
  if (impares === 0) {
    impares = 'Nenhum valor ímpar encontrado';
  }
}
console.log(impares);

// Desafio 1:
let fatorial = 10;
let numeroAtual = fatorial;
let proximoNumero = 0;

for (let i = fatorial; i > 1; i -= 1) {
  proximoNumero = i - 1;
  resultado = numeroAtual * proximoNumero;
  numeroAtual = resultado;
}
console.log(resultado);

// Desafio 2:
let word = 'tryber';
console.log(word.split('').reverse().join(''));

// Desafio 3:
//
let n = 5;
let asterisco = '';

for (let i = 0; i < n; i += 1) {
  for (let c = 0; c < n; c += 1) {
    asterisco += '*';
  } 
  console.log(asterisco);
  asterisco = '';
}

// Desafio 4:

for (let i = 0; i < n; i += 1) {
  asterisco += '*';
  console.log(asterisco);
}

// Desafio 5:

asterisco = '';

for (n; n > 0; n -= 1) {
  let espaco = '';
  asterisco += '*';
  for (let i = n - 1; i > 0; i -= 1) {
    espaco += ' ';
  }
  console.log(espaco+asterisco);
}
