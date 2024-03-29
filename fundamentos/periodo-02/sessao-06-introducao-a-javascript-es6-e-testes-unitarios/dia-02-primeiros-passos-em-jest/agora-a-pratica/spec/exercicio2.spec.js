const { myFizzBuzz } = require('../exercicio2');

describe('Testa o função myFizzBuzz', () => {

  it('A função myFizzBuzz(num), sendo num um número divisível por 3 e 5, tem o retorno esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('A função myFizzBuzz(num), sendo num um número divisível por 3, retorna o esperado.', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('Verfica se a função myFizzBuzz(num), ao receber um número divisível por 5, retorno o esperado.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');    
  });

  it('Checa se ao receber um número que não é divisível por 3 ou 5, myFizzBuzz(num) retorna o esperado.', () => {
    expect(myFizzBuzz(2)).toBe(2);   
  });

  it('Verifica se função myFizzBuzz(num), sendo num um parâmetro que não é um número, retorna o esperado.', () => {
    expect(myFizzBuzz(undefined)).toBeFalsy();
  });
  
});
