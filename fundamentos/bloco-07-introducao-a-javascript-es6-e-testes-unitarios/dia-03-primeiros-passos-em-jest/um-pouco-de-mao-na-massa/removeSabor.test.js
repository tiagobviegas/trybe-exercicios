const removeBebida = require('./removeSabor');

describe('Remove sabor de bebida', () => {
  it('Remover água', () => {
    const bebidas = ['garapa', 'tequila', 'água', 'vinho', 'groselha'];
    expect(['garapa', 'tequila', 'vinho', 'groselha']).toEqual(removeBebida(bebidas, 'água'));
  });
  it('Remover garapa', () => {
    const bebidas = ['garapa', 'tequila', 'água', 'vinho', 'groselha'];
    expect(removeBebida(bebidas, "garapa")).toEqual(['tequila', 'água', 'vinho', 'groselha']);
  });
  it('Remover groselha caso exista', () => {
    const bebidas = ['garapa', 'tequila', 'água', 'vinho', 'groselha'];
    expect(removeBebida(bebidas, "groselha")).toEqual(['garapa', 'tequila', 'água', 'vinho']);
  });
});
