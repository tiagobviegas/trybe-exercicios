//  Agora a prática
//
//  Bora fixar o conteúdo de hoje?!
//  
//  Preparamos estes exercícios para você fixar seus conhecimentos em sobre Lógica de Programação e Algoritmos . Eles já contam com feedback na hora e são rapidinhos! Vamos lá?
//
//  Aprofunde seus conhecimentos
//  
//  Leia atentamente os enunciados e faça o que se pede!
//
//  Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger , acesse nosso conteúdo sobre isso.
//
//
//  1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//
//  O fatorial é representado pelo sinal !
//
//  4! = 4 x 3 x 2 x 1 = 24
//
//  Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
//
//  let number = 1;
//  for (let i = 10; i > 1; i -= 1) {
//    number *= i;
//  }
//  console.log(number);
//
//
//  2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
//  
//  RESOLUÇÃO CONVENCIONAL
//
//  let word = 'tryber';
//  let reversed = '';
//  for (let i = word.length -1; i >= 0; i -= 1) {
//    reversed += word[i];
//  }
//  console.log(reversed);
//
//  RESOLUÇÃO ALTERNATIVA:
//  let word = 'tryber';
//  console.log(word.split('').reverse().join(''));
//
//
//  3- Considere o array de strings abaixo:
//
//  let array = ['java', 'javascript', 'python', 'html', 'css'];
//
//  Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
//
//  let minor;
//  for (let i = 1; i < array.length; i += 1) {
//    for (let c = 0; c < i; c += 1) {
//      if (array[i].length <= array[c].length) {
//        minor = array[i];
//      }
//    }
//  }
//  console.log(minor);
//
//  let major = '';
//  for (let i = 1; i < array.length; i += 1) {
//    for (let c = 0; c < i; c += 1) {
//      if (major < array[c].length) {
//        major = array[i];
//      }
//    }
//  }
//  console.log(major);
//
//
//  4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
//
//  let prime = [];
//  for (let i = 2; i < 50; i += 1) {
//    let checkPrime = 1;
//    for (let c = 1; c < i; c += 1) {
//      if(i % c === 0) {
//        checkPrime += 1; 
//      }
//    }
//    if(checkPrime < 3) {
//      prime.push(i); 
//    }   
//  }
//  console.log(prime[prime.length - 1]);
//  
//
//  EXERCÍCIOS BÔNUS
//
//  1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
//  
//  n = 5
//  
//  *****
//  *****
//  *****
//  *****
//  *****
//
//
//  let number = 5;
//  for (let i = 0; i < number; i += 1) {
//    let asterisk = '';
//    for (let c = 0; c < number; c += 1) {
//      asterisk += '*';
//    }
//    console.log(asterisk);
//    asterisk = '';
//  }
//
//
//  2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
//
//  n = 5
//  
//  *
//  **
//  ***
//  ****
//  *****
//
//  let asterisk = '';
//  let number = 5;
//  for (let i = 0; i < number; i += 1) {
//    asterisk += '*';
//    console.log(asterisk);
//  }
//
//
//  3- Agora inverta o lado do triângulo. Por exemplo:
//
//  n = 5
//  
//      *
//     **
//    ***
//   ****
//  *****
//  
//  Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
//
  let number = 9;
  let asterisk = '';
  let space = '';
  for(let i = number; i > 0; i -= 1) {
    asterisk += '*';
    for(let c = i - 1; c > 0; c -= 1) {
      space += ' ';
    }
    console.log(space + asterisk);
    space = '';
  }
//  
//  
//  4- Depois, faça uma pirâmide com n asteriscos de base:
//  
//  n = 5
//  
//    *
//   ***
//  *****
//  
//  
//  5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
//  
//  Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
//  n = 7
//  
//     *
//    * *
//   *   *
//  *******
//  
//  
//  6- Faça um programa que diz se um número definido numa variável é primo ou não.
//      > Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero;
//      > Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
//  
//  