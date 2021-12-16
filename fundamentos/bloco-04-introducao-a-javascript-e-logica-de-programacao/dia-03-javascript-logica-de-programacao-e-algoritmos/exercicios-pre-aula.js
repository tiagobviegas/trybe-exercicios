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
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//
//
//  1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
//
//    > Primeiro usamos o laço "for/of" para determinar a forma pela qual vamos acessar os elementos do array "numbers";
//    > Em seguida definimos com a variável "values" que queremos pegar os valores do elemento iterável, no caso valores atribuídos aos índices do (of) array "numbers".
//    > Por fim imprimimos os valores na tela por meio da função "console.log".
//
//  for (let values of numbers) {
//    console.log(values);
//  }
//
//
//  2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//
//    > Primeiro definimos a variável "sum" para armazenamento da soma que acontecerá futuramente;
//    > Em seguida estabelecemos um laço de repetição "for" cuja contagem de repetições é definida pela variável "i" se iniciando em "0", indicando que a leitura do array "numbers" vai começar pelo primeiro índice do array;
//    > Estabelecemos a condição de repetição do laço para que a ação ocorra enquanto o valor de "i" for menor que o comprimento do array (numbers.length);
//    > Finalizamos os parâmetros de funcionamento do laço "for" estabelecendo que a cada repetição a variável de contagem "i" será incrementada em "1" até que a condição de repetição seja satisfeita;
//    > O código continua com a implementação da soma dos valores contidos no array que serão armazenados na variável "sum". A cada repetição do laço "sum" será o valor dela mesma mais o valor do índice do array "numbers";
//    > Ao final das repetições do laço, a variável "sum" terá armazenada o valor de todos o números do array "numbers", sendo necessário apenas o uso da função "console.log" para imprimir o valor de "sum".
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
//    OBS: A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
//    
//    > Primeiramente criamos uma variável "sum" para guardar a futura soma dos valores dos elementos do array;
//    > Então fazemos um laço "for" para fazer a leitura de todos os elementos de "numbers", começando a leitura pelo primeiro índice do array com a variável "i" com valor "0". Fazemos o laço de repetição continuar enquanto "i" for menor que o comprimento do array (number.length), incrementando o valor de "i" em "1" a cada repetição;
//    > Dessa forma estabelecemos que durante esse laço, a cada repetição a variável "sum" manterá o próprio valor e somará o valor do índice do array, determinado por "numbers[i]";
//    > Após a saída do laço "for" estabelecemos que a variável "arithmeticMean" receberá o valor de sum, que o dividirá pelo número de elementos do array (numbers.length) para encontrar a média aritmética;
//    > Por fim, usamos console.log para exibir o valor da média aritmética da soma dos elementos do array representada por "arithmeticMean".
//
//  let sum = 0;
//  for (let i = 0; i < numbers.length; i += 1) {
//    sum += numbers[i];
//  }
//  let arithmeticMean = sum / numbers.length;
//  console.log(arithmeticMean);
//
// 
//  4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//
//    > Aproveitamos a variável "sum" e as primeiras cinco linhas do código anterior e as utilizamos para fazer a soma dos elementos de "numbers" e obter a média artimética dos seus elementos;
//    > Criamos antes do início do código a variável "result" que vai exibir a informação das condições conforme as circunstâncias;
//    > Após o cálculo de média aritmética fazemos um laço de decisão com "if" para avaliar o valor de "arithmeticMean". Se a média for maior que 20, a variável "result" receberá a mensagem 'valor maior que 20', senão "result" receberá a string 'valor menor ou igual a 20';
//    > E assim, definimos que após a avaliação do resultado da média, a variável "result" contendo a mensagem será exibida via "console.log". 
//
//  let sum = 0;
//  let result;
//  for (let i = 0; i < numbers.length; i += 1) {
//    sum += numbers[i];
//  }
//  let arithmeticMean = sum / numbers.length;
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
//    > Iniciamos criando a variável "highest" com valor do primeiro índice para ser referência de comparação entre os elementos do array, e para futuramente ser usada para guardar o maior valor de "numbers";
//    > Então iniciamos um laço de repetição "for" para ler todos os elementos de "numbers", fazendo a contagem ser atribuída a variável "i", que começará valendo "0" e enquanto seu valor for menor que o comprimento de "numbers" (numbers.length), "i" será acrescido de "1" a cada repetição, fazendo mudar a leitura de um índice para o próximo;
//    > Então fazemos um laço de decisão com "if" estabelecendo que se o índice do array (numbers[i]) for maior do que o maior número (highest) o valor de highest passará a ser o do de "numbers[i]". Essa checagem será feita a cada repetição do laço "for";
//    > Assim, após o término do laço, usamos console.log para exibir o valor mais alto do array atribuído à variável "highest". 
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
//    > Definimos primeiramente uma variável que será usada posteriomente para guardar 
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

  
