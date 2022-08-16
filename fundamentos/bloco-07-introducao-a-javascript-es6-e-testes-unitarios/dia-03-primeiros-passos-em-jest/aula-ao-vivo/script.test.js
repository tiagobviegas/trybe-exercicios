const { sum, summationOf } = require('./script')

// EXEMPLO 1

//  test ou it('texto descritivo do que faz o teste', () => {})
test('adiciona 1 + 2 igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adiciona 0 + 0 igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adiciona (-5) + (-39) igual a (-44)', () => {
  expect(sum(-5, -39)).toBe(-44);
});

test('adiciona 0 + (-10) igual a (-10)', () => {
  expect(sum(0, -10)).toBe(-10);
});

test('adiciona 5.1 + 6.55 igual a 11.65', () => {
  expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});


// EXEMPLO 2

test('espera que a função exista', () => {
  expect(typeof summationOf).toBe('function');
});

test('espera que o valor passado 1 retorne 1', () => {
  expect(summationOf(1)).toBe(1);
});

test('espera que o valor passado 3 retorne 6', () => {
  expect(summationOf(3)).toBe(6);
});

test('espera que o valor passado 5 retorne 15', () => {
  expect(summationOf(5)).toBe(15);
});
