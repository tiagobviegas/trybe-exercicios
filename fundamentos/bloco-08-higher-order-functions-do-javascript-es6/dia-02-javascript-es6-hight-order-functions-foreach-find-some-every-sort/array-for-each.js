const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//  A cada elemento do array, chamado pela função "numbers.forEach", a função "multipliesFor2" é chamada como parâmetro de "forEach". Este por sua vez interpreta que este parâmetro (por ser o primeiro) recebe os valores do array numbers. Assim, "element" carrega as informações de cada valor do array "numbers" para ser utilizado na tabuada de 2, exercida por "multipliesFor2"; 