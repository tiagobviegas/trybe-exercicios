//  Agora a prática
//
//  1)
//
//  const a = 5;
//  const b = 3;
//
//  console.log(a + b);
//  console.log(a - b);
//  console.log(a * b);
//  console.log(a / b);
//  console.log(a % b);
//
//    
//  2)
//
//  const a = 6;
//  const b = 5;
// 
//  if (a > b) {
//    console.log(a + ' é maior que ' + b);
//  } else if (b > a) {
//    console.log(b + ' é maior que ' + a);
//  } else {
//    console.log('os números são iguais');
//  }
//
//
//  3)
//
//  const a = 9;
//  const b = 6;
//  const c = 3;
//
//  if (a > b && a > c) {
//    console.log(a + ' é maior que ' + b + ' e ' + c);
//  } else if (b > a && b > c) {
//    console.log(b + ' é maior que ' + a + ' e ' + c);
//  } else if (c > a && c > b) {
//    console.log(c + ' é maior que ' + a + ' e ' + b);
//  } else {
//    console.log('os números são iguais')
//  }
//
//
//  4)
// 
// const a = 10;
// const b = 60;
// const c = 10;
// const triangulo = (a + b + c);
// 
// if ((a <= 0) || (b <= 0) || (c <= 0)) {
  // console.log('Ângulo inválido!');
// } else {
  // triangulo === 180 ? console.log(true) : console.log(false)
// }
// 
//
//  5)
//
//  let peca = 'BIG';
//  let convertPeca = peca.toLocaleLowerCase();
//  console.log(convertPeca);
//  switch (convertPeca) {
//    case 'peão':
//      console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
//      break;
//    case 'torre':
//      console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
//      break;
//    case 'cavalo':
//      console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
//      break;
//    case 'bispo':
//      console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
//      break;
//    case 'rainha':
//      console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
//      break;
//    case 'rei':
//      console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
//      break;
//    default:
//      console.log(`Erro! Digite 'peão' ou 'torre' ou 'cavalo' ou 'bispo' ou 'rainha' ou 'rei'!`);
//      break;
//  }
//
//
//  6)
//
//  const a = 7;
//  const b = 6;
//  const c = 2;
//  const odd = true;
//  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//    console.log(odd);
//  } else {
//    console.log(!odd);
//  }
//
//
//  7)
//
//  let salarioBruto;
//  let salarioComInss; 
//  let irAliquota;
//  let inssAliquota;
//  
//  salarioBruto = prompt('Digite seu salário bruto, utilizando "." no lugar da vírgula que separa os centavos');
//  
//  if (salarioBruto < 0) {
//    alert('Erro! Valor inválido');
//  } else if (salarioBruto < 1556.94) {
//    inssAliquota = salarioBruto * 0.08;
//  } else if (salarioBruto <= 2594.92) {
//    inssAliquota = salarioBruto * 0.09;
//  } else if (salarioBruto <= 5189.82) {
//    inssAliquota = salarioBruto * 0.11;
//  } else {
//    inssAliquota = 570.88;
//  }
//  
//  salarioComInss = (salarioBruto - inssAliquota);
//  
//  if (salarioComInss <= 1903.98) {
//    irAliquota = 0
//  } else if (salarioComInss <= 2826.65) {
//    irAliquota = salarioComInss * 0.075 - 142.80;
//  } else if (salarioComInss <= 3751.05) {
//    irAliquota = salarioComInss * 0.15 - 354.80;  
//  } else if (salarioComInss <= 4664.68) {
//    irAliquota = salarioComInss * 0.225 - 636.13;
//  } else if (salarioComInss > 4664.68) {
//    irAliquota = salarioComInss * 0.227 - 869.36;
//  }
//  
//  salarioLiquido = (salarioComInss - irAliquota);
//  salarioLiquido.toFixed(2);
//  alert(`Seu salário líquido é de R$ ${salarioLiquido}`);
