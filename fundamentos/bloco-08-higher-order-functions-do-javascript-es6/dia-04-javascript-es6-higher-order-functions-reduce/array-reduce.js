// COMPREENDENDO O FUNCIONAMENTO DO REDUCE PARA ENCONTRAR O MAIOR NÚMERO DE UM ARRAY.

// O operador ternário (bigger > number ? bigger : number) fará uma comparação entre o valor do último número vinculado ao accumulator (bigger) e ao current number (number) e, de acordo com a lógica, vai retorna o maior valor para number ou para bigger de acordo com o que foi estabelecido como "true" ou "false" no operador ternário após cada iteração. Este maior valor será o parâmetro ou de "bigger" ou de "number" para a comparação da próxima iteração.

// Rode o código abaixo para a descrição sobre como funciona o acumulador quando usado juntamente com o current number para fazer uma condicional usando operador ternário:

const numbers = [24, 93, -3, 3, 18];

const getBigger = (bigger, number, index) => {

console.log(`
${index + 1}ª iteração

"bigger" = ${bigger}
"number" = ${number}

bigger > number ? bigger : number

retorno: ${(bigger > number) ? `bigger = ${bigger}` : `number = ${number}`}
__________________________`);

  return ((bigger > number) ? bigger : number);
};

const bigger = numbers.reduce(getBigger, 0);

console.log(`
"bigger" (o acumulador) apresentou 
o maior número na 3ª iteração da HOF Reduce 
e por isso o operador ternário retornou 
seu valor como o maior número do array: 

Resultado:

const bigger = numbers.reduce(getBigger, 0) é igual a = ${bigger}`); // 93