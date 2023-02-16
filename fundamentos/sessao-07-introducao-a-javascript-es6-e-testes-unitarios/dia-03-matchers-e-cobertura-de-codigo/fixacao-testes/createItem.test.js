const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20))
      .toEqual({ name: 'banana', quantity: 20, unit: 'kg', price: 1.99 });
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toHaveProperty('quantity', 0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => { createItem() }).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect((() => { createItem(1.99, 'kg', 'banana', 20) }))
      .toThrowError('O nome do item deve ser uma string');
  });
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});