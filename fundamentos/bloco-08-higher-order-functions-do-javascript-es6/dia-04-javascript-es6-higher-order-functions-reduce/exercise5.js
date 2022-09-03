// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let counter = 0;
  return (names.toString().split('')).reduce((acc, curr) => curr === 'a' || curr === 'A' ? counter += 1 : counter + 0, 0);
}

console.log(containsA());