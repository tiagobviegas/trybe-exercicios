const { myFizzBuzz } = require('../exercicio2');

describe('Testa o função myFizzBuzz', () => {

  it('A função myFizzBuzz(num), sendo num um número divisível por 3 e 5, tem o retorno esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('A função myFizzBuzz(num), sendo num um número divisível por 3, retorna o esperado.', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  // it('', () => {
    
  // });

  // it('', () => {
    
  // });

  // it('', () => {
    
  // });
  
});