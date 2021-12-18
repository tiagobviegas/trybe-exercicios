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
//    > Definimos primeiramente uma variável "oddNumbers" que será usada posteriomente para guardar posterioremente a contagem dos números ímpares;
//    > Em seguida fazemos um laço "for" para percorrer todo o array "numbers", indicando que a contagem estabelecida pela variável "i" começará com "0", pegando o primeiro índice do array, continuando a repetição enquanto "i" for menor que o comprimento de "numbers", e enquanto isso acontecer, a cada repetição "i" será acrescido de "1";
//    > Então implementamos o laço de decisão "if" para determinar o quê fazer com o índice de "numbers" caso o valor seja ímpar;
//    > Se o módulo resultante da divisão do valor do índice do array por 2 for diferente de zero, temos que o valor do índice é ímpar;
//    > Assim, escrevemos a condição da seguinte forma: se o valor do módulo de "numbers[i]" dividido por 2 for diferente (!==), a variável "oddNumbers" manterá o próprio valor e acrescentará "+1" ao seu valor;
//    > Ao sair do laço "for" a repetição terá guardado na variável "oddNumbers" terá contabilizado o número de vezes que um número ímpar apareceu no array "numbers".
//    > Com a contabilidade dos números ímpares concluída, criamos um laço condicional "if" depois do laço "for" para definirmos o que será feito com a informação sobre a ocorrência de números ímpares no array "numbers";
//    > E finalizamos o código escrevendo as condições de "if", estabelecendo que se "oddNumbers" for igual a zero (oddNumbers === 0), a mensagem 'nenhum valor ímpar encontrado' será exibida por meio de "console.log". Caso contrário, exibiremos o número de vezes que um número ímpar aparece no array citando "oddNumbers" usando "console.log".
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
//    > Primeiramente criamos a variável "lowerNumber", que receberá o menor valor dos índices do array "numbers", com valor "numbers[0]" para estabelecer o primeiro elemento do array como comparação dos outros índices do array.
//    > Em seguida fazemos um laço "for" para fazer a contagem dos elementos de "numbers", iniciando a contagem com a variável "i" a partir de "0", para pegar o primeiro índice do array, definimos que o laço deverá continuar a repetir enquanto "i" for menor que o comprimento do array e fazer um incremento à "i" de "1" a cada repetição;
//    > Logo depois fazemos um laço condicional "if" definindo que se o valor do índice de "numbers" (numbers[i]) for menor que o menor valor já encontrado, guardado em "lowerNumber", a variável "lowerNumber" será atribuída com esse valor;
//    > Assim, após cada repetição do laço for, a será verificado pelo laço "if" se o número do array é menor que o menor número encontrado, e se a afirmação for positiva, "lowerNumber" guardará o novo valor.
//    > Para finalizar, definimos que o valor contido em "lowerNumber" será exibido por "console.log" como o menor valor de "numbers".
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
//    > Primeiramente criamos a variável "newArray" como um array vazio ([]) para guardar o novo array que será criado ao mesmo tempo que a variável de contagem do laço for sofrerá acréscimo;
//    > Em seguida fazemos um laço "for" para iniciar a contagem da repetição do laço e estabelecemos que ele vai começar do "1", pois "i" será também o valor que será acrescido dentro do novo array (newArray). Assim, precisamos ignorar o valor "0", que seria acrescido ao array se iniciássemos a contagem com "0";
//    > Como a contagem do laço terá os mesmos valores que o array deverá ter, determinamos que a repetição do laço "for" acontecerá até que "i" seja menor do que 25, e que "i" será acrescido de "1" a cada repetição, aumentando seu valor até atingir o valor de 25;
//    > Após determinarmos o comportamento de "for", adicionamos os elementos ao array por usando o método ".push()", que pega o valor contido dentro dos parenteses e insere dentro de um array anteriormente citado. Assim a escrita do código de inserção dos elementos fica: newArray.push(i);
//    > Para finalizar, depois do laço "for" usamos o método "console.log" para imprimimos na tela o array "newArray" formado com números de "i" do laço "for".
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
//    > Começamos criando a variável "result" que receberá o resultado das divisões dos elementos de "newArray";
//    > Então criamos um laço "for" para ler e percorrer todo o "newArray", com a contagem determinada pela variável "i" começando em "0" no primeiro índice de "newArray", com a repetição da leitura de "newArray" ocorrendo enquanto "i" for menor que o comprimento de "newArray" (newArray.length), sendo "i" acrescido de "1" a cada repetição;
//    > Com o laço criado definimos que "result" receberá o resultado de cada elemento de "newArray" (newArray[i]) dividido por 2;
//    > E finalizamos o código com a impressão do conteúdo de "result" por meio de "console.log()."
//
//  let result;
//  for (let i = 0; i < newArray.length; i += 1) {
//    result = newArray[i] / 2;
//    console.log(result);
//  }
//
//
//  EXERCÍCIOS BÔNUS
//
//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//
//    > Começamos o código criando um laço de repetição que terá como contador a variável "i" que iniciará a contage a partir do segundo índice do array "numbers", continuando a repetir enquanto "i" for menor que o comprimento do array, sendo acrescido de 1 a cada repetição;
//    > Em seguida criamos um segundo laço "for" dentro do primeiro laço for, porém mudamos a variável de contagem para "c" e indicamos o contador para iniciar no primeiro índice de "numbers" e se repetir enquanto a contagem de "c" for menor que a de "i". Dessa forma implementamos o método "bubble sort" para realizar o rearranjo do array;
//    > No método "bubble sort" o segundo laço sempre será realizado por completo antes de voltar para continuar fazendo o primeiro laço. Dessa o primeiro laço vai pegar um índice do array numbers para ser comparado com todos os seus elementos. Este índice também servirá como limite de repetição para o segundo laço. Já o segundo laço pegará cada índice que vem antes do índice do primeiro laço e vai comparar com o elemento definido pelo primeiro laço até que o índice de "c" se iguale ao índice de "i".
//    > Assim, dentro do segundo laço definimos as condições para que verificar se a ordem deverá ser revertida.
//    > Criamos um laço de condição "if" que define que se o valor seguinte (numbers[i]) for menor que o valor anterior (numbers[c]), faremos a troca dos valores atribuídos.
//    > Caso a condição ocorra, definimos uma variável (orderedNumbers) para armazenar provisoriamente o valor de "numbers[i]", pois este receberá o valor de "numbers[c]".
//    > Para concretizar a troca de valores, "numbers[c]" receberá o valor de "numbers[i]" que estava armazenado provisoriamente em "orderedNumbers";
//    > Dessa forma, executamos a troca de posição dos elementos ordenando todos dentro do array "numbers";
//    > E finalizamos com o uso de console.log após os laços para exibir "numbers" ordenado/
//
//  1) Ordene o array numbers em ordem crescente e imprima seus valores;
//
//  for (let i = 1; i < numbers.length; i += 1) {
//    for (let c = 0; c < i; c += 1) {
//      if (numbers[i] < numbers[c]) {
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
//    > Reaproveitamos a mesma estrutura "bubble sort" do exercício anterior, porém fazemos alterações no laço condicional "if";
//    > Assim, defimos que se "numbers[i]" for maior que "numbers[c]", a variável de armazenamento provisório "orderedNumbers" receberá o valor de "numbers[c]", em seguida "numbers[c]" receberá numbers[i] e por fim "numbers[i]" receberá o valor original de "numbers[c]" que está armazenado em "orderedNumbers";
//    > Após todos os laços, trazemos o resultado do reordenamento decrescente imprimindo "numbers" por meio de "console.log".
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
//    > Começamos criando um array vazio "newNumbers" que receberá os valores finais do valor de cada índice de "numbers" multiplicado pelo valor do índice subsequente;
//    > Criamos o laço de repetição "for" para percorrer todo o array "numbers" fazendo a leitura de cada índice com início no segundo elemento. Sendo assim, o contador definido pela variável "i" terá valor "1". O laço continuará repetindo enquanto "i" for menor que o comprimento do array e "i" será incrementado em "1" a cada repetição;
//    > Então definimos que o array "newNumbers" receberá um elemento que será a multiplicação do elemento subsequente de "numbers" (numbers[i - 1]) multiplicado pelo elemento apontado pelo contador (numbers[i]);
//    > Após sair do laço, faltará ainda a multiplicação do elemento final de "numbers" por um próximo valor. Por essa sequência não existir, conforme orienta o cabeçalho da questão, multiplicamos o último elemento do array "numbers" (numbers.length - 1) por 2 e o adicionamos a "newNumbers" por meio do comando ".push";
//    > Terminamos então o código imprimindo "newNumbers" usando "console.log".
//
//  let newNumbers = [];
//  for (let i = 1; i < numbers.length; i += 1) {
//    newNumbers.push(numbers[i - 1]*numbers[i]);
//  }
//  newNumbers.push(numbers[numbers.length - 1]*2)
//  console.log(newNumbers);

let string = '';
let espaco = '*';
for (let i = ''; string.length < 4; i += espaco) {
  string += espaco;
}
console.log(string);
  
