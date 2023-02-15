const { encode, decode } = require('../exercicio3');

describe('Testa as funções encode e decode', () => {

  test('Se encode e decode são funções;', () => {
     expect(typeof encode).toBe('function');
     expect(typeof decode).toBe('function');   
  });
  
  test('Se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente, na função encode()', () => {
     expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  
});
