const poolGen = () => (Math.random() * 4 + 1).toFixed();

const poolCheck = (number, result) => 
  number === result ?
    `Parabéns, você ganhou! (${number}:${result})` :
    `Tente novamente... (${number}:${result})`;

console.log(poolCheck('5', poolGen()));