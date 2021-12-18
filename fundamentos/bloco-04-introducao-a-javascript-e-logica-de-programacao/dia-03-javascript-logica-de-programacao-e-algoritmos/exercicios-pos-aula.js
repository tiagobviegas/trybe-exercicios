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
//