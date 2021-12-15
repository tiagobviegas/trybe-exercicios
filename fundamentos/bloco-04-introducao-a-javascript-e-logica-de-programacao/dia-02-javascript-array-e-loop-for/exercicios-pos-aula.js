//  APROFUNDE SEUS CONHECIMENTOS
// 
//  Vamos colocar mão na massa?
//
//  Preparamos estes exercícios para você fixar seus conhecimentos em JavaScript - Array e loop For. Vamos lá?
//
//  Aprofunde seus conhecimentos
//
//  Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
//
//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//
//
//  1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
//
//  for (let values of numbers) {
//    console.log(values);
//  }
//
//
//  2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//
//  let sum =  0;
//  for (let i = 0; i < numbers.length; i += 1) {
//    sum += numbers[i];
//  }
//  console.log(sum);
//
//
//  3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//
//    > A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
//
//  let sum = 0;
//  let arithmeticMean;
//  for (let i = 0; i < numbers.length; i += 1) {
//    sum += numbers[i];
//    arithmeticMean = sum / numbers.length
//  }
//  console.log(arithmeticMean);
//
// 
//  4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//
//  let sum = 0;
//  let arithmeticMean;
//  let result;
//  for (let i = 0; i < numbers.length; i += 1) {
//    sum += numbers[i];
//    arithmeticMean = sum / numbers.length
//  }
//  if (arithmeticMean > 20) {
//    result = 'valor maior que 20';
//  } else {
//    result = 'valor menor ou igual a 20';
//  }
//  console.log(result);
//
//
//  5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//
//  let highest = 0;
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > highest) {
//      highest = numbers[i];
//    }
//  }
//  console.log(highest);
//
//
//  6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//
//  let oddNumbers = 0;
//  for (let i = 0; i < numbers.length; i += 1) {
//    if(numbers[i] % 2 !== 0) {
//      oddNumbers += 1;
//    }
//  }
//  if (oddNumbers === 0) {
//    console.log('nenhum valor ímpar encontrado')
//  } else {
//    console.log(oddNumbers);
//  }
//
//
//  7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;
//
//  let lowerNumber = numbers[0];
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] < lowerNumber) {
//      lowerNumber = numbers[i];
//    }
//  }
//  console.log(lowerNumber);
//
//
//  8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
//
//  let newArray = [];
//  for (let i = 1; newArray.length < 25; i += 1) {
//    newArray.push(i);
//  }
//  console.log(newArray);
//
//
//  9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
//
//  let result;
//  for (let i = 0; i < newArray.length; i += 1) {
//    result = newArray[i] / 2;
//    console.log(result);
//  }
//
//
//  BÔNUS
//
//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//
//  1) Ordene o array numbers em ordem crescente e imprima seus valores;
//
//  for (let i = 1; i < numbers.length; i += 1) {
//    for (let c = 0; c < i; c += 1) {
//      if (numbers[c] > numbers[i]) {
//        let orderedNumbers = numbers[i];
//        numbers[i] = numbers[c];
//        numbers[c] = orderedNumbers;
//      }
//    }
//  }
//  console.log(numbers);
//
//
//  2) Ordene o array numbers em ordem decrescente e imprima seus valores;
//
//  for (let i = 1; i < numbers.length; i += 1) {
//    for (let c = 0; c < i; c += 1) {
//      if (numbers[i] > numbers[c]) {
//        let orderedNumber = numbers[c];
//        numbers[c] = numbers[i];
//        numbers[i] = orderedNumber;
//      }
//    }
//  }
//  console.log(numbers);
//
//
//  3) Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
//
//  [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
//
//  let newNumbers = [];
//  for (let i = 1; i < numbers.length; i += 1) {
//    newNumbers.push(numbers[i-1]*numbers[i]);
//  }
//  newNumbers.push(numbers[numbers.length-1]*2)
//  console.log(newNumbers);

  
