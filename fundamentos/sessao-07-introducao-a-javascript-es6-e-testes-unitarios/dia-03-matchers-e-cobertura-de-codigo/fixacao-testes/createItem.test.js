const createItem = require('./createItem');
describe('a função createItem', () => {
  it.skip('cria um item válido', () => {
    expect(createItem('BMW', 'M3', 850.000, 4))
      .toEqual({ name: 'BMW', quantity: 4, unit: 'M3', price: 850 })
  });
  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});