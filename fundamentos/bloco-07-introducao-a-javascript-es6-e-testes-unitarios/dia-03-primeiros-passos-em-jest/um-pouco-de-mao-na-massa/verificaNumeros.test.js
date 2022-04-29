const numeros = require('./verificaNumeros');

describe('Requisito 1', () => {
  it('A função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  })
  it('A função recebe [1, 4, 3, 4, 5] e retorna false', () => {
    expect(false).not.toEqual(numeros([1, 2, 3, 4, 5]));
  })
  it('A função retorna "false" ao receber uma string', () => {
    expect(false).toEqual(numeros('number'));
  })
  it('A função retorna "false" ao receber um array vazio', () => {
    expect(false).toEqual(numeros('[]'));
  })
})