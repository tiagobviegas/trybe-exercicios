const { encode, decode } = require('../exercicio3');

describe('Testa as funções encode e decode', () => {

  test('Se encode e decode são funções;', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');   
  });
  
  test('Se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente, na função encode()', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  
  test('Se a função decode, converte os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  });
  
  test('Se as demais letras/números não são convertidos para cada caso;', () => {
     expect(encode('Tiago')).toBe('T31g4');
     expect(decode('T31g4')).toBe('Tiago');
  });
  

});
