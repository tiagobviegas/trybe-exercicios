const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

const countA = () => {
  // retorne seu código aqui
  let letras = 0;
  names.toString().split('').map((letra) => 
    letra.match(/a/gi) ? letras += 1 : letras += 0);
  return letras
};

console.log(countA());